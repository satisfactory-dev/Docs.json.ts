import Ajv from 'ajv/dist/2020';
import {UnrealEngineStringReference_schema} from './UnrealEngineStringReference';
import {
	typed_object_string_general_schema,
	typed_object_string_general_type,
	TypedObjectString,
} from './TypedObjectString';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {writeFile} from 'node:fs/promises';
import {adjust_class_name, create_minimum_size_typed_array_of_single_type, create_modifier} from '../TsFactoryWrapper';
import {TypesGeneration_concrete, TypesGenerationFromSchema} from '../TypesGeneration';
import ts from 'typescript';

const already_configured = new WeakSet<Ajv>();

const typed_array_string_schema = {
	type: 'object',
	required: ['type', 'minItems', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		minItems: {type: 'number', minimum: 1},
		items: typed_object_string_general_schema,
	},
};

const typed_array_string_parent_schema = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string: typed_array_string_schema,
	},
};

declare type typed_array_string_supported_items =
	| typed_object_string_general_type;

declare type typed_array_string = {
	type: 'array',
	minItems: number,
	items: typed_array_string_supported_items,
};

declare type typed_array_string_parent = {
	type: 'string',
	minLength: 1,
	typed_array_string: typed_array_string,
};

await writeFile(`typed-array-string.schema.json`, JSON.stringify({
	definitions: UnrealEngineStringReference_schema.definitions,
	...typed_array_string_schema,
}, null, '\t') + '\n');

export class TypedArrayString
{
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'typed_array_string',
			type: 'string',
			metaSchema: {
				...typed_array_string_schema,
				...{
					definitions:
					UnrealEngineStringReference_schema.definitions,
				},
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	static ajv_macro_generator(inner: boolean) {
		return (schema: typed_array_string) => {
			const item_regex = `(?:${this.item_to_regex(schema.items)})`;

			const regex = `(?:\\(${item_regex}(?:,${item_regex})*\\))`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	private static item_to_regex(item:typed_array_string_supported_items) : string
	{
		if (!TypedObjectString.value_is_typed_object_string_general_type(item)) {
			throw new UnexpectedlyUnknownNoMatchError(
				item,
				'Currently unsupported in TypedArrayString.item_to_regex'
			);
		}

		return TypedObjectString.ajv_macro_generator(true)(item.typed_object_string).pattern;
	}

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<typed_array_string_parent>(
				{
					definitions: UnrealEngineStringReference_schema.definitions,
					...typed_array_string_parent_schema
				},
				(data, reference_name) => {
					if (!TypedObjectString.value_is_typed_object_string_general_type(data.typed_array_string.items)) {
						throw new UnexpectedlyUnknownNoMatchError(
							data.typed_array_string.items,
							'Currently unsupported in TypedArrayString.item_to_regex'
						);
					}

					return ts.factory.createTypeAliasDeclaration(
						[create_modifier('export')],
						adjust_class_name(reference_name),
						undefined,
						create_minimum_size_typed_array_of_single_type(
							data.typed_array_string.minItems,
							() => TypedObjectString.general_type_to_object_type(data.typed_array_string.items)
						)
					);
				}
			)
		]
	}

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
			new TypeNodeGeneration<typed_array_string_parent>(
				{
					definitions: UnrealEngineStringReference_schema.definitions,
					...typed_array_string_parent_schema
				},
				(data) => {
					if (!TypedObjectString.value_is_typed_object_string_general_type(data.typed_array_string.items)) {
						throw new UnexpectedlyUnknownNoMatchError(
							data.typed_array_string.items,
							'Currently unsupported in TypedArrayString.item_to_regex'
						);
					}

					return new TypeNodeGenerationResult(() => create_minimum_size_typed_array_of_single_type(
						data.typed_array_string.minItems,
						() => TypedObjectString.general_type_to_object_type(data.typed_array_string.items)
					));
				}
			),
		];
	}
}
