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
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import ts, {Node} from 'typescript';
import {
	array_is_non_empty,
	object_has_property,
	object_only_has_that_property,
	value_is_array,
} from './CustomPairingTypes';

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
	'#/definitions/color': true,
	'#/definitions/color-decimal': true,
	'#/definitions/mDockingRuleSet': true,
	'#/definitions/mLightControlData': true,
	'#/definitions/mDisableSnapOn': true,
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

type typed_object_string_array_type = [
	typed_object_string_general_type,
	...typed_object_string_general_type[],
];

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
				{
					type: 'string',
					const: '#/definitions/color',
				},
				{
					type: 'string',
					const: '#/definitions/color-decimal',
				},
				{
					type: 'string',
					const: '#/definitions/mDockingRuleSet',
				},
				{
					type: 'string',
					const: '#/definitions/mLightControlData',
				},
				{
					type: 'string',
					const: '#/definitions/mDisableSnapOn',
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

export const typed_object_oneOf_schema = {
	type: 'object',
	required: ['oneOf'],
	definitions: UnrealEngineStringReference_schema.definitions,
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
			],
		},
	},
};

type supported_type_node_generations = {
	$ref:
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
			supported_type_node_generations.properties.$ref.enum.includes($ref)
		) {
			const definition =
				schema.definitions[
					$ref.substring(14) as keyof typeof schema.definitions &
						(
							| 'quaternion--inner'
							| 'xyz--inner'
							| 'color'
							| 'color-decimal'
							| 'mDockingRuleSet'
							| 'mLightControlData'
							| 'mDisableSnapOn'
						)
				];

			const is_typed_object_array =
				this.object_is_typed_object_string_oneOf(definition);
			const object_has_typed_object_string =
				object_has_property(definition, 'typed_object_string') &&
				this.is_$ref_object_dictionary(definition.typed_object_string);

			if (!is_typed_object_array && !object_has_typed_object_string) {
				throw new UnexpectedlyUnknownNoMatchError(
					{definition},
					'typed_object_string property not usable!'
				);
			}

			if (is_typed_object_array) {
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
	}): maybe is typed_object_string_$ref_only {
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

	private static value_is_typed_object_string_general_type(
		maybe: any
	): maybe is typed_object_string_general_type {
		return (
			'object' === typeof maybe &&
			object_has_property(maybe, 'type') &&
			'string' === maybe.type &&
			object_has_property(maybe, 'typed_object_string') &&
			this.is_$ref_object_dictionary(maybe.typed_object_string) &&
			(2 === Object.keys(maybe).length ||
				(3 === Object.keys(maybe).length &&
					object_has_property(maybe, 'minLength') &&
					1 === maybe.minLength))
		);
	}

	private static array_is_typed_object_string_general_type_array(
		maybe: any[]
	): maybe is typed_object_string_general_type[] {
		return maybe.every(this.value_is_typed_object_string_general_type);
	}

	private static object_is_typed_object_string_oneOf(
		maybe: object
	): maybe is {
		oneOf: typed_object_string_array_type;
	} {
		return (
			!object_only_has_that_property(maybe, 'oneOf') ||
			!value_is_array(maybe.oneOf) ||
			!this.array_is_typed_object_string_general_type_array(
				maybe.oneOf
			) ||
			!array_is_non_empty(maybe.oneOf)
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
			new TypesGenerationFromSchema<{
				oneOf: typed_object_string_array_type;
			}>(typed_object_oneOf_schema, (data, reference_name) => {
				return ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					adjust_class_name(reference_name),
					undefined,
					ts.factory.createUnionTypeNode(
						data.oneOf.map((e, index) => {
							return create_object_type(
								Object.fromEntries(
									Object.entries(e.typed_object_string).map(
										(entry, index) => {
											if (
												!this.is_$ref_object(entry[1])
											) {
												const foo = entry[1];

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
										}
									)
								)
							);
						})
					)
				);
			}),
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
