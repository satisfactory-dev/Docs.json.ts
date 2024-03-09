import ts, {Identifier} from "typescript";
import {import_these_later, ImportTracker} from "./TypesGeneration";
import {basename, dirname, relative} from "node:path";

declare type initial_check_nodes =
	| ts.ClassDeclaration
	| ts.FunctionDeclaration
	| ts.TypeAliasDeclaration;

declare type initial_check_node_has_Identifier = (
	initial_check_nodes
	& {name: Identifier}
);

export class DocsTsAutoImports
{
	private readonly files_entries:[string, ts.Node[]][];
	private readonly comes_from: {[key: string]: string} = {};
	constructor(files:{[key: string]: ts.Node[]}) {
		this.files_entries = Object.entries(files);
	}

	private is_named_ClassDeclaration(node:ts.Node) : node is ts.ClassDeclaration & {name:Identifier} {
		return ts.isClassDeclaration(node) && !!node.name;
	}

	private is_named_FunctionDeclaration(node:ts.Node) : node is ts.FunctionDeclaration & {name:Identifier}
	{
		return ts.isFunctionDeclaration(node) && !!node.name;
	}

	private has_export(
		node:initial_check_nodes
	) : node is (typeof node) & {modifiers: [ts.SyntaxKind.ExportKeyword]} {
		return (
			!!node.modifiers
			&& node.modifiers.map(
				(inner_maybe) => inner_maybe.kind
			).includes(ts.SyntaxKind.ExportKeyword)
		);
	}

	private filter_node(maybe:ts.Node): maybe is initial_check_node_has_Identifier
	{
		return (
			(
				this.is_named_ClassDeclaration(maybe)
				|| this.is_named_FunctionDeclaration(maybe)
				|| ts.isTypeAliasDeclaration(maybe)
			)
			&& this.has_export(maybe)
		);
	}

	private filter_nodes(nodes:ts.Node[]) : initial_check_node_has_Identifier[]
	{
		return nodes.filter(
			(maybe) : maybe is initial_check_node_has_Identifier => {
				return this.filter_node(maybe)
			}
		);
	}

	private file_exports(): {[key: string]: [string, ...string[]]}
	{
		const file_exports: {[key: string]: [string, ...string[]]} = {};

		for (const entry of this.files_entries) {
			const [filename, nodes] = entry;

			const check_these = this.filter_nodes(nodes);

			for (const checking of check_these) {
				if (!(filename in file_exports)) {
					file_exports[filename] = [checking.name.escapedText.toString()];
				} else {
					file_exports[filename].push(checking.name.escapedText.toString());
				}
			}
		}

		return file_exports;
	}

	private references_to_names(
		filename:string,
		nodes:ts.TypeReferenceNode[]
	) : string[] {
		return nodes.filter(
			(
				maybe
			): maybe is ts.TypeReferenceNode & {
				typeName: ts.Identifier;
			} => {
				return (
					ts.SyntaxKind.Identifier ===
					maybe.typeName.kind
				);
			}
		)
			.map((property_type) => {
				return property_type.typeName.escapedText.toString();
			})
			.reduce((was, is) => {
				if (!was.includes(is)) {
					was.push(is);
				}

				return was;
			}, [] as string[])
			.filter(
				(
					maybe
				): maybe is Exclude<
					keyof typeof this.comes_from,
					number
				> => {
					return (
						maybe in this.comes_from &&
						filename !== `${this.comes_from[maybe]}.ts`
					);
				}
			);
	}

	private filter_types_to_reference_nodes(
		nodes:ts.TypeNode[]
	) : ts.TypeReferenceNode[] {
		return nodes.filter(
			(maybe) : maybe is ts.TypeReferenceNode => {
				return ts.SyntaxKind.TypeReference === maybe.kind;
			}
		);
	}

	private filter_is_tuple_type(maybe:ts.TypeNode) : maybe is ts.TupleTypeNode {
			return ts.SyntaxKind.TupleType === maybe.kind;
		}

