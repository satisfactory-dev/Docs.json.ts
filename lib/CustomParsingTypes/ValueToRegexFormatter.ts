import {
	is_non_empty_array,
	is_string,
	object_has_non_empty_array_property,
	object_has_property,
	object_has_property_that_equals, object_only_has_that_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	annoyingly_have_to_escape_property,
} from './CustomPairingTypes';
import {
	local_ref,
} from '../StringStartsWith';
import {
	NoMatchError,
} from '../Exceptions';
import {
	is_UnrealEngineString_parent,
	UnrealEngineString,
} from './UnrealEngineString';
import {
	typed_string_const,
} from './TypedStringConst';
import {
	typed_string_enum,
} from './TypedStringEnum';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	typed_string_pattern_general,
	typed_string_pattern_is_supported_schema,
	typed_string_pattern_value_regex,
} from './TypedStringPattern';
import {
	typed_string_inner_array_prefixItems_type,
} from './TypedString';

type typed_string_object_inner = {
	required: [string, ...string[]],
	properties: {[key: string]: unknown}
};
type typed_string_object_pattern_inner = {
	minProperties: number,
	patternProperties: {[key: string]: unknown}
};
type typed_string_array_inner = {
	minItems?: number,
	items: unknown,
};

type typed_string_object_parent  = {
	type: 'string',
	minLength: 1,
	typed_string:
		| typed_string_object_inner
		| typed_string_array_inner
};

function is_number(maybe:unknown): maybe is number {
	return 'number' === typeof maybe;
}

export class ValueToRegexFormatter
{
	private typed_string_const;
	private typed_string_enum;
	private typed_string_pattern_general;
	private UnrealEngineString;
	private readonly $defs:{[key: string]: SchemaObject};
	private readonly supported_$ref_object:{[key: local_ref<string>]: string};

	constructor($defs:{[key: string]: SchemaObject}) {
		this.$defs = $defs;
		this.UnrealEngineString = UnrealEngineString.ajv_macro_generator(
			true,
		);
		this.typed_string_const = typed_string_const;
		this.typed_string_enum = typed_string_enum;
		this.typed_string_pattern_general = typed_string_pattern_general;
		this.supported_$ref_object = this.prepare_$ref_regex($defs);
	}

	pattern_from_value(value:unknown): {pattern: string} {
		return {
			pattern: `^${this.value_to_regex(value)}$`,
		};
	}

	private is_supported_$ref_object(
		maybe:unknown,
	): maybe is {$ref: local_ref<string>} {
		return (
			object_only_has_that_property(maybe, '$ref', is_string)
			&& object_has_property(
				this.supported_$ref_object,
				maybe.$ref,
			)
		);
	}

	private is_supported_definition(maybe:SchemaObject): boolean
	{
		return (
			this.typed_string_const.is_supported_schema(maybe)
			|| this.typed_string_enum.is_supported_schema(maybe)
			|| this.typed_string_pattern_general.is_supported_schema(maybe)
			|| typed_string_pattern_is_supported_schema(maybe)
			|| is_UnrealEngineString_parent(maybe)
			|| ValueToRegexFormatter.is_typed_string_object_parent(maybe)
			|| (
				object_only_has_that_property(
					maybe,
					'oneOf',
				)
				&& is_non_empty_array(
					maybe.oneOf,
					value_is_non_array_object,
				)
				&& maybe.oneOf.every(e => this.is_supported_definition(e))
			)
		);
	}

	private is_Texture2D_basic(
		maybe: unknown,
	) : maybe is {
		type: 'string',
		string_starts_with: 'Texture2D /Game/FactoryGame/',
	} {
		return (
			value_is_non_array_object(maybe)
			&& 2 === Object.keys(maybe).length
			&& object_has_property_that_equals(maybe, 'type', 'string')
			&& object_has_property_that_equals(
				maybe,
				'string_starts_with',
				'Texture2D /Game/FactoryGame/',
			)
		);
	}

