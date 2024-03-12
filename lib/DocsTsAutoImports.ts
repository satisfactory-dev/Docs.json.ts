import ts, {EntityName, Identifier, TypeReferenceNode} from 'typescript';
import {import_these_later, ImportTracker} from './TypesGeneration';
import {basename, dirname, relative} from 'node:path';
import {writeFile} from 'node:fs/promises';
import {UnionTypes} from './DocsTsAutoImports/UnionTypes';
import {PropertyDeclarations} from './DocsTsAutoImports/PropertyDeclarations';
import {IntersectionTypes} from './DocsTsAutoImports/IntersectionTypes';
import {ClassParent} from './DocsTsAutoImports/ClassParent';

declare type initial_check_nodes =
	| ts.ClassDeclaration
	| ts.FunctionDeclaration
	| ts.TypeAliasDeclaration;

declare type initial_check_node_has_Identifier = initial_check_nodes & {
	name: Identifier;
};

export class DocsTsAutoImports {
	private readonly files_entries: [string, ts.Node[]][];
	private readonly comes_from: {[key: string]: string} = {};
	constructor(files: {[key: string]: ts.Node[]}) {
		this.files_entries = Object.entries(files);
	}

	private static is_Identifier(
		maybe: Identifier | undefined | EntityName
	): maybe is Identifier {
		return !!maybe && ts.isIdentifier(maybe);
	}

	private static is_named_ClassDeclaration(
		node: ts.Node
	): node is ts.ClassDeclaration & {name: Identifier} {
		return (
			ts.isClassDeclaration(node) &&
			DocsTsAutoImports.is_Identifier(node.name)
		);
	}

	private static is_named_FunctionDeclaration(
		node: ts.Node
	): node is ts.FunctionDeclaration & {name: Identifier} {
		return (
			ts.isFunctionDeclaration(node) &&
			DocsTsAutoImports.is_Identifier(node.name)
		);
	}

	private static has_export(
		node: initial_check_nodes
	): node is typeof node & {modifiers: [ts.SyntaxKind.ExportKeyword]} {
		return (
			!!node.modifiers &&
			node.modifiers
				.map((inner_maybe) => inner_maybe.kind)
				.includes(ts.SyntaxKind.ExportKeyword)
		);
	}

	private static filter_node(
		maybe: ts.Node
	): maybe is initial_check_node_has_Identifier {
		return (
			(this.is_named_ClassDeclaration(maybe) ||
				this.is_named_FunctionDeclaration(maybe) ||
				ts.isTypeAliasDeclaration(maybe)) &&
			this.has_export(maybe)
		);
	}

	private static filter_nodes(
		nodes: ts.Node[]
	): initial_check_node_has_Identifier[] {
		return nodes.filter(
			(maybe): maybe is initial_check_node_has_Identifier => {
				return this.filter_node(maybe);
			}
		);
	}

	private static node_IdentifierName(
		node:
			| initial_check_node_has_Identifier
			| (TypeReferenceNode & {typeName: Identifier})
	) {
		const from = ts.isTypeReferenceNode(node) ? node.typeName : node.name;

		return from.escapedText.toString();
	}

	private file_exports(): {[key: string]: [string, ...string[]]} {
		const file_exports: {[key: string]: [string, ...string[]]} = {};

		for (const entry of this.files_entries) {
			const [filename, nodes] = entry;

			const check_these = DocsTsAutoImports.filter_nodes(nodes);

			for (const checking of check_these) {
				if (!(filename in file_exports)) {
					file_exports[filename] = [
						DocsTsAutoImports.node_IdentifierName(checking),
					];
				} else {
					file_exports[filename].push(
						DocsTsAutoImports.node_IdentifierName(checking)
					);
				}
			}
		}

		return file_exports;
	}

	private static is_TypeReference_with_Identifier(
		node: ts.Node
	): node is ts.TypeReferenceNode & {
		typeName: ts.Identifier;
	} {
		return (
			ts.isTypeReferenceNode(node) &&
			DocsTsAutoImports.is_Identifier(node.typeName)
		);
	}

	private static are_TypeReferences_with_Identifier(
		nodes: ts.Node[]
	): (ts.TypeReferenceNode & {
		typeName: ts.Identifier;
	})[] {
		return nodes.filter(
			DocsTsAutoImports.is_TypeReference_with_Identifier
		);
	}

	private references_to_names(
		filename: string,
		nodes: ts.TypeReferenceNode[]
	): string[] {
		return DocsTsAutoImports.are_TypeReferences_with_Identifier(nodes)
			.map(DocsTsAutoImports.node_IdentifierName)
			.reduce((was, is) => {
				if (!was.includes(is)) {
					was.push(is);
				}

				return was;
			}, [] as string[])
			.filter(
				(
					maybe
				): maybe is Exclude<keyof typeof this.comes_from, number> => {
					return (
						maybe in this.comes_from &&
						filename !== `${this.comes_from[maybe]}.ts`
					);
				}
			);
	}

	private static filter_types_to_reference_nodes(
		nodes: ts.TypeNode[]
	): ts.TypeReferenceNode[] {
		return [...nodes.filter(ts.isTypeReferenceNode)];
	}

	async generate() {
		const file_exports = this.file_exports();

		for (const entry of Object.entries(file_exports)) {
			const [filename, exports_these] = entry;

			for (const export_name of exports_these) {
				if (export_name in this.comes_from) {
					throw new Error(`${export_name} conflict!`);
				}

				this.comes_from[export_name] = filename.replace(/\.ts$/, '');
			}
		}

		await writeFile(
			`/app/imports-come-from.json`,
			JSON.stringify(this.comes_from, null, '\t') + '\n'
		);

		const auto_imports: import_these_later = {};

		for (const entry of this.files_entries) {
			const [filename, nodes] = entry;

			const type_aliases = nodes.filter(ts.isTypeAliasDeclaration);

			const class_declarations = nodes.filter(ts.isClassDeclaration);

			const reference_names: Exclude<
				keyof typeof this.comes_from,
				number
			>[] = [
				...this.references_to_names(filename, [
					...new PropertyDeclarations(
						PropertyDeclarations.class_declarations_to_property_declarations(
							class_declarations
						)
					).extracted,
					...new UnionTypes(
						UnionTypes.declarations_to_types(type_aliases)
					).extracted,
					...new IntersectionTypes(
						IntersectionTypes.declarations_to_types(type_aliases)
					).extracted,
				]),
				...ClassParent.extract_parent_classes(class_declarations).map(
					(e) => e.escapedText.toString()
				),
			]
				.filter((maybe) => maybe in this.comes_from)
				.filter(
					(maybe) =>
						filename.replace(/\.ts$/, '') !==
						this.comes_from[maybe]
				);

			if (reference_names.length) {
				if (!(filename in auto_imports)) {
					auto_imports[filename] = {};
				}

				for (const import_this of reference_names) {
					let import_from = `${relative(dirname(filename), dirname(this.comes_from[import_this]))}/${basename(this.comes_from[import_this])}`;

					if (import_from.startsWith('/')) {
						import_from = `.${import_from}`;
					}

					if (!(import_from in auto_imports[filename])) {
						auto_imports[filename][import_from] = [];
					}

					if (
						!auto_imports[filename][import_from].includes(
							import_this
						)
					) {
						auto_imports[filename][import_from].push(import_this);
					}
				}
			}
		}

		ImportTracker.merge_and_set_imports(auto_imports);
	}
}
