import {
	DocsDataItem,
	DocsTsGenerator,
} from './DocsTsGenerator';
import {
	GeneratesMarkdown, progress_group, reduce, remove_indentation,
} from './MarkdownUtilities';
import {
	ExpressionResult,
	Generator,
} from './DataDiscovery/Generator';
import {
	FilesGenerator,
} from './FilesGenerator';
import {
	adjust_unrealengine_value,
} from './CustomParsingTypes/UnrealEngineString';
import {
	NoMatchError,
} from './Exceptions';
import {
	adjust_class_name,
	create_const_statement, create_modifiers,
	type_reference_node, variable,
} from './TsFactoryWrapper';
import ts from 'typescript';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	Generator as DocsDataItemGenerator,
} from './DataDiscovery/Update8/DocsDataItem';
import {
	ObjectExtendsButHasNoAdditionalProperties,
} from './DataDiscovery/JsonSchema/Object';
import {
	UnboundArray,
} from './DataDiscovery/JsonSchema/Array';
import {
	NumberStrings,
} from './DataDiscovery/CustomTypes/NumberStrings';
import {
	BooleanOrBooleanExtended,
} from './DataDiscovery/CustomTypes/BooleanOrBooleanExtended';
import {
	UnrealEngineString as UnrealEngineString_DataDiscovery,
} from './DataDiscovery/CustomTypes/UnrealEngineString';
import {
	TypedObjectString_basic,
} from './DataDiscovery/CustomTypes/TypedObjectString';
import {
	RefToConst,
} from './DataDiscovery/CustomTypes/RefToConst';
import {
	RefToTypedObjectStringBasic,
} from './DataDiscovery/CustomTypes/RefToTypedObjectString';
import {
	Literal,
} from './DataDiscovery/Literal';

type progress = {[p: string]: string[]};

type known_DocsDataItem = Exclude<unknown, DocsDataItem>;

export class DataDiscovery
	extends FilesGenerator
	implements GeneratesMarkdown
{
	private readonly docs_data_item_candidate:DocsDataItemGenerator;
	private readonly progress:progress = {};
	public readonly candidates:Promise<
		Generator<known_DocsDataItem, known_DocsDataItem>[]
	>;
	public readonly docs:DocsTsGenerator;
	public readonly literal:Literal;

	constructor(docs:DocsTsGenerator, literal?:Literal) {
		super();
		this.docs = docs;
		this.literal = literal || new Literal();
		this.docs_data_item_candidate = new DocsDataItemGenerator(
			this
		);
		this.candidates = Promise.all([
			new UnboundArray(this),
			new ObjectExtendsButHasNoAdditionalProperties(this),
			new NumberStrings(this),
			new BooleanOrBooleanExtended(this),
			new UnrealEngineString_DataDiscovery(this),
			new TypedObjectString_basic(this),
			RefToConst.from_definitions(this),
			RefToTypedObjectStringBasic.from_definitions(this),
		]);
	}

	async expecting() : Promise<progress>
	{
		const json = await this.docs.get();

		return Object.fromEntries(
			json.map(e => [e.NativeClass, e.Classes.map(e => e.ClassName)])
		);
	}

	async generate() {
		/*
		const schema = await this.docs.schema();
		 */

		return await Promise.all(
			(await this.docs.get()).map(async (e) => {
				const maybe = await this.docs_data_item_candidate.matches(e);

				if (!maybe) {
					throw new NoMatchError(e);
				}

				return await maybe.result();
			})
		);
	}

	async* generate_files() {
		for (const result of await this.generate()) {
			const NativeClass_raw =
				'NativeClass_raw' in result
					? result.NativeClass_raw
					: result.NativeClass;
			const Classes_type =
				'Classes_type' in result
					? result.Classes_type
					: undefined;

			this.progress[NativeClass_raw] = [];

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(NativeClass_raw).right
			);

			const file = `data/CoreUObject/${entry_class_name}.ts`;

			for (const item of result.Classes) {
				yield {
					file,
					node: create_const_statement(
						variable(
							adjust_class_name(item.ClassName),
							await this.literal.object_literal(item),
							Classes_type
						)
					),
				};

				this.progress[NativeClass_raw].push(item.ClassName);
			}

			const result_statement = create_const_statement(variable(
				adjust_class_name(entry_class_name),
				await this.literal.object_literal({
					NativeClass: result.NativeClass,
					Classes: result.Classes.map(
						e => new ExpressionResult(
							ts.factory.createIdentifier(
								adjust_class_name(e.ClassName)
							)
						)
					),
				}),
				type_reference_node(
					adjust_class_name(`${entry_class_name}__NativeClass`)
				),
			));

			yield {
				file,
				node: ts.factory.updateVariableStatement(
					result_statement,
					create_modifiers('export'),
					result_statement.declarationList
				),
			}
		}
	}

	async generate_markdown(): Promise<string> {
		let expected_count = 0;
		const grouped_progress = {
			members: [],
			subgroups: Object.entries(await this.expecting()).reduce(
				(was, is) => {
					const [NativeClass, Classes] = is;
					expected_count += 1 + Classes.length;

					was[NativeClass] = {members: Classes, subgroups: {}};

					return was;
				},
				{} as {[key: string]: progress_group}
			),
		};

		let actual_count = 0;

		for (const Classes of Object.values(this.progress)) {
			actual_count += 1 + Classes.length;
		}

		return remove_indentation(`
			# Data Progress

			${
				((actual_count / expected_count) * 100).toFixed(2)
			}% Complete (${actual_count} of ${expected_count})

			${reduce(grouped_progress).map((group) => {
				return remove_indentation(
					`${'#'.repeat(group.depth)} ${group.title}

					${
						group.members.map((key) => {
							const done = (
								group.title in this.progress
								&& this.progress[group.title].includes(key)
							);
							return `-   [${done ? 'x' : ' '}] ${key.replace(
								/__/g,
								'\\_\\_'
							)}`;
						}).join('\n')
					}`
				);
			}).join('\n\n')}
		`);
	}
}