	private prepare_$ref_regex(
		$defs:{[key: string]: SchemaObject},
	): {[key: local_ref<string>]: string} {
		return Object.fromEntries(Object.entries($defs)
			.filter(maybe => {
				return this.is_supported_definition(maybe[1])
			}).map(entry => {
				return [
					local_ref(entry[0]),
					this.value_to_regex(entry[1]),
				];
			}))
	}

	private Texture2D_basic_regex(): string
	{
		return `(?:Texture2D \\/Game\\/FactoryGame\\/(?:[A-Z][A-Za-z0-9_.]+/)*[A-Z][A-Za-z_.0-9-]+(?::[A-Z][A-Za-z0-9]+)?)`;
	}

	private typed_string_array_inner_to_regex(
		typed_string_array:typed_string_array_inner,
	): string {
		const regex = this.value_to_regex(typed_string_array.items);

		return `\\(${regex}${
			undefined === typed_string_array.minItems
				? ''
				: `(?:,${regex}){${typed_string_array.minItems - 1},}`
		}\\)`;
	}

	private typed_string_object_inner_to_regex(
		typed_string_object:typed_string_object_inner,
	): string {
		return `\\(${Object.entries(typed_string_object.properties).map(
			(entry, index) => {
				const [property, value] = entry;
				return `(?:${
					index > 0
						? ','
						: ''
				}${
					annoyingly_have_to_escape_property(property)
				}=(?:${
					this.value_to_regex(value)
				}))${
					typed_string_object.required.includes(property)
						? ''
						: '?'
				}`;
			},
		).join('')}\\)`;
	}

	private typed_string_object_pattern_inner_to_regex(
		typed_string_object:typed_string_object_pattern_inner,
	): string {
		const [property_regex, value] = Object.entries(
			typed_string_object.patternProperties,
		)[0];

		const regex = `(?:${
			annoyingly_have_to_escape_property(
				property_regex.substring(1, property_regex.length - 1),
			)
		})=(?:${
			this.value_to_regex(value)
		})`;

		return `\\(${regex}(,${regex}){${
			typed_string_object.minProperties - 1
		},}\\)`;
	}

	private value_to_regex(value:unknown): string
	{
		if (ValueToRegexFormatter.is_typed_string_object_inner(value)) {
			return this.typed_string_object_inner_to_regex(value);
		} else if (
			ValueToRegexFormatter.is_typed_string_object_pattern_inner(value)
		) {
			return this.typed_string_object_pattern_inner_to_regex(value);
		} else if (
			ValueToRegexFormatter.is_typed_string_object_parent(value)
		) {
			return this.value_to_regex(value.typed_string);
		} else if (
			ValueToRegexFormatter.is_typed_string_array_inner(value)
		) {
			return this.typed_string_array_inner_to_regex(value);
		} else if (this.is_supported_$ref_object(value)) {
			return this.supported_$ref_object[value.$ref];
		} else if(this.typed_string_const.is_supported_schema(value)) {
			return this.typed_string_const.value_regex(value);
		} else if(this.typed_string_enum.is_supported_schema(value)) {
			return this.typed_string_enum.value_regex(value);
		} else if (
			this.typed_string_pattern_general.is_supported_schema(value)
		) {
			return this.typed_string_pattern_general.value_regex(value);
		} else if (typed_string_pattern_is_supported_schema(value)) {
			return typed_string_pattern_value_regex(value);
		} else if (is_UnrealEngineString_parent(value)) {
			return this.UnrealEngineString(value.UnrealEngineString).pattern;
		} else if (object_has_non_empty_array_property(value, 'oneOf')) {
			return `(?:${value.oneOf.map(e => this.value_to_regex(e)).join('|')})`;
		} else if (
			object_only_has_that_property(value, '$ref', is_string)
			&& value.$ref.startsWith('#/$defs/')
			&& value.$ref.substring(8) in this.$defs
			&& object_only_has_that_property(
				this.$defs[value.$ref.substring(8)],
				'oneOf',
			)
			&& is_non_empty_array(
				this.$defs[value.$ref.substring(8)].oneOf,
				value_is_non_array_object,
			)
		) {
			const oneOf = this.$defs[
				value.$ref.substring(8)
			].oneOf as {[key: string]: unknown}[];

			return `(?:${
				oneOf
					.map((e:SchemaObject) => this.value_to_regex(e))
					.join('|')
			})`;
		} else if (
			undefined === this.supported_$ref_object
			&& object_only_has_that_property(value, '$ref', is_string)
			&& value.$ref.startsWith('#/$defs/')
			&& value.$ref.substring(8) in this.$defs
			&& this.is_supported_definition(
				this.$defs[value.$ref.substring(8)],
			)
		) {
			return this.value_to_regex(
				this.$defs[value.$ref.substring(8)],
			);
		} else if (
			this.is_Texture2D_basic(value)
		) {
			return this.Texture2D_basic_regex();
		} else if (
			ValueToRegexFormatter.is_typed_string_array_prefixItems(value)
		) {
			const item_regex = `\\(${
				value.prefixItems.map(e => this.value_to_regex(e)).join(', ')
			}\\)`;

			return `(?:\\(${item_regex}(?:,${item_regex}){${
				Math.max(0, value.minItems - 1)
			},${
				value.maxItems
					? Math.max(1, value.maxItems - 1)
					: ''
			}}\\))`;
		}

		throw new NoMatchError(value, `Unsupported value! ${JSON.stringify(value)}`);
	}

