import ts, {
	EntityName, Identifier, TypeReferenceNode,
} from 'typescript';
import {
	import_these_later, ImportTracker,
} from './TypesGeneration';
import {
	basename, dirname, relative,
} from 'node:path';
import {
	writeFile,
} from 'node:fs/promises';
import {
	from_Node_array,
} from './DocsToAutoImport/from_Node_array';
import {
	UnexpectedlyUnknown,
} from './Exceptions';

declare type initial_check_nodes =
	| ts.ClassDeclaration
	| ts.FunctionDeclaration
	| ts.TypeAliasDeclaration;

declare type initial_check_node_has_Identifier = initial_check_nodes & {
	name: Identifier;
};

export class DocsTsAutoImports {
	private readonly comes_from: {[key: string]: string} = {};
	private readonly files_entries: [string, ts.Node[]][];
	constructor(files: {[key: string]: ts.Node[]}) {
		this.files_entries = Object.entries(files);
	}

	async generate() {
		const file_exports = this.file_exports();

		for (const entry of Object.entries(file_exports)) {
			const [filename, exports_these] = entry;

			for (const export_name of exports_these) {
				if (export_name in this.comes_from) {
					throw new UnexpectedlyUnknown(
						entry,
						`${export_name} conflict!`
					);
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

			const node_names = from_Node_array(nodes);

			const reference_names: Exclude<
				keyof typeof this.comes_from,
				number
			>[] = [...node_names]
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

					if (!import_from.startsWith('.')) {
						import_from = `./${import_from}`;
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

	private static filter_node(
		maybe: ts.Node
	): maybe is initial_check_node_has_Identifier {
		return (
			(this.is_named_ClassDeclaration(maybe)
				|| this.is_named_FunctionDeclaration(maybe)
				|| ts.isTypeAliasDeclaration(maybe))
			&& this.has_export(maybe)
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

	private static has_export(
		node: initial_check_nodes
	): node is typeof node & {modifiers: [ts.SyntaxKind.ExportKeyword]} {
		return (
			!!node.modifiers
			&& node.modifiers
				.map((inner_maybe) => inner_maybe.kind)
				.includes(ts.SyntaxKind.ExportKeyword)
		);
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
			ts.isClassDeclaration(node)
			&& DocsTsAutoImports.is_Identifier(node.name)
		);
	}

	private static is_named_FunctionDeclaration(
		node: ts.Node
	): node is ts.FunctionDeclaration & {name: Identifier} {
		return (
			ts.isFunctionDeclaration(node)
			&& DocsTsAutoImports.is_Identifier(node.name)
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
}
