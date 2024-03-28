import {
	DocsDataItem,
	DocsTsGenerator,
} from './DocsTsGenerator';
import ts, {
	ArrayLiteralExpression,
	Expression,
	FalseLiteral,
	Identifier,
	ObjectLiteralExpression,
	StringLiteral,
	TrueLiteral,
} from 'typescript';
import {
	adjust_unrealengine_value,
} from './CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	ref_discovery_type,
	TypeDefinitionDiscovery,
} from './TypeDefinitionDiscovery';
import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	configure_ajv,
} from './DocsValidation';
import {
	object_has_non_empty_array_property,
	object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	TypesDiscovery,
} from './TypesDiscovery';
import {
	create_exported_const_statement,
	property_name_or_computed,
	variable,
} from './TsFactoryWrapper';
import {
	AnyGenerator, ExpressionResult,
} from './DataDiscovery/Generator';
import {
	DataTransformerDiscovery,
} from './DataTransformerDiscovery';
import {
	prefixItems,
} from './DataDiscovery/JsonSchema/Array/prefixItems';
import {
	items,
} from './DataDiscovery/JsonSchema/Array/items';
import {
	ObjectType,
} from './DataDiscovery/JsonSchema/ObjectType';
import {
	UnrealEngineString_left_right_generator,
} from './DataDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	NativeClass,
} from './DataDiscovery/Update8/NativeClass';
import {
	Pattern,
} from './DataDiscovery/JsonSchema/String/Pattern';
import {
	StringType,
} from './DataDiscovery/JsonSchema/String/StringType';
import {
	Enum,
} from './DataDiscovery/JsonSchema/String/Enum';
import {
	oneOf as String_oneOf,
} from './DataDiscovery/JsonSchema/String/oneOf';
import {
	oneOf,
} from './DataDiscovery/JsonSchema/oneOf';
import {
	typed_object_string,
} from './DataDiscovery/CustomParsingTypes/typed_object_string';
import {
	ConstType,
} from './DataDiscovery/JsonSchema/String/ConstType';
import {
	typed_array_string,
} from './DataDiscovery/CustomParsingTypes/typed_array_string';
import {
	typed_object_string_dictionary,
} from './DataDiscovery/CustomParsingTypes/typed_object_string_dictionary';
import {
	NoMatchError,
} from './DataTransformerDiscovery/NoMatchError';
import {
	is_string,
} from './StringStartsWith';
import {
	string_starts_with,
} from './DataDiscovery/CustomParsingTypes/string_starts_with';

export class DataTransformer
{
	public readonly discovery:TypeDefinitionDiscovery;
	private readonly ajv:Ajv;
	private readonly docs:DocsTsGenerator;
	private prepare_promise:undefined|Promise<{
		types: ref_discovery_type,
		schema: SchemaObject & {definitions: {[key: string]: unknown}},
		validations: ValidateFunction[],
	}> = undefined;
	public readonly data:DataTransformerDiscovery;

	constructor(
		ajv:Ajv,
		discovery:TypeDefinitionDiscovery,
		docs:DocsTsGenerator,
	) {
		configure_ajv(ajv);
		this.ajv = ajv;
		this.discovery = discovery;
		this.docs = docs;
		this.data = new DataTransformerDiscovery(ajv, this);
	}

	private async prepare()
	{
		if (!this.prepare_promise) {
			this.prepare_promise = new Promise((yup, nope) => {
				Promise.all([
					this.discovery.discover_type_definitions(),
					this.discovery.types_discovery.schema_from_json(),
				]).then((e) => {
					try {
						const [types, schema] = e;

						if (!object_has_property(
							schema,
							'definitions',
							value_is_non_array_object
						)) {
							nope(new Error(
								'Schema appears to have no definitions'
							));

							return;
						}

						if (!object_has_non_empty_array_property(
							schema,
							'prefixItems',
							value_is_non_array_object
						)) {
							nope(new Error(
								'Schema appears to have no prefixItems'
							));

							return;
						}

						const validations = types.found_classes.map(
							e => this.ajv.compile(
								{
									definitions: schema.definitions,
									...e,
								}
							)
						);

						yup({types, schema, validations});
					} catch (err) {
						nope(err);
					}
				}).catch(nope);
			});
		}

		return this.prepare_promise;
	}