	private extract_type_references_from_tuple_type_node(
		node:ts.TupleTypeNode
	) : ts.TypeReferenceNode[] {
	return this.filter_types_to_reference_nodes(
		node.elements.filter(
			(maybe) => {
			return ts.SyntaxKind.NamedTupleMember !== maybe.kind;
		}));
	}

	private reduce_type_references_arrays_to_type_reference_array(
		arrays:ts.TypeReferenceNode[][]
	) : ts.TypeReferenceNode[] {
		return arrays.reduce((was, is) => {
			was.push(...is);

			return was;
		}, [] as ts.TypeReferenceNode[]);
	}

	private extract_type_references_from_type_literal_node(
		node:ts.TypeLiteralNode
	) : ts.TypeReferenceNode[] {
		return this.reduce_type_references_arrays_to_type_reference_array(
			node.members.filter(
				(maybe) : maybe is ts.PropertySignature => {
					return ts.SyntaxKind.PropertySignature === maybe.kind;
				}
			).filter(
				(maybe) : maybe is ts.PropertySignature & {type:ts.TupleTypeNode} => {
					return undefined !== maybe.type && this.filter_is_tuple_type(maybe.type);
				}
			).map(
				(property_signature) => {
					return this.extract_type_references_from_tuple_type_node(
						property_signature.type
					);
				}
			)
		);
	}

	async generate()
	{
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

		const auto_imports: import_these_later = {};

		for (const entry of this.files_entries) {
			const [filename, nodes] = entry;

			const type_aliases = nodes.filter(
				(maybe) : maybe is ts.TypeAliasDeclaration => {
					return ts.SyntaxKind.TypeAliasDeclaration === maybe.kind;
				}
			);

			const union_types = type_aliases.filter(
				(maybe) : maybe is ts.TypeAliasDeclaration & {type: ts.UnionTypeNode}  => {
					return ts.SyntaxKind.UnionType === maybe.type.kind;
				}
			).map(e => e.type.types).reduce(
				(was, is) => {
					was.push(...is);
					return was;
				},
				[] as ts.TypeNode[]
			);

			const union_type_references = this.filter_types_to_reference_nodes(union_types);

			const union_type_tuple_references = this.reduce_type_references_arrays_to_type_reference_array
			(union_types.filter(
				this.filter_is_tuple_type
			).map((e) => this.extract_type_references_from_tuple_type_node(e)));

			const union_type_literal_sub_references = this.reduce_type_references_arrays_to_type_reference_array(
				union_types.filter(
				(maybe) : maybe is ts.TypeLiteralNode => {
					return ts.SyntaxKind.TypeLiteral === maybe.kind;
				}
			).map((e) => this.extract_type_references_from_type_literal_node(e)));

			const class_declarations = nodes.filter(
				(maybe): maybe is ts.ClassDeclaration => {
					return ts.SyntaxKind.ClassDeclaration === maybe.kind;
				}
			);

			const property_declarations = class_declarations
				.map((declaration) =>
					declaration.members.filter(
						(maybe): maybe is ts.PropertyDeclaration => {
							return (
								ts.SyntaxKind.PropertyDeclaration ===
								maybe.kind
							);
						}
					)
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
								ts.SyntaxKind.TypeReference ===
								maybe.type?.kind
							);
						}
					)
					.map((property_declaration) => {
						return property_declaration.type;
					});

			const reference_names = [
				...this.references_to_names(
					filename,
					property_declarations_use_type_reference
				),
				...this.references_to_names(
					filename,
					union_type_references
				),
				...this.references_to_names(
					filename,
					union_type_tuple_references
				),
				...this.references_to_names(
					filename,
					union_type_literal_sub_references
				),
			];

			if (filename === 'classes/FGBuildable.ts') {
				console.log(reference_names);

				throw new Error('foo');
			}

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
