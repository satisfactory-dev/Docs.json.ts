import Ajv from 'ajv/dist/2020';
import {
	is_UnrealEngineStringReference_value,
	UnrealEngineStringReference,
	UnrealEngineStringReference_inner_schema,
	UnrealEngineStringReference_schema,
} from './UnrealEngineStringReference';
import schema from '../../schema/update8.schema.json' assert {type: 'json'};
import {
	TypesGeneration_concrete,
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import {
	adjust_class_name,
	auto_constructor_property_types_from_generated_types,
	auto_constructor_property_types_from_generated_types_properties,
	create_modifier,
	create_object_type,
	createClass,
	createClass__members__with_auto_constructor,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import ts from 'typescript';

const already_configured = new WeakSet<Ajv>();

const typed_object_string_property_regex = '^[A-Za-z][A-Za-z3]*$';

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

type typed_object_string_general_type = {
	type: 'string';
	typed_object_string: typed_object_string_type;
} & ({minLength: 1} | {});

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
				{
					type: 'string',
					const: '#/definitions/quaternion--inner',
				},
				{
					type: 'string',
					const: '#/definitions/xyz--inner',
				},
			],
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
						[typed_object_string_property_regex]:
							typed_object_string_$ref_schema,
					},
				},
				UnrealEngineStringReference_inner_schema,
			],
		},
	},
};

export const typed_object_string_general_schema = {
	type: 'object',
	required: ['type', 'typed_object_string'],
	definitions: UnrealEngineStringReference_schema.definitions,
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_object_string: typed_object_string_schema,
	},
};

const supported_type_node_generations = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {type: 'string', enum: [
			'#/definitions/transformation',
		]},
	},
};

type supported_type_node_generations = {
	$ref:
		'#/definitions/transformation'
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
						UnrealEngineStringReference_schema.definitions,
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
		} else if (
			'#/definitions/quaternion--inner' === $ref ||
			'#/definitions/xyz--inner' === $ref
		) {
			const definition = schema.definitions[$ref.substring(14) as (
					keyof typeof schema.definitions & (
					| 'quaternion--inner'
					| 'xyz--inner'
				)
			)];

			if (!this.is_$ref_object_dictionary(definition.typed_object_string)) {
				throw new UnexpectedlyUnknownNoMatchError({definition}, 'typed_object_string property not usable!');
			}

			value_regex = this.property_to_regex(
				definition.typed_object_string
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

	private static is_$ref_object(
		maybe: any
	): maybe is type_object_string_$ref_choices {
		return (
			'object' === typeof maybe &&
			this.keys_are_$ref_only(Object.keys(maybe)) &&
			type_object_string_$ref_supported_array.includes(maybe.$ref)
		);
	}

	private static is_$ref_object_dictionary(maybe: {
		[key: string]: any;
	}): maybe is {[key: string]: type_object_string_$ref_choices} {
		for (const sub_object of Object.values(maybe)) {
			if (!this.is_$ref_object(sub_object)) {
				return false;
			}
		}

		return 0 !== Object.keys(maybe).length;
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

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<typed_object_string_general_type>(
				typed_object_string_general_schema,
				(data, reference_name) => {
					if (
						!this.is_$ref_object_dictionary(
							data.typed_object_string
						)
					) {
						console.log(data.typed_object_string);
						throw new UnexpectedlyUnknownNoMatchError(
							data.typed_object_string,
							'not yet supported'
						);
					} else if (
						!this.$ref_object_dictionary_is_auto_constructor_properties(
							data.typed_object_string
						)
					) {
						return ts.factory.createTypeAliasDeclaration(
							[create_modifier('export')],
							adjust_class_name(reference_name),
							undefined,
							create_object_type(
								Object.fromEntries(
									Object.entries(
										data.typed_object_string
									).map((entry) => {
										return [
											entry[0],
											ts.factory.createTypeReferenceNode(
												adjust_class_name(
													entry[1].$ref.substring(14)
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
									data.typed_object_string
								) as [string, ...string[]],
								properties: data.typed_object_string,
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

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
			new TypeNodeGeneration<typed_object_string_general_type>(
				typed_object_string_general_schema,
				(data) => {
					if (
						!this.is_$ref_object_dictionary(
							data.typed_object_string
						)
					) {
						console.log(data.typed_object_string);
						throw new UnexpectedlyUnknownNoMatchError(
							data.typed_object_string,
							'not yet supported'
						);
					}

					return new TypeNodeGenerationResult(() => {
						return create_object_type(
							Object.fromEntries(
								Object.entries(data.typed_object_string).map(
									(entry) => {
										const [property, value] = entry;

										if (!this.is_$ref_object(value)) {
											throw new UnexpectedlyUnknownNoMatchError(
												{[property]: value},
												'not yet supported'
											);
										}

										return [
											property,
											ts.factory.createTypeReferenceNode(
												adjust_class_name(
													value.$ref.substring(14)
												)
											),
										];
									}
								)
							)
						);
					});
				}
			),
			new TypeNodeGeneration<supported_type_node_generations>(
				supported_type_node_generations,
				(data) => {
					return new TypeNodeGenerationResult(() => ts.factory.createTypeReferenceNode(adjust_class_name(data.$ref.substring(14))));
				}
			),
		];
	}
}