	async type_checked_schema()
	{
		const {schema} = await this.prepare();

		if (!object_has_non_empty_array_property(
			schema,
			'prefixItems',
			value_is_non_array_object
		)) {
			throw new Error(
				'Schema appears to have no prefixItems'
			);
		}

		return schema;
	}

	async find_check(raw_data:unknown): Promise<ValidateFunction>
	{
		const {
			validations,
		} = await this.prepare();

		const check = validations.find(maybe => maybe(raw_data));

		if (!check) {
			console.error(raw_data);
			throw new Error('Could not find schema!');
		}

		return check;
	}

	async find_matching_schema(entry:DocsDataItem)
	{
		const {
			types,
			validations,
		} = await this.prepare();

		const check = await this.find_check(entry);
		const index = validations.indexOf(check);

		if (index < 0) {
			throw new Error('Could not find check in validations!');
		}

		return types.found_classes[index];
	}

	async* generate()
	{
		const is_NativeClass = await TypesDiscovery.generate_is_NativeClass(
			this.ajv,
			this.discovery.types_discovery
		);

		const entries = await this.docs.get();

		let progress = 0;

		process.stdout.write(`${progress} of ${entries.length}`);

		for (const entry of entries) {
			if (!is_NativeClass(entry)) {
				console.error(entry);
				throw new Error('Entry not a general NativeClass!');
			}

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(entry.NativeClass).right
			);

			const literal = DataTransformer.value_literal(
				await (await this.data.find(entry))(entry)
			);

			yield {
				file: `data/CoreUObject/${
					entry_class_name
				}.ts`,
				node: create_exported_const_statement(variable(
					entry_class_name,
					literal,
					ts.factory.createTypeReferenceNode(
						`${entry_class_name}__NativeClass`
					)
				)),
			};

			process.stdout.write(`\r${++progress} of ${entries.length}`);
		}
		process.stdout.write('\n');
	}

	static object_literal(
		from:{[key: string]: unknown},
	): ObjectLiteralExpression {
		return ts.factory.createObjectLiteralExpression(
			Object.entries(from).map((entry) => {
				const value = this.value_literal(entry[1]);

				return ts.factory.createPropertyAssignment(
					property_name_or_computed(entry[0]),
					value
				);
			})
		);
	}

	private static value_literal(from: unknown) : (
		| StringLiteral
		| TrueLiteral
		| FalseLiteral
		| Identifier
		| ArrayLiteralExpression
		| Expression
		| ObjectLiteralExpression
	) {
		if (is_string(from)) {
			return ts.factory.createStringLiteral(from);
		} else if (from instanceof ExpressionResult) {
			return (from as ExpressionResult).expression;
		} if (value_is_non_array_object(from)) {
			return this.object_literal(from);
		} else if ('boolean' === typeof from) {
			return from ? ts.factory.createTrue():ts.factory.createFalse();
		} else if (undefined === from) {
			return ts.factory.createIdentifier('undefined');
		} else if (!(from instanceof Array)) {
			throw new NoMatchError(from, 'not an array!');
		}
		return ts.factory.createArrayLiteralExpression(
			from.map(e => this.value_literal(e))
		);
	}

	static async with_default_candidates(
		ajv: Ajv,
		discovery: TypeDefinitionDiscovery,
		docs: DocsTsGenerator
	) {
		const transformer = new this(
			ajv,
			discovery,
			docs,
		);

		transformer.data.add_generators(
			new prefixItems(ajv, transformer),
			new items(ajv, transformer),
			new ObjectType(ajv) as AnyGenerator,
			await UnrealEngineString_left_right_generator.from_data_discovery(
				ajv,
				transformer
			) as AnyGenerator,
			await NativeClass.fromTypesDiscovery(
				ajv,
				transformer
			) as AnyGenerator,
			new StringType(ajv) as AnyGenerator,
			new Pattern(ajv) as AnyGenerator,
			new ConstType(ajv) as AnyGenerator,
			new Enum(ajv) as AnyGenerator,
			new String_oneOf(ajv),
			new oneOf(ajv, transformer) as AnyGenerator,
			new typed_object_string(ajv, transformer) as AnyGenerator,
			new typed_array_string(ajv, transformer) as AnyGenerator,
			new typed_object_string_dictionary(
				ajv,
				transformer
			) as AnyGenerator,
			new string_starts_with(ajv) as AnyGenerator,
		);

		return transformer;
	}
}