	private static is_typed_string_array_inner(
		maybe:unknown,
	): maybe is typed_string_array_inner {
		if (!value_is_non_array_object(maybe)) {
			return false;
		}

		const total_keys = Object.keys(maybe).length;
		let expected_keys = 3;

		if (!object_has_property(maybe, 'minItems')) {
			--expected_keys;
		} else if (!object_has_property(maybe, 'minItems', is_number)) {
			throw new NoMatchError(maybe, 'Unsupported minItems value!');
		}

		if (!object_has_property(maybe, 'maxItems')) {
			--expected_keys;
		} else if (!object_has_property(maybe, 'maxItems', is_number)) {
			throw new NoMatchError(maybe, 'Unsupported maxItems value!');
		}

		return (
			object_has_property(
				maybe,
				'items',
			)
			&& total_keys === expected_keys
		);
	}

	private static is_typed_string_array_prefixItems(
		maybe: unknown,
	): maybe is typed_string_inner_array_prefixItems_type {
		if (!value_is_non_array_object(maybe)) {
			return false;
		}

		const total_keys = Object.keys(maybe).length;
		let expected_keys = 4;

		if (!object_has_property(maybe, 'maxItems')) {
			--expected_keys;
		} else if (!object_has_property(maybe, 'maxItems', is_number)) {
			throw new NoMatchError(maybe, 'Unsupported maxItems value!');
		}

		return (
			object_has_property_that_equals(maybe, 'items', false)
			&& object_has_non_empty_array_property(
				maybe,
				'prefixItems',
				value_is_non_array_object,
			)
			&& total_keys === expected_keys
		)
	}

	private static is_typed_string_object_inner(
		maybe:unknown,
	): maybe is typed_string_object_inner {
		return (
			object_has_non_empty_array_property(
				maybe,
				'required',
				is_string,
			)
			&& object_has_property(
				maybe,
				'properties',
				value_is_non_array_object,
			)
			&& 2 === Object.keys(maybe).length
		);
	}

	private static is_typed_string_object_parent(
		maybe:unknown,
	): maybe is typed_string_object_parent  {
		return (
			object_has_property_that_equals(maybe, 'type', 'string')
			&& object_has_property_that_equals(maybe, 'minLength', 1)
			&& object_has_property(maybe, 'typed_string')
			&& 3 === Object.keys(maybe).length
			&& (
				this.is_typed_string_object_inner(maybe.typed_string)
				|| this.is_typed_string_array_inner(maybe.typed_string)
			)
		);
	}

	private static is_typed_string_object_pattern_inner(
		maybe:unknown,
	): maybe is typed_string_object_pattern_inner {
		return (
			object_has_property(
				maybe,
				'minProperties',
				is_number,
			)
			&& object_has_property(
				maybe,
				'patternProperties',
				value_is_non_array_object,
			)
			&& 2 === Object.keys(maybe).length
		);
	}
}
