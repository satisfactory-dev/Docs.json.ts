import Ajv from 'ajv/dist/2020';
import {
	create_UnrealEngineStringReference_reference_type,
	is_UnrealEngineStringReference_general_object,
	is_UnrealEngineStringReference_value,
	UnrealEngineStringReference,
	UnrealEngineStringReference_general_regex,
	UnrealEngineStringReference_general_schema,
	UnrealEngineStringReference_general_type,
	UnrealEngineStringReference_inner_schema,
	UnrealEngineStringReference_schema_definitions,
} from './UnrealEngineStringReference';
import schema from '../../schema/update8.schema.json' assert {type: 'json'};
import {TypesGenerationFromSchema} from '../TypesGeneration';
import {
	adjust_class_name,
	auto_constructor_property_types_from_generated_types,
	auto_constructor_property_types_from_generated_types_properties,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_object_type,
	create_object_type_from_entries,
	createClass,
	createClass__members__with_auto_constructor,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import ts, {Node, TypeLiteralNode, TypeReferenceNode} from 'typescript';
import {
	annoyingly_have_to_escape_property,
	is_non_empty_array,
	object_has_property,
	object_has_property_that_equals,
	object_only_has_that_property,
	value_is_non_array_object,
} from './CustomPairingTypes';
import {typed_array_string_parent_without_recursive_reference} from './TypedArrayString';
import {typed_string_const} from './TypedStringConst';
import {
	enum_schema_type,
	typed_string_enum,
	typed_string_enum_schema,
} from './TypedStringEnum';
import {supported_meta} from './SupportedMeta';
import {supported_$ref} from './SupportedRefObject';

const already_configured = new WeakSet<Ajv>();

const typed_object_string_property_regex = '^[A-Za-z][A-Za-z0-9_\\[\\]]*$';
const typed_object_string_const_value_regex = `^([A-Za-z][A-Za-z0-9_ ]*|${UnrealEngineStringReference_general_regex})$`;
const typed_object_string_const_value_regex__native = new RegExp(
	typed_object_string_const_value_regex
);

const type_object_string_$ref_supported = {
	'#/definitions/EditorCurveData--item': true,
	'#/definitions/InfinityExtrap': true,
	'#/definitions/empty-object': true,
	'#/definitions/decimal-string': true,
	'#/definitions/decimal-string--signed': true,
	'#/definitions/integer-string': true,
	'#/definitions/integer-string--signed': true,
	'#/definitions/boolean': true,
	'#/definitions/quaternion--inner': true,
	'#/definitions/xyz--inner': true,
	'#/definitions/xy': true,
	'#/definitions/color': true,
	'#/definitions/color-decimal': true,
	'#/definitions/mDockingRuleSet': true,
	'#/definitions/mLightControlData': true,
	'#/definitions/mDisableSnapOn': true,
	'#/definitions/SpecifiedColor--inner': true,
	'#/definitions/Texture2D': true,
	'#/definitions/Texture2D--basic': true,
	'#/definitions/None': true,
	'#/definitions/ItemClass--prop': true,
	'#/definitions/MaterialSlotName': true,
};
const type_object_string_$ref_supported_array = Object.keys(
	type_object_string_$ref_supported
) as (keyof typeof type_object_string_$ref_supported)[];

function value_is_in_type_object_string_$ref_supported_array(
	maybe: unknown
): maybe is keyof typeof type_object_string_$ref_supported {
	return (
		'string' === typeof maybe &&
		(type_object_string_$ref_supported_array as string[]).includes(maybe)
	);
}

type type_object_string_$ref_choices = {
	$ref: keyof typeof type_object_string_$ref_supported;
};

type typed_object_string_$ref_only = {
	[key: string]: type_object_string_$ref_choices;
};

export type typed_object_string_type = {
	[key: string]:
		| {
				type: 'string';
				const: string;
		}
		| {
				[key: string]: enum_schema_type;
		}
		| enum_schema_type
		| typed_array_string_parent_without_recursive_reference
		| type_object_string_$ref_choices
		| typed_object_string_$ref_only;
};

const empty_object = {};

export type typed_object_string_general_type = {
	type: 'string';
	typed_object_string: typed_object_string_type;
} & ({minLength: 1} | typeof empty_object);

type typed_object_string_nested_type = {
	type: 'string';
	typed_object_string: {[key: string]: typed_object_string_general_type};
} & ({minLength: 1} | typeof empty_object);

type typed_object_string_array_type = [
	typed_object_string_general_type,
	...typed_object_string_general_type[],
];

type typed_object_string_combination_dictionary = {
	[key: string]:
		| type_object_string_$ref_choices
		| {type: 'string'; const: string}
		| {type: 'string'; enum: [string, ...string[]]}
		| typed_object_string_$ref_only
		| typed_object_string_combination_dictionary;
};

const typed_object_string_$ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			type: 'string',
			enum: [
				'#/definitions/EditorCurveData--item',
				'#/definitions/InfinityExtrap',
				'#/definitions/empty-object',
				'#/definitions/decimal-string',
				'#/definitions/decimal-string--signed',
				'#/definitions/integer-string',
				'#/definitions/integer-string--signed',
				'#/definitions/boolean',
				'#/definitions/quaternion--inner',
				'#/definitions/xyz--inner',
				'#/definitions/xy',
				'#/definitions/color',
				'#/definitions/color-decimal',
				'#/definitions/mDockingRuleSet',
				'#/definitions/mLightControlData',
				'#/definitions/mDisableSnapOn',
				'#/definitions/SpecifiedColor--inner',
				'#/definitions/Texture2D',
				'#/definitions/Texture2D--basic',
				'#/definitions/None',
				'#/definitions/ItemClass--prop',
				'#/definitions/MaterialSlotName',
			],
		},
	},
};

