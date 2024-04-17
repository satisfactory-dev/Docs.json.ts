import {
	DocsDataItem,
	DocsTsGenerator,
} from './DocsTsGenerator';
import {
	GeneratesMarkdown,
	progress_group,
	reduce,
	remove_indentation,
} from './MarkdownUtilities';
import {
	Converter,
} from './DataDiscovery/Generator';
import {
	FilesGenerator,
} from './FilesGenerator';
import {
	adjust_unrealengine_value,
} from './CustomParsingTypes/UnrealEngineString';
import {
	adjust_class_name,
	create_const_statement,
	create_modifiers,
	type_reference_node,
	variable,
} from './TsFactoryWrapper';
import ts, {
	Expression,
} from 'typescript';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	ObjectConverter,
	PatternedObjectConverter,
} from './DataDiscovery/JsonSchema/Object';
import {
	ArrayConverter,
} from './DataDiscovery/JsonSchema/Array';
import {
	BooleanConverter,
} from './DataDiscovery/CustomTypes/BooleanOrBooleanExtended';
import {
	Literal,
} from './DataDiscovery/Literal';
import {
	TypedStringConverter,
} from './DataDiscovery/CustomTypes/TypedString';
import {
	BasicStringConverter,
	ConstStringConverter,
	EnumStringConverter,
	PatternConverter,
} from './DataDiscovery/JsonSchema/StringType';
import {
	OneOfConverter,
} from './DataDiscovery/JsonSchema/OneOf';
import {
	StringStartsWithConverter,
} from './DataDiscovery/CustomTypes/StringStartsWith';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	UnrealEngineStringConverter,
} from './DataDiscovery/CustomTypes/UnrealEngineString';
import {
	Ref,
} from './DataDiscovery/JsonSchema/Ref';

type progress = {[p: string]: string[]};

export class DataDiscovery
	extends FilesGenerator
	implements GeneratesMarkdown
{
	private readonly progress:progress = {};
	public readonly candidates:Promise<[
		Converter<SchemaObject>,
		...Converter<SchemaObject>[],
	]>;
	public readonly docs:DocsTsGenerator;
	public readonly literal:Literal;

	constructor(docs:DocsTsGenerator, literal?:Literal) {
		super();
		this.docs = docs;
		this.literal = literal || new Literal();
		this.candidates = docs.schema().then(({$defs}) => {
			return [
				new BooleanConverter(docs.ajv),
				new ArrayConverter(this),
				new BasicStringConverter(docs.ajv),
				new ConstStringConverter(docs.ajv),
				new EnumStringConverter(docs.ajv),
				new PatternConverter(docs.ajv),
				new StringStartsWithConverter(docs.ajv),
				new UnrealEngineStringConverter(),
				new ObjectConverter(this),
				new PatternedObjectConverter(this),
				new TypedStringConverter(this, $defs),
				new OneOfConverter(this),
				new Ref(this),
			];
		});
	}

	async expecting() : Promise<progress>
	{
		const json = await this.docs.get();

		return Object.fromEntries(
			json.map(e => [e.NativeClass, e.Classes.map(e => e.ClassName)])
		);
	}

	async generate() {
		const result:[Expression, DocsDataItem][] = [];

		const [
			schema,
			docs,
		] = await Promise.all([
			this.docs.schema(),
			this.docs.get(),
		]);

		let index = 0;
		for (const e of docs) {
			performance.mark(`${this.constructor.name}.generate() start`);
			const converter = await Converter.find_matching_schema(
				await this.candidates,
				schema.prefixItems[index]
			);

			const maybe_result = await this.literal.value_literal(
				await converter.convert(
					schema.prefixItems[index],
					e
				)
			);

			performance.measure(
				`${this.constructor.name}.generate() on item`,
				`${this.constructor.name}.generate() start`
			);

			result.push([maybe_result, e]);

			++index;
		}

		return result;
	}

	async* generate_files() {
		for (const result of await this.generate()) {
			const NativeClass_raw = result[1].NativeClass;

			this.progress[NativeClass_raw] = [];

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(NativeClass_raw).right
			);

			const file = `data/CoreUObject/${entry_class_name}.ts`;

			for (const item of result[1].Classes) {
				this.progress[NativeClass_raw].push(item.ClassName);
			}

			performance.mark(
				`${this.constructor.name}.generate_files() const generation start`
			);

			const result_statement = create_const_statement(variable(
				adjust_class_name(entry_class_name),
				result[0],
				type_reference_node(
					adjust_class_name(`${entry_class_name}__NativeClass`)
				),
			));

			performance.measure(
				`${this.constructor.name}.generate_files() const generation`,
				`${this.constructor.name}.generate_files() const generation start`
			);

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
