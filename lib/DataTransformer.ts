import {
	DocsTsGenerator,
} from './DocsTsGenerator';
import ts, {
	CallExpression,
	ObjectLiteralExpression,
	PrimaryExpression, TypeNode,
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
	AnyGenerator, Generator,
} from './DataTransformer/Generator';
import {
	DataTransformerDiscovery,
} from './DataTransformerDiscovery';

export class DataTransformer
{
	private readonly discovery:TypeDefinitionDiscovery;
	private readonly ajv:Ajv;
	private readonly docs:DocsTsGenerator;
	private readonly data_discovery:DataTransformerDiscovery;
	private prepare_promise:undefined|Promise<{
		types: ref_discovery_type,
		schema: SchemaObject & {definitions: {[key: string]: unknown}},
		validations: ValidateFunction[],
	}> = undefined;

	constructor(
		ajv:Ajv,
		discovery:TypeDefinitionDiscovery,
		candidates:[AnyGenerator, ...AnyGenerator[]],
		docs:DocsTsGenerator
	) {
		configure_ajv(ajv);
		this.ajv = ajv;
		this.discovery = discovery;
		this.data_discovery = new DataTransformerDiscovery(
			ajv,
			discovery,
			candidates
		);
		this.docs = docs;
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

	async find_type(raw_data:unknown): Promise<TypeNode>
	{
		const check = await this.find_check(raw_data);

		return this.find_type_from_check(check);
	}

	async find_type_from_check(check:ValidateFunction): Promise<TypeNode>
	{
		const {
			types,
			validations,
		} = await this.prepare();

		const index = validations.indexOf(check);

		if (index < 0) {
			throw new Error('Could not find check in validations!');
		}

		return this.discovery.find(
			types.found_classes[index]
		);
	}

	async* generate()
	{
		const is_NativeClass = await TypesDiscovery.generate_is_NativeClass(
			this.ajv,
			this.discovery.types_discovery
		);

		for (const entry of await this.docs.get()) {
			if (!is_NativeClass(entry)) {
				console.error(entry);
				throw new Error('Entry not a general NativeClass!');
			}
			const entry_type = await this.find_type(entry);

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(entry.NativeClass).right
			);

			const transformer = this.data_discovery.find(entry);

			const literal = (transformer instanceof Generator)
				? transformer.generate(
					entry_type
				)(DataTransformer.object_literal(entry))
				: DataTransformer.object_literal(entry, transformer);

			/*
			const literal = DataTransformer.object_literal(entry, {
				NativeClass: (argument:PrimaryExpression) => {
					return ts.factory.createCallExpression(
						create_property_access(
							ts.factory.createIdentifier('UnrealEngineString'),
							'fromString'
						),
						[
							create_literal('/Script/CoreUObject.Class'),
							ts.factory.createTypeReferenceNode(
								'StringStartsWith',
								[
									create_literal('/Script/FactoryGame.FG'),
								]
							),
						],
						[
							argument,
						]
					);
				},
			});
			*/

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
		}
	}

	static object_literal(
		from:{[key: string]: unknown},
		pass_through:{
			[key: string]: (argument:PrimaryExpression) => CallExpression
		} = {}
	): ObjectLiteralExpression {
		return ts.factory.createObjectLiteralExpression(
			Object.entries(from).map((entry) => {
				const value = this.value_literal(entry[1]);

				return ts.factory.createPropertyAssignment(
					property_name_or_computed(entry[0]),
					entry[0] in pass_through
						? pass_through[entry[0]](value)
						: value
				);
			})
		);
	}

	private static value_literal(from:unknown): PrimaryExpression
	{
		if ('string' === typeof from) {
			return ts.factory.createStringLiteral(from);
		} else if (value_is_non_array_object(from)) {
			return this.object_literal(from);
		} else if (from instanceof Array) {
			return ts.factory.createArrayLiteralExpression(
				from.map(e => this.value_literal(e))
			);
		}

		console.error(from);

		throw new Error('unsupported!');
	}
}