export const typed_object_supported_const_string_schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {
			type: 'string',
			pattern: typed_object_string_const_value_regex,
		},
	},
};

export const typed_object_string_schema = {
	type: 'object',
	additionalProperties: false,
	patternProperties: {
		[typed_object_string_property_regex]: {
			oneOf: [
				typed_object_string_$ref_schema,
				{
					type: 'object',
					additionalProperties: false,
					patternProperties: {
						[typed_object_string_property_regex]: {
							oneOf: [
								typed_object_string_$ref_schema,
								typed_object_supported_const_string_schema,
								typed_string_enum_schema,
							],
						},
					},
				},
				UnrealEngineStringReference_inner_schema,
				UnrealEngineStringReference_general_schema,
				typed_object_supported_const_string_schema,
				typed_string_enum_schema,
				{
					type: 'object',
					required: ['type', 'minLength', 'typed_array_string'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'string'},
						minLength: {type: 'number', const: 1},
						typed_array_string: {
							type: 'object',
							required: ['type', 'minItems', 'items'],
							additionalProperties: false,
							properties: {
								type: {type: 'string', const: 'array'},
								minItems: {type: 'number', minimum: 1},
								items: {
									oneOf: [
										UnrealEngineStringReference_general_schema,
									],
								},
							},
						},
					},
				},
				{
					type: 'object',
					required: ['type', 'minLength', 'typed_object_string'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'string'},
						minLength: {type: 'number', const: 1},
						typed_object_string: {
							type: 'object',
							additionalProperties: false,
							patternProperties: {
								[typed_object_string_property_regex]: {
									oneOf: [typed_object_string_$ref_schema],
								},
							},
						},
					},
				},
				{
					type: 'object',
					required: ['oneOf'],
					additionalProperties: false,
					properties: {
						oneOf: {
							type: 'array',
							minItems: 1,
							items: {
								type: 'object',
								required: [
									'type',
									'minLength',
									'typed_object_string',
								],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'string'},
									minLength: {type: 'number', const: 1},
									typed_object_string: {
										type: 'object',
										additionalProperties: false,
										patternProperties: {
											[typed_object_string_property_regex]:
												{
													oneOf: [
														typed_object_string_$ref_schema,
													],
												},
										},
									},
								},
							},
						},
					},
				},
			],
		},
	},
};

export const typed_object_string_general_schema = {
	type: 'object',
	required: ['type', 'typed_object_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_object_string: typed_object_string_schema,
	},
};

export const typed_object_string_nested_schema = {
	type: 'object',
	required: ['type', 'typed_object_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_object_string: {
			type: 'object',
			patternProperties: {
				[typed_object_string_property_regex]: {
					type: 'object',
					additionalProperties: false,
					patternProperties: {
						[typed_object_string_property_regex]:
							typed_object_string_$ref_schema,
					},
				},
			},
		},
	},
};

export const typed_object_oneOf_schema = {
	type: 'object',
	required: ['oneOf'],
	additionalProperties: false,
	properties: {
		oneOf: {
			type: 'array',
			minItems: 1,
			items: typed_object_string_general_schema,
		},
	},
};

const supported_type_node_generations = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			type: 'string',
			enum: [
				'#/definitions/transformation',
				'#/definitions/color',
				'#/definitions/color-decimal',
				'#/definitions/mDockingRuleSet',
				'#/definitions/mLightControlData',
				'#/definitions/mDisableSnapOn',
				'#/definitions/SpecifiedColor--inner',
				'#/definitions/Texture2D',
				'#/definitions/Texture2D--basic',
				'#/definitions/None',
				'#/definitions/ItemClass--prop',
				'#/definitions/MaterialSlotName',
			],
		},
	},
};

