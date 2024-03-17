import Ajv from 'ajv/dist/2020';
import {
	is_UnrealEngineStringReference_value,
	UnrealEngineStringReference,
	UnrealEngineStringReference_inner_schema,
	UnrealEngineStringReference_schema,
} from './UnrealEngineStringReference';
import schema from '../../schema/update8.schema.json' assert {type: 'json'};

const already_configured = new WeakSet<Ajv>();

const typed_object_string_property_regex = '^[A-Za-z][A-Za-z]*$';

const type_object_string_$ref_supported = {
	'#/definitions/EditorCurveData--item': true,
	'#/definitions/InfinityExtrap': true,
	'#/definitions/empty-object': true,
	'#/definitions/decimal-string': true,
	'#/definitions/decimal-string--signed': true,
	'#/definitions/integer-string': true,
	'#/definitions/integer-string--signed': true,
	'#/definitions/boolean': true,
};
const type_object_string_$ref_supported_array = Object.keys(
	type_object_string_$ref_supported
) as (keyof typeof type_object_string_$ref_supported)[];

type type_object_string_$ref_choices = {
	$ref: keyof typeof type_object_string_$ref_supported;
};

type typed_object_string_$ref_only = {
	[key: string]: type_object_string_$ref_choices;
};

type typed_object_string_type = {
	[key: string]:
		| type_object_string_$ref_choices
		| typed_object_string_$ref_only;
};

const typed_object_string_$ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			oneOf: [
				{
					type: 'string',
					const: '#/definitions/EditorCurveData--item',
				},
				{
					type: 'string',
					const: '#/definitions/InfinityExtrap',
				},
				{
					type: 'string',
					const: '#/definitions/empty-object',
				},
				{
					type: 'string',
					const: '#/definitions/decimal-string',
				},
				{
					type: 'string',
					const: '#/definitions/decimal-string--signed',
				},
				{
					type: 'string',
					const: '#/definitions/integer-string',
				},
				{
					type: 'string',
					const: '#/definitions/integer-string--signed',
				},
				{
					type: 'string',
					const: '#/definitions/boolean',
				},
			],
		},
	},
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
				type: 'object',
				additionalProperties: false,
				definitions: UnrealEngineStringReference_schema.definitions,
				patternProperties: {
					[typed_object_string_property_regex]: {
						oneOf: [
							typed_object_string_$ref_schema,
							{
								type: 'object',
								additionalProperties: false,
								patternProperties: {
									[typed_object_string_property_regex]:
										typed_object_string_$ref_schema,
								},
							},
							UnrealEngineStringReference_inner_schema,
						],
					},
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
		} else if ('#/definitions/EditorCurveData--item' === $ref) {
			if (
				!this.is_$ref_object_dictionary(
					schema.definitions['EditorCurveData--item']
				)
			) {
				throw new Error(`${$ref} not supported!`);
			}

			value_regex = this.property_to_regex(
				schema.definitions['EditorCurveData--item']
			);
		} else if ('#/definitions/boolean' !== $ref) {
			if ($ref === undefined) {
				console.log(property, value);

				throw new Error('foo');
			}
			if ($ref.startsWith('#/definitions/decimal-string')) {
				value_regex = '\\d+\\.\\d+';
			} else {
				value_regex = '\\d+';
			}

			if ($ref.endsWith('--signed')) {
				value_regex = `-?${value_regex}`;
			}
		}

		return `${property}=${value_regex}`;
	}

	private static keys_are_$ref_only(keys: string[]): keys is ['$ref'] {
		return 1 === keys.length && keys.includes('$ref');
	}

	private static is_$ref_object(maybe: {
		[key: string]: any;
	}): maybe is type_object_string_$ref_choices {
		return (
			this.keys_are_$ref_only(Object.keys(maybe)) &&
			type_object_string_$ref_supported_array.includes(maybe.$ref)
		);
	}

	private static is_$ref_object_dictionary(maybe: {
		[key: string]: {[key: string]: string};
	}): maybe is {[key: string]: type_object_string_$ref_choices} {
		for (const sub_object of Object.values(maybe)) {
			if (!this.is_$ref_object(sub_object)) {
				return false;
			}
		}

		return 0 !== Object.keys(maybe).length;
	}

	private static property_to_regex(data: typed_object_string_type): string {
		return `\\(${Object.entries(data)
			.map((entry) => {
				if (this.is_$ref_object(entry[1])) {
					return this.typed_object_string_$ref_to_regex(
						entry[0],
						entry[1]
					);
				}

				if (
					'UnrealEngineStringReference--inner' in entry[1] &&
					is_UnrealEngineStringReference_value(
						entry[1]['UnrealEngineStringReference--inner']
					)
				) {
					return `${entry[0]}=${
						UnrealEngineStringReference.ajv_macro_generator(true)(
							entry[1]['UnrealEngineStringReference--inner']
						).pattern
					}`;
				} else if ('UnrealEngineStringReference--inner' in entry[1]) {
					console.error(entry[0], entry[1]);
					throw new Error(
						'Not a UnrealEngineStringReference--inner'
					);
				}

				return `${entry[0]}=\\(${Object.entries(entry[1])
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
			const regex = `^${this.property_to_regex(schema)}`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}
}
