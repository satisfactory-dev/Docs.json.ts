import {
	DocsDataItem,
	DocsTsGenerator,
} from './DocsTsGenerator';
import ts, {
	ObjectLiteralExpression,
	PrimaryExpression,
} from 'typescript';
import {
	adjust_unrealengine_value,
} from './CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	TypeDefinitionDiscovery,
} from './TypeDefinitionDiscovery';
import Ajv from 'ajv/dist/2020';
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
	create_const_statement,
	property_name_or_computed,
	variable,
} from './TsFactoryWrapper';

export class DataTransformer
{
	private readonly discovery:TypeDefinitionDiscovery;
	private readonly ajv:Ajv;
	private readonly docs:DocsTsGenerator;

	constructor(
		ajv:Ajv,
		discovery:TypeDefinitionDiscovery,
		docs:DocsTsGenerator
	) {
		configure_ajv(ajv);
		this.ajv = ajv;
		this.discovery = discovery;
		this.docs = docs;
	}

	async* generate()
	{
		const [
			types,
			schema,
		] = await Promise.all([
			this.discovery.discover_type_definitions(),
			this.discovery.types_discovery.schema_from_json(),
		]);

		if (!object_has_property(
			schema,
			'definitions',
			value_is_non_array_object
		)) {
			throw new Error('Schema appears to have no definitions');
		}

		const validations = types.found_classes.map(
			e => this.ajv.compile<DocsDataItem>(
				{
					definitions: schema.definitions,
					...e,
				}
			)
		);

		const is_NativeClass = await TypesDiscovery.generate_is_NativeClass(
			this.ajv,
			this.discovery.types_discovery
		);

		for (const entry of await this.docs.get()) {
			const check = validations.find(maybe => maybe(entry));

			if (!check) {
				console.error(entry);
				throw new Error('Could not find schema!');
			} else if (!is_NativeClass(entry)) {
				console.error(entry);
				throw new Error('Entry not a general NativeClass!');
			}

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(entry.NativeClass).right
			);

			yield {
				file: `data/CoreUObject/${
					entry_class_name
				}.ts`,
				node: create_const_statement(variable(
					entry_class_name,
					this.object_literal(entry),
					ts.factory.createTypeReferenceNode(
						`${entry_class_name}__NativeClass`
					)
				)),
			};
		}
	}

	private object_literal(
		from:{[key: string]: unknown}
	): ObjectLiteralExpression {
		return ts.factory.createObjectLiteralExpression(
			Object.entries(from).map((entry) => {
				return ts.factory.createPropertyAssignment(
					property_name_or_computed(entry[0]),
					this.value_literal(entry[1])
				);
			})
		);
	}

	private value_literal(from:unknown): PrimaryExpression
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