type supported_type_node_generations = {
	$ref:
		| '#/definitions/SpecifiedColor--inner'
		| '#/definitions/Texture2D'
		| '#/definitions/Texture2D--basic'
		| '#/definitions/ItemClass--prop'
		| '#/definitions/MaterialSlotName'
		| '#/definitions/None'
		| '#/definitions/transformation'
		| '#/definitions/color'
		| '#/definitions/color-decimal'
		| '#/definitions/mDockingRuleSet'
		| '#/definitions/mLightControlData'
		| '#/definitions/mDisableSnapOn';
};

export class TypedObjectString {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'typed_object_string',
			type: 'string',
			metaSchema: {
				...typed_object_string_schema,
				...{
					definitions:
						UnrealEngineStringReference_schema_definitions,
				},
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	private static typed_object_string_$ref_to_regex(
		property: string,
		value: type_object_string_$ref_choices
	): string {
		const {$ref} = value;

		let value_regex = '(?:True|False)';

		if ('#/definitions/InfinityExtrap' === $ref) {
			value_regex = 'RCCE_Constant';
		} else if ('#/definitions/empty-object' === $ref) {
			value_regex = '\\(\\)';
		} else if (
			'#/definitions/EditorCurveData--item' === $ref ||
			'#/definitions/quaternion--inner' === $ref ||
			'#/definitions/xyz--inner' === $ref ||
			'#/definitions/xy' === $ref
		) {
			const maybe_definition_key = $ref.substring(14);

			if (!(maybe_definition_key in schema.definitions)) {
				throw new UnexpectedlyUnknownNoMatchError(
					{[property]: value},
					'$ref not found in schema!'
				);
			}

			let definition: unknown =
				schema.definitions[
					maybe_definition_key as keyof typeof schema.definitions
				];

			if (!value_is_non_array_object(definition)) {
				throw new UnexpectedlyUnknownNoMatchError(
					definition,
					'Array found in definitions!'
				);
			}

			if (
				!this.is_$ref_object_dictionary(definition) &&
				'typed_object_string' in definition
			) {
				definition = definition.typed_object_string;
			}

			if (!value_is_non_array_object(definition)) {
				throw new UnexpectedlyUnknownNoMatchError(
					definition,
					'Array found in definitions!'
				);
			}

			if (!this.is_$ref_object_dictionary(definition)) {
				throw new UnexpectedlyUnknownNoMatchError(
					definition,
					`${$ref} not supported!`
				);
			}

			value_regex = this.property_to_regex(definition);
		} else if (
			supported_type_node_generations.properties.$ref.enum.includes($ref)
		) {
			const definition =
				schema.definitions[
					$ref.substring(14) as keyof typeof schema.definitions &
						(
							| 'quaternion--inner'
							| 'xyz--inner'
							| 'xy'
							| 'color'
							| 'color-decimal'
							| 'mDockingRuleSet'
							| 'mLightControlData'
							| 'mDisableSnapOn'
							| 'SpecifiedColor--inner'
							| 'Texture2D'
							| 'Texture2D--basic'
							| 'None'
							| 'ItemClass--prop'
							| 'MaterialSlotName'
						)
				];

			const is_typed_object_array =
				this.object_is_typed_object_string_oneOf(definition);
			const is_generally_supported_oneOf_array =
				this.object_is_generally_supported_oneOf_array(
					definition,
					this.entry_is_supported_oneOf_item
				);
			const object_has_typed_object_string =
				object_has_property(definition, 'typed_object_string') &&
				this.is_$ref_object_dictionary(definition.typed_object_string);
			const object_is_UnrealEngineStringReference =
				is_UnrealEngineStringReference_general_object(definition);
			const is_enum = typed_string_enum.is_supported_schema(definition);

			if (
				!is_enum &&
				!object_is_UnrealEngineStringReference &&
				!is_typed_object_array &&
				!is_generally_supported_oneOf_array &&
				!object_has_typed_object_string
			) {
				throw new UnexpectedlyUnknownNoMatchError(
					{definition},
					'typed_object_string property not usable!'
				);
			}

			if (object_is_UnrealEngineStringReference) {
				value_regex = `(?:${
					UnrealEngineStringReference.ajv_macro_generator(true)(
						definition.UnrealEngineStringReference
					).pattern
				})`;
			} else if (is_enum) {
				value_regex = `(?:${typed_string_enum.value_regex(definition)})`;
			} else if (is_typed_object_array) {
				value_regex = `(?:${definition.oneOf
					.map((e) => e.typed_object_string)
					.map((e, index) => {
						if (!this.is_$ref_object_dictionary(e)) {
							throw new UnexpectedlyUnknownNoMatchError(
								e,
								`${property}.oneOf[${index}] not an object dictionary!`
							);
						}

						return this.property_to_regex(e);
					})
					.join('|')})`;
			} else if (is_generally_supported_oneOf_array) {
				value_regex = `(?:${definition.oneOf
					.map((e) => {
						if (is_UnrealEngineStringReference_general_object(e)) {
							return UnrealEngineStringReference.ajv_macro_generator(
								true
							)(e.UnrealEngineStringReference).pattern;
						} else if (!('$ref' in e)) {
							throw new UnexpectedlyUnknownNoMatchError(
								e,
								'missing $ref!'
							);
						} else if (
							e.$ref === '#/definitions/Texture2D--basic'
						) {
							return `(?:${schema.definitions['Texture2D--basic'].string_starts_with}(?:[A-Z][A-Za-z0-9_.]+/)*[A-Z][A-Za-z_.0-9-]+(?::[A-Z][A-Za-z0-9]+)?)`;
						} else if (e.$ref === '#/definitions/None') {
							return schema.definitions.None.const;
						}

						throw new UnexpectedlyUnknownNoMatchError(e);
					})
					.join('|')})`;
			} else if (
				!this.is_$ref_object_dictionary(definition.typed_object_string)
			) {
				throw new UnexpectedlyUnknownNoMatchError(
					{definition},
					'typed_object_string property not usable!'
				);
			} else {
				value_regex = this.property_to_regex(
					definition.typed_object_string
				);
			}
		} else if (typed_string_const.is_supported_schema(value)) {
			value_regex = typed_string_const.value_regex(value);
		} else if (undefined === $ref) {
			throw new UnexpectedlyUnknownNoMatchError(
				value,
				'type safety in here is a bit fragile, check earlier in the stack'
			);
		} else if (
			$ref.startsWith('#/definitions/integer-string') ||
			$ref.startsWith('#/definitions/decimal-string')
		) {
			if ($ref.startsWith('#/definitions/decimal-string')) {
				value_regex = '\\d+\\.\\d+';
			} else {
				value_regex = '\\d+';
			}

			if ($ref.endsWith('--signed')) {
				value_regex = `(?:-${value_regex}|${value_regex})`;
			}
		} else if ('#/definitions/boolean' !== $ref) {
			throw new UnexpectedlyUnknownNoMatchError(
				{property, value},
				'Unsupported $ref_to_regex call'
			);
		}

		return `(?:${annoyingly_have_to_escape_property(property)}=${value_regex})`;
	}

	private static is_$ref_object(
		maybe: unknown
	): maybe is type_object_string_$ref_choices {
		return (
			value_is_non_array_object(maybe) &&
			object_only_has_that_property(maybe, '$ref') &&
			value_is_in_type_object_string_$ref_supported_array(maybe.$ref)
		);
	}

	public static is_supported_enum_string_object(maybe: unknown): maybe is {
		[key: string]: enum_schema_type;
	} {
		return (
			value_is_non_array_object(maybe) &&
			Object.keys(maybe).every((e) =>
				typed_object_string_const_value_regex__native.test(e)
			) &&
			Object.values(maybe).every((e) =>
				typed_string_enum.is_supported_schema(e)
			)
		);
	}

	private static is_supported_typed_array_string(
		maybe: unknown
	): maybe is typed_array_string_parent_without_recursive_reference {
		return (
			value_is_non_array_object(maybe) &&
			3 === Object.keys(maybe).length &&
			object_has_property_that_equals(maybe, 'type', 'string') &&
			object_has_property_that_equals(maybe, 'minLength', 1) &&
			object_has_property(maybe, 'typed_array_string') &&
			value_is_non_array_object(maybe.typed_array_string) &&
			object_has_property_that_equals(
				maybe.typed_array_string,
				'type',
				'array'
			) &&
			'number' === typeof maybe.typed_array_string?.minItems &&
			value_is_non_array_object(maybe.typed_array_string?.items) &&
			object_has_property_that_equals(
				maybe.typed_array_string.items,
				'type',
				'string'
			) &&
			object_has_property_that_equals(
				maybe.typed_array_string.items,
				'minLength',
				1
			) &&
			is_UnrealEngineStringReference_value(
				maybe.typed_array_string.items?.UnrealEngineStringReference
			)
		);
	}

	public static is_$ref_object_dictionary(maybe: {
		[key: string]: unknown;
	}): maybe is typed_object_string_$ref_only {
		return (
			Object.values(maybe).every((e) => this.is_$ref_object(e)) &&
			0 !== Object.keys(maybe).length
		);
	}

	public static is_combination_dictionary(
		maybe: unknown,
		current_depth = 0
	): maybe is typed_object_string_combination_dictionary {
		if (!value_is_non_array_object(maybe)) {
			return false;
		}

		if (current_depth > 10) {
			throw new UnexpectedlyUnknownNoMatchError(
				maybe,
				'Cannot exceed 10 levels of recursion!'
			);
		}

		const failed = Object.values(maybe).filter(
			(e) =>
				!this.is_$ref_object(e) &&
				!(
					value_is_non_array_object(e) &&
					supported_meta.is_supported_schema(e)
				) &&
				!this.is_supported_enum_string_object(e) &&
				!this.is_supported_typed_array_string(e) &&
				!(
					value_is_non_array_object(e) &&
					this.is_$ref_object_dictionary(e)
				) &&
				!is_UnrealEngineStringReference_general_object(e) &&
				!this.value_is_typed_object_string_general_type(e) &&
				!TypedObjectString.object_is_typed_object_string_oneOf(
					maybe
				) &&
				!this.is_combination_dictionary(e, current_depth + 1)
		);

		return Object.keys(maybe).length >= 1 && failed.length === 0;
	}

	private static $ref_object_dictionary_is_auto_constructor_properties(maybe: {
		[key: string]: type_object_string_$ref_choices;
	}): maybe is typeof maybe &
		auto_constructor_property_types_from_generated_types_properties<
			Exclude<keyof typeof maybe, number>
		> {
		return (
			Object.keys(maybe).length >= 1 &&
			Object.values(maybe).every((value) => {
				return (
					value.$ref in
					auto_constructor_property_types_from_generated_types
				);
			})
		);
	}

	public static value_is_typed_object_string_general_type(
		maybe: unknown
	): maybe is typed_object_string_general_type {
		return (
			value_is_non_array_object(maybe) &&
			object_has_property(maybe, 'type') &&
			'string' === maybe.type &&
			object_has_property(maybe, 'typed_object_string') &&
			value_is_non_array_object(maybe.typed_object_string) &&
			(TypedObjectString.is_$ref_object_dictionary(
				maybe.typed_object_string
			) ||
				TypedObjectString.is_combination_dictionary(
					maybe.typed_object_string
				) ||
				supported_meta.is_supported_schema(
					maybe.typed_object_string
				) ||
				TypedObjectString.is_supported_enum_string_object(
					maybe.typed_object_string
				)) &&
			(2 === Object.keys(maybe).length ||
				(3 === Object.keys(maybe).length &&
					object_has_property(maybe, 'minLength') &&
					1 === maybe.minLength))
		);
	}

	private static array_is_typed_object_string_general_type_array(
		maybe: unknown[]
	): maybe is typed_object_string_general_type[] {
		return maybe.every((e) =>
			this.value_is_typed_object_string_general_type(e)
		);
	}

	public static object_is_typed_object_string_oneOf(
		maybe: object
	): maybe is {
		oneOf: typed_object_string_array_type;
	} {
		return (
			object_only_has_that_property(maybe, 'oneOf') &&
			is_non_empty_array(maybe.oneOf) &&
			this.array_is_typed_object_string_general_type_array(maybe.oneOf)
		);
	}

	private static object_is_generally_supported_oneOf_array<
		T extends
			| typed_object_string_general_type
			| type_object_string_$ref_choices
			| UnrealEngineStringReference_general_type =
			| typed_object_string_general_type
			| type_object_string_$ref_choices
			| UnrealEngineStringReference_general_type,
	>(
		maybe: object,
		predicate: (inner_maybe: unknown) => inner_maybe is T
	): maybe is {
		oneOf: [T, ...T[]];
	} {
		return (
			object_only_has_that_property(maybe, 'oneOf') &&
			is_non_empty_array(maybe.oneOf) &&
			maybe.oneOf.every((e) => predicate(e))
		);
	}

	private static entry_is_supported_oneOf_item(
		entry: unknown
	): entry is
		| typed_object_string_general_type
		| type_object_string_$ref_choices
		| UnrealEngineStringReference_general_type {
		return (
			TypedObjectString.value_is_typed_object_string_general_type(
				entry
			) ||
			TypedObjectString.is_$ref_object(entry) ||
			is_UnrealEngineStringReference_general_object(entry)
		);
	}

	private static property_to_regex(data: typed_object_string_type): string {
		return `\\(${Object.entries(data)
			.map((entry) => {
				if (this.is_$ref_object(entry[1])) {
					return this.typed_object_string_$ref_to_regex(
						entry[0],
						entry[1]
					);
				} else if (typed_string_const.is_supported_schema(entry[1])) {
					return typed_string_const.key_value_pair_regex(
						entry[0],
						entry[1]
					);
				} else if (this.is_supported_enum_string_object(entry[1])) {
					return `(?:${annoyingly_have_to_escape_property(entry[0])}=(?:${Object.entries(
						entry[1]
					).map((sub_entry) => {
						const [property, value] = sub_entry;

						return `(?:${annoyingly_have_to_escape_property(property)}=(?:${value.enum.join('|')}))`;
					})}))`;
				} else if (typed_string_enum.is_supported_schema(entry[1])) {
					return typed_string_enum.key_value_pair_regex(
						entry[0],
						entry[1]
					);
				} else if (supported_$ref.is_supported_schema(entry[1])) {
					return supported_$ref.key_value_pair_regex(
						entry[0],
						entry[1]
					);
				} else if (
					this.is_supported_typed_array_string(entry[1]) &&
					is_UnrealEngineStringReference_general_object(
						entry[1].typed_array_string.items
					)
				) {
					const unreal_engine_regex =
						UnrealEngineStringReference.ajv_macro_generator(true)(
							entry[1].typed_array_string.items
								?.UnrealEngineStringReference
						).pattern;

					return `(?:${annoyingly_have_to_escape_property(entry[0])}=\\(${unreal_engine_regex}(?:,${unreal_engine_regex})*\\))`;
				} else if (this.is_supported_typed_array_string(entry[1])) {
					const items = entry[1].typed_array_string.items;

					if (supported_meta.is_supported_schema(items)) {
						const value_regex = supported_meta.value_regex(items);

						return `(?:${annoyingly_have_to_escape_property(entry[0])}=\\(${value_regex}(?:,${value_regex})*\\))`;
					}

					throw new UnexpectedlyUnknownNoMatchError(
						items,
						'Unsupported!'
					);
				} else if (
					is_UnrealEngineStringReference_general_object(entry[1])
				) {
					return `(?:${annoyingly_have_to_escape_property(entry[0])}=${UnrealEngineStringReference.ajv_macro_generator(true)(entry[1].UnrealEngineStringReference).pattern})`;
				} else if (
					this.value_is_typed_object_string_general_type(entry[1])
				) {
					return `(?:${annoyingly_have_to_escape_property(entry[0])}=(?:${this.property_to_regex(entry[1].typed_object_string)}))`;
				} else if (
					this.object_is_generally_supported_oneOf_array<typed_object_string_general_type>(
						entry[1],
						this.value_is_typed_object_string_general_type
					)
				) {
					const items = entry[1].oneOf;

					if (
						!this.object_is_generally_supported_oneOf_array<typed_object_string_general_type>(
							entry[1],
							this.value_is_typed_object_string_general_type
						)
					) {
						throw new UnexpectedlyUnknownNoMatchError(
							entry[1],
							'Not quite supported here yet'
						);
					}

					return `(?:${annoyingly_have_to_escape_property(entry[0])}=(?:${items.map((e) => this.property_to_regex(e.typed_object_string)).join('|')}))`;
				}

				if (
					'UnrealEngineStringReference--inner' in entry[1] &&
					is_UnrealEngineStringReference_value(
						entry[1]['UnrealEngineStringReference--inner']
					)
				) {
					return `${annoyingly_have_to_escape_property(entry[0])}=${
						UnrealEngineStringReference.ajv_macro_generator(true)(
							entry[1]['UnrealEngineStringReference--inner']
						).pattern
					}`;
				} else if ('UnrealEngineStringReference--inner' in entry[1]) {
					throw new UnexpectedlyUnknownNoMatchError(
						entry,
						'Not a UnrealEngineStringReference--inner'
					);
				}

				return `${annoyingly_have_to_escape_property(entry[0])}=\\(${Object.entries(
					entry[1]
				)
					.map((sub_entry) => {
						const [sub_property, sub_value] = sub_entry;

						return this.typed_object_string_$ref_to_regex(
							sub_property,
							sub_value
						);
					})
					.join(',')}\\)`;
			})
			.join(',')}\\)`;
	}

	static ajv_macro_generator(inner: boolean) {
		return (schema: typed_object_string_type) => {
			const regex = `${this.property_to_regex(schema)}`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	static TypesGenerators() {
		return [
			new TypesGenerationFromSchema<typed_object_string_general_type>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_object_string_general_schema,
				},
				(data, reference_name) => {
					const {typed_object_string} = data;

					const is_$ref_object_dictionary =
						this.is_$ref_object_dictionary(typed_object_string);
					const is_combination_dictionary =
						this.is_combination_dictionary(typed_object_string);
					if (
						is_combination_dictionary &&
						!is_$ref_object_dictionary
					) {
						return ts.factory.createTypeAliasDeclaration(
							[create_modifier('export')],
							adjust_class_name(reference_name),
							undefined,
							this.combination_dictionary_type_to_object_type(
								typed_object_string
							)
						);
					} else if (is_$ref_object_dictionary) {
						if (
							!this.$ref_object_dictionary_is_auto_constructor_properties(
								typed_object_string
							)
						) {
							return ts.factory.createTypeAliasDeclaration(
								[create_modifier('export')],
								adjust_class_name(reference_name),
								undefined,
								create_object_type(
									Object.fromEntries(
										Object.entries(
											typed_object_string
										).map((entry) => {
											return [
												entry[0],
												ts.factory.createTypeReferenceNode(
													adjust_class_name(
														entry[1].$ref.substring(
															14
														)
													)
												),
											];
										})
									)
								)
							);
						}

						return createClass(
							adjust_class_name(reference_name),
							createClass__members__with_auto_constructor(
								{
									type: 'object',
									required: Object.keys(
										typed_object_string
									) as [string, ...string[]],
									properties: typed_object_string,
								},
								['public', 'readonly']
							),
							{
								modifiers: ['export'],
							}
						);
					}

					throw new UnexpectedlyUnknownNoMatchError(
						data,
						'not yet supported'
					);
				}
			),
			new TypesGenerationFromSchema<{
				oneOf: typed_object_string_array_type;
			}>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_object_oneOf_schema,
				},
				(data, reference_name) => {
					return ts.factory.createTypeAliasDeclaration(
						[create_modifier('export')],
						adjust_class_name(reference_name),
						undefined,
						ts.factory.createUnionTypeNode(
							data.oneOf.map((e, index) => {
								return create_object_type(
									Object.fromEntries(
										Object.entries(
											e.typed_object_string
										).map((entry) => {
											if (
												!this.is_$ref_object(entry[1])
											) {
												throw new UnexpectedlyUnknownNoMatchError(
													entry,
													`${reference_name}.oneOf[${index}][${entry[0]}] not supported!`
												);
											}

											return [
												entry[0],
												ts.factory.createTypeReferenceNode(
													adjust_class_name(
														entry[1].$ref.substring(
															14
														)
													)
												),
											];
										})
									)
								);
							})
						)
					);
				}
			),
			new TypesGenerationFromSchema<typed_object_string_nested_type>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_object_string_nested_schema,
				},
				(data, reference_name) => {
					return createClass(
						adjust_class_name(reference_name),
						createClass__members__with_auto_constructor(
							{
								type: 'object',
								required: Object.keys(
									data.typed_object_string
								) as [string, ...string[]],
								properties: Object.fromEntries(
									Object.entries(
										data.typed_object_string
									).map(
										(
											e
										): [
											string,
											auto_constructor_property_types_from_generated_types_properties,
										] => {
											const [property, value] = e;

											if (
												!this.is_$ref_object_dictionary(
													value
												) ||
												!this.$ref_object_dictionary_is_auto_constructor_properties(
													value
												)
											) {
												throw new UnexpectedlyUnknownNoMatchError(
													value,
													`${reference_name}[${property}] not supported!`
												);
											}

											return [property, value];
										}
									)
								),
							},
							['public', 'readonly']
						),
						{
							modifiers: ['export'],
						}
					);
				}
			),
		];
	}

	static CustomGenerators(): [
		{file: string; node: Node},
		...{file: string; node: Node}[],
	] {
		return [
			{
				file: 'classes/base.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('declare')],
					'EditorCurveData__item',
					undefined,
					ts.factory.createTypeReferenceNode('EditorCurveData')
				),
			},
		];
	}

	private static combination_dictionary_type_to_object_type(
		data: typed_object_string_combination_dictionary,
		depth = 0
	): TypeLiteralNode {
		return create_object_type(
			Object.fromEntries(
				Object.entries(data).map((entry) => {
					const [property, value] = entry;

					if (this.is_$ref_object(value)) {
						return this.$ref_choice_to_object_type_entry(
							property,
							value
						);
					} else if (this.is_supported_enum_string_object(value)) {
						return [
							property,
							create_object_type_from_entries(
								Object.entries(value).map((entry) => {
									const [property, value] = entry;

									return [
										property,
										possibly_create_lazy_union(value.enum),
									];
								})
							),
						];
					} else if (supported_meta.is_supported_schema(value)) {
						return supported_meta.key_value_pair_literal_type_entry(
							property,
							value
						);
					} else if (
						TypedObjectString.value_is_typed_object_string_general_type(
							value
						)
					) {
						return [
							property,
							this.general_type_to_object_type(value),
						];
					}

					return [
						property,
						this.combination_dictionary_type_to_object_type(
							value,
							depth + 1
						),
					];
				})
			)
		);
	}

	public static general_type_to_object_type(
		data: typed_object_string_general_type
	): TypeLiteralNode {
		return create_object_type(
			Object.fromEntries(
				Object.entries(data.typed_object_string).map((entry) => {
					const [property, value] = entry;

					if (typed_string_const.is_supported_schema(value)) {
						return typed_string_const.key_value_pair_literal_type_entry(
							property,
							value
						);
					} else if (this.is_supported_enum_string_object(value)) {
						return [
							property,
							create_object_type_from_entries(
								Object.entries(value).map((entry) => {
									const [property, value] = entry;

									return [
										property,
										possibly_create_lazy_union(value.enum),
									];
								})
							),
						];
					} else if (typed_string_enum.is_supported_schema(value)) {
						return typed_string_enum.key_value_pair_literal_type_entry(
							property,
							value
						);
					} else if (this.is_$ref_object_dictionary(value)) {
						return [
							property,
							create_object_type(
								Object.fromEntries(
									Object.entries(value).map(
										(inner_entry) => {
											return this.$ref_choice_to_object_type_entry(
												inner_entry[0],
												inner_entry[1]
											);
										}
									)
								)
							),
						];
					} else if (this.is_combination_dictionary(value)) {
						return [
							property,
							this.combination_dictionary_type_to_object_type(
								value
							),
						];
					} else if (this.is_supported_typed_array_string(value)) {
						return [
							property,
							create_minimum_size_typed_array_of_single_type(
								value.typed_array_string.minItems,
								() => {
									if (
										is_UnrealEngineStringReference_general_object(
											value.typed_array_string.items
										)
									) {
										return create_UnrealEngineStringReference_reference_type(
											value.typed_array_string.items
												.UnrealEngineStringReference
										);
									} else if (
										supported_meta.is_supported_schema(
											value.typed_array_string.items
										)
									) {
										return supported_meta.value_type(
											value.typed_array_string.items
										);
									}

									return TypedObjectString.general_type_to_object_type(
										value.typed_array_string.items
									);
								},
								'maxItems' in value.typed_array_string
									? value.typed_array_string.maxItems
									: undefined
							),
						];
					} else if (
						is_UnrealEngineStringReference_general_object(value)
					) {
						return [
							property,
							create_UnrealEngineStringReference_reference_type(
								value.UnrealEngineStringReference
							),
						];
					} else if (!this.is_$ref_object(value)) {
						throw new UnexpectedlyUnknownNoMatchError(
							{[property]: value},
							'not yet supported in general type to object type'
						);
					}

					return this.$ref_choice_to_object_type_entry(
						property,
						value
					);
				})
			)
		);
	}

	private static $ref_choice_to_object_type_entry<T extends string = string>(
		property: T,
		value: type_object_string_$ref_choices
	): [T, TypeReferenceNode] {
		const reference_name = value.$ref.substring(14);

		return [
			property,
			ts.factory.createTypeReferenceNode(
				adjust_class_name(
					`${reference_name}${
						reference_name.startsWith('integer-string') ||
						reference_name.startsWith('decimal-string')
							? '__type'
							: ''
					}`
				)
			),
		];
	}

	static TypeNodeGeneration() {
		return [
			new TypeNodeGeneration<typed_object_string_nested_type>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_object_string_nested_schema,
				},
				(data) => {
					return new TypeNodeGenerationResult(() => {
						return create_object_type(
							Object.fromEntries(
								Object.entries(data.typed_object_string).map(
									(e) => {
										if (
											!this.is_$ref_object_dictionary(
												e[1]
											)
										) {
											throw new UnexpectedlyUnknownNoMatchError(
												e[1],
												`${e[0]} not a supported type!`
											);
										}

										return [
											e[0],
											this.general_type_to_object_type({
												type: 'string',
												typed_object_string: e[1],
											}),
										];
									}
								)
							)
						);
					});
				}
			),
			new TypeNodeGeneration<typed_object_string_general_type>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_object_string_general_schema,
				},
				(data) => {
					const is_$ref_object_dictionary =
						this.is_$ref_object_dictionary(
							data.typed_object_string
						);
					const is_combination_dictionary =
						this.is_combination_dictionary(
							data.typed_object_string
						);

					if (
						!is_$ref_object_dictionary &&
						!is_combination_dictionary
					) {
						throw new UnexpectedlyUnknownNoMatchError(
							data.typed_object_string,
							'not yet supported in type node generation'
						);
					}

					return new TypeNodeGenerationResult(() =>
						this.general_type_to_object_type(data)
					);
				}
			),
			new TypeNodeGeneration<supported_type_node_generations>(
				supported_type_node_generations,
				(data) => {
					return new TypeNodeGenerationResult(() =>
						ts.factory.createTypeReferenceNode(
							adjust_class_name(data.$ref.substring(14))
						)
					);
				}
			),
		];
	}
}
