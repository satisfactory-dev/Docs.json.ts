import Ajv from 'ajv/dist/2020';
import {
	create_UnrealEngineStringReference_reference_type,
	is_UnrealEngineStringReference_general_object,
	is_UnrealEngineStringReference_value,
	UnrealEngineStringReference,
	UnrealEngineStringReference_general_schema,
	UnrealEngineStringReference_general_type,
	UnrealEngineStringReference_schema,
} from './UnrealEngineStringReference';
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
import {
	adjust_class_name,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
} from '../TsFactoryWrapper';
import {
	TypesGeneration_concrete,
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import ts, {TupleTypeNode, TypeAliasDeclaration} from 'typescript';
import {object_has_property} from './CustomPairingTypes';

const already_configured = new WeakSet<Ajv>();

const typed_array_string_schema = {
	type: 'object',
	required: ['type', 'minItems', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		minItems: {type: 'number', minimum: 1},
		items: {
			oneOf: [
				typed_object_string_general_schema,
				UnrealEngineStringReference_general_schema,
			],
		},
	},
};

const typed_array_string_schema_without_recursive_reference = {
	type: 'object',
	required: ['type', 'minItems', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		minItems: {type: 'number', minimum: 1},
		items: {
			oneOf: [UnrealEngineStringReference_general_schema],
		},
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

export const typed_array_string_parent_schema_without_recursive_reference = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string:
			typed_array_string_schema_without_recursive_reference,
	},
};

declare type typed_array_string_supported_items =
	| UnrealEngineStringReference_general_type
	| typed_object_string_general_type;

declare type typed_array_string = {
	type: 'array';
	minItems: number;
	items: typed_array_string_supported_items;
};

declare type typed_array_string_without_recursive_reference = {
	type: 'array';
	minItems: number;
	items: Exclude<
		typed_array_string_supported_items,
		typed_object_string_general_type
	>;
};

declare type typed_array_string_parent = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string;
};

export type typed_array_string_parent_without_recursive_reference = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string_without_recursive_reference;
};

await writeFile(
	`typed-array-string.schema.json`,
	JSON.stringify(
		{
			definitions: UnrealEngineStringReference_schema.definitions,
			...typed_array_string_schema,
		},
		null,
		'\t'
	) + '\n'
);

await writeFile(
	`typed-array-string--parent.schema.json`,
	JSON.stringify(
		{
			definitions: UnrealEngineStringReference_schema.definitions,
			...typed_array_string_parent_schema,
		},
		null,
		'\t'
	) + '\n'
);

export class TypedArrayString {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'typed_array_string',
			type: 'string',
			metaSchema: {
				...{
					definitions:
						UnrealEngineStringReference_schema.definitions,
				},
				...typed_array_string_schema,
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

	private static item_to_regex(
		item: typed_array_string_supported_items
	): string {
		if (is_UnrealEngineStringReference_general_object(item)) {
			return UnrealEngineStringReference.ajv_macro_generator(true)(
				item.UnrealEngineStringReference
			).pattern;
		}
		if (
			!TypedObjectString.value_is_typed_object_string_general_type(item)
		) {
			throw new UnexpectedlyUnknownNoMatchError(
				item,
				'Currently unsupported in TypedArrayString.item_to_regex'
			);
		}

		return TypedObjectString.ajv_macro_generator(true)(
			item.typed_object_string
		).pattern;
	}

	private static typed_array_string_type_alias_generator(
		data: typed_array_string,
		reference_name: string
	): TypeAliasDeclaration {
		if (
			!is_UnrealEngineStringReference_general_object(data.items) &&
			!TypedObjectString.value_is_typed_object_string_general_type(
				data.items
			)
		) {
			throw new UnexpectedlyUnknownNoMatchError(
				data.items,
				'Currently unsupported in TypedArrayString.typed_array_string_type_alias_generator'
			);
		}

		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			this.typed_array(data)
		);
	}

	public static typed_array(
		data:
			| typed_array_string
			| typed_array_string_without_recursive_reference
	): TupleTypeNode {
		return create_minimum_size_typed_array_of_single_type(
			data.minItems,
			() => {
				if (
					is_UnrealEngineStringReference_general_object(data.items)
				) {
					return create_UnrealEngineStringReference_reference_type(
						data.items.UnrealEngineStringReference
					);
				}

				return TypedObjectString.general_type_to_object_type(
					data.items
				);
			}
		);
	}

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema.definitions,
					...typed_array_string_parent_schema,
				},
				(data, reference_name) => {
					return this.typed_array_string_type_alias_generator(
						data.typed_array_string,
						reference_name
					);
				}
			),
			new TypesGenerationFromSchema<typed_array_string>(
				{
					definitions:
						UnrealEngineStringReference_schema.definitions,
					...typed_array_string_schema,
				},
				this.typed_array_string_type_alias_generator
			),
		];
	}

	private static typed_array_string_node_generation_result(
		data: typed_array_string
	): TypeNodeGenerationResult {
		const {items} = data;

		if (
			!is_UnrealEngineStringReference_general_object(data.items) &&
			!TypedObjectString.value_is_typed_object_string_general_type(
				data.items
			)
		) {
			throw new UnexpectedlyUnknownNoMatchError(
				data.items,
				'Currently unsupported in TypedArrayString.typed_array_string_node_generation_result'
			);
		}

		return new TypeNodeGenerationResult(() => this.typed_array(data));
	}

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
			new TypeNodeGeneration<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema.definitions,
					...typed_array_string_parent_schema,
				},
				(data) => {
					return this.typed_array_string_node_generation_result(
						data.typed_array_string
					);
				}
			),
			new TypeNodeGeneration<typed_array_string>(
				{
					definitions:
						UnrealEngineStringReference_schema.definitions,
					...typed_array_string_schema,
				},
				(data) => {
					return this.typed_array_string_node_generation_result(
						data
					);
				}
			),
		];
	}
}
