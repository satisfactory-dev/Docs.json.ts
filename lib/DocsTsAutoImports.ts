import ts, {EntityName, Identifier, TypeReferenceNode} from 'typescript';
import {import_these_later, ImportTracker} from './TypesGeneration';
import {basename, dirname, relative} from 'node:path';
import {writeFile} from 'node:fs/promises';

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
		return [
			...nodes.filter(ts.isTypeReferenceNode),
			...DocsTsAutoImports.union_type_tuple_references(nodes),
			...DocsTsAutoImports.union_type_literal_sub_references(nodes),
		];
	}

	private static extract_type_references_from_tuple_type_node(
		node: ts.TupleTypeNode
	): ts.TypeReferenceNode[] {
		return DocsTsAutoImports.filter_types_to_reference_nodes(
			node.elements.filter((maybe) => {
				return !ts.isNamedTupleMember(maybe);
			})
		);
	}

	private static reduce_type_references_arrays_to_type_reference_array(
		arrays: ts.TypeReferenceNode[][]
	): ts.TypeReferenceNode[] {
		return arrays.reduce((was, is) => {
			was.push(...is);

			return was;
		}, [] as ts.TypeReferenceNode[]);
	}

	private static extract_type_references_from_type_literal_node(
		node: ts.TypeLiteralNode
	): ts.TypeReferenceNode[] {
		return this.reduce_type_references_arrays_to_type_reference_array(
			node.members
				.filter(ts.isPropertySignature)
				.filter(
					(
						maybe
					): maybe is ts.PropertySignature & {
						type: ts.TupleTypeNode;
					} => {
						return (
							undefined !== maybe.type &&
							ts.isTupleTypeNode(maybe.type)
						);
					}
				)
				.map((property_signature) => {
					return this.extract_type_references_from_tuple_type_node(
						property_signature.type
					);
				})
		);
	}

	private static union_types(nodes:ts.TypeAliasDeclaration[]) : ts.TypeNode[]
	{
		return nodes
				.filter(
					(
						maybe
					): maybe is ts.TypeAliasDeclaration & {
						type: ts.UnionTypeNode;
					} => {
						return ts.isUnionTypeNode(maybe.type);
					}
				)
				.map((e) => e.type.types)
				.reduce((was, is) => {
					was.push(...is);
					return was;
		}, [] as ts.TypeNode[]);
	}

	private static union_type_tuple_references(union_types:ts.TypeNode[]) : ts.TypeReferenceNode[]
	{
		return DocsTsAutoImports.reduce_type_references_arrays_to_type_reference_array(
			union_types
				.filter(ts.isTupleTypeNode)
				.map((e) =>
					DocsTsAutoImports.extract_type_references_from_tuple_type_node(
						e
					)
				)
		);
	}

	private static union_type_literal_sub_references(union_types:ts.TypeNode[]) : ts.TypeReferenceNode[]
	{
		return DocsTsAutoImports.reduce_type_references_arrays_to_type_reference_array(
				union_types
				.filter(ts.isTypeLiteralNode)
				.map((e) =>
					DocsTsAutoImports.extract_type_references_from_type_literal_node(
						e
					)
				)
		);
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

			const union_types = DocsTsAutoImports.union_types(type_aliases);

			const class_declarations = nodes.filter(ts.isClassDeclaration);

			const property_declarations = class_declarations
				.map((declaration) =>
					declaration.members.filter(ts.isPropertyDeclaration)
				)
				.reduce((was, is) => {
					was.push(...is);
					return was;
				}, []);

			const property_declarations_use_type_reference =
				property_declarations
					.filter(
						(
							maybe
						): maybe is ts.PropertyDeclaration & {
							type: ts.TypeReferenceNode;
						} => {
							return (
								!!maybe.type &&
								ts.isTypeReferenceNode(maybe.type)
							);
						}
					)
					.map((property_declaration) => {
						return property_declaration.type;
					});

			const property_declarations_use_union_type_references =
				property_declarations
					.filter(
						(
							maybe
						): maybe is ts.PropertyDeclaration & {
							type: ts.UnionTypeNode;
						} => {
							return (
								!!maybe.type && ts.isUnionTypeNode(maybe.type)
							);
						}
					)
					.map((node) => {
						return DocsTsAutoImports.filter_types_to_reference_nodes(
							[...node.type.types]
						);
					})
					.flat();

			const reference_names = [
				...this.references_to_names(
					filename,
					property_declarations_use_type_reference
				),
				...this.references_to_names(filename, DocsTsAutoImports.filter_types_to_reference_nodes(union_types)),
				...this.references_to_names(
					filename,
					property_declarations_use_union_type_references
				),
			];

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
