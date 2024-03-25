import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	TypesDiscovery,
} from './TypesDiscovery';
import {
	CandidatesDiscovery,
} from './TypesDiscovery/CandidatesDiscovery';
import {
	is_non_empty_array,
	object_has_non_empty_array_property,
	object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from './StringStartsWith';
import {
	TypeNode,
} from 'typescript';
import {
	AnyGenerator,
} from './TypeDefinitionDiscovery/Generator';
import {
	Const,
} from './TypeDefinitionDiscovery/JsonSchema/String/Const';
import {
	Pattern,
} from './TypeDefinitionDiscovery/JsonSchema/String/Pattern';
import {
	Enum,
} from './TypeDefinitionDiscovery/JsonSchema/String/Enum';
import {
	BooleanEnum,
} from './TypeDefinitionDiscovery/JsonSchema/String/Enum/BooleanEnum';
import {
	string_starts_with,
} from './TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	StringType,
} from './TypeDefinitionDiscovery/JsonSchema/String';
import {NoMatchError} from './DataTransformerDiscovery/NoMatchError';

type SchemaObjectWithDefinitions<Definitions extends {[key: string]: true}> =
	& SchemaObject
	& {
	definitions: {
		[key in keyof Definitions]: {
			[key: string]: unknown,
		}
	}
}

function is_schema_with_definitions(
	schema:SchemaObject,
	discovered_types: {[key: string]: true}
): schema is SchemaObjectWithDefinitions<typeof discovered_types> {
	if (!object_has_property(
		schema,
		'definitions',
		value_is_non_array_object
	)) {
		throw new Error('foo');
	} else if (!Object.keys(schema.definitions).every(
		maybe => (
			maybe.startsWith('#/definitions/')
				? maybe
				: `#/definitions/${maybe}`
		) in discovered_types
	)) {
		throw new Error('bar');
	} else if (!Object.keys(discovered_types).every(maybe => {
		const ref = (
			maybe.startsWith('#/definitions/')
				? maybe.substring(14)
				: maybe
		);

		return value_is_non_array_object(schema.definitions[ref]);
	})) {
		throw new Error('baz');
	}

	return (
		object_has_property(
			schema,
			'definitions',
			value_is_non_array_object
		)
		&& Object.keys(schema.definitions).every(
			maybe => (
				maybe.startsWith('#/definitions/')
					? maybe
					: `#/definitions/${maybe}`
			) in discovered_types
		)
		&& Object.keys(discovered_types).every(maybe => {
			const ref = (
				maybe.startsWith('#/definitions/')
					? maybe.substring(14)
					: maybe
			);

			return value_is_non_array_object(schema.definitions[ref]);
		})
	);
}

export type ref_discovery_type = {
	found_types: {[key: string]: (raw_data:never) => TypeNode},
	missing_types: string[],
	found_classes: {[key: string]: unknown}[],
	missing_classes: {[key: string]: unknown}[],
};

export class TypeDefinitionDiscovery
{
	private readonly ajv:Ajv;
	public readonly types_discovery:TypesDiscovery;
	private readonly candidates: [
		AnyGenerator,
		...AnyGenerator[],
	];
	private $ref_discovery:
		| Promise<ref_discovery_type>
		| undefined;

	constructor(
		ajv:Ajv,
		json:{[key: string]: unknown},
		types_discovery: [
			CandidatesDiscovery,
			...CandidatesDiscovery[],
		],
		type_definition_discover: [
			AnyGenerator,
			...AnyGenerator[],
		],
	) {
		this.ajv = ajv;
		this.types_discovery = new TypesDiscovery(ajv, json, types_discovery);
		this.candidates = type_definition_discover;
	}

	private async schema_from_json(
		discovered_types: {[key: string]: true}
	) : Promise<SchemaObjectWithDefinitions<typeof discovered_types>> {
		const schema = await this.types_discovery.schema_from_json();

		if (!is_schema_with_definitions(schema, discovered_types)) {
			throw new Error('Schema definitions not as expected!');
		}

		return schema;
	}

	private discover_type_definitions_from<
		Definitions extends {[key: string]: true}
	>(
		schema: SchemaObjectWithDefinitions<Definitions>,
		discovered_types: Definitions,
	) {
		const result: {
			found_types: {[key: string]: (raw_data:never) => TypeNode},
			missing_types: string[],
			found_classes: {[key: string]: unknown}[],
			missing_classes: {[key: string]: unknown}[],
		} = {
			found_types: {},
			missing_types: [],
			found_classes: [],
			missing_classes: [],
		};

		const definitions = Object.keys(discovered_types);

		for (const definition of definitions) {
			const $ref = definition.substring(14);

			const generator = this.candidates.find(
				e => e.check(schema.definitions[$ref])
			);

			if (generator) {
				result.found_types[definition] = generator.generate();
			} else {
				result.missing_types.push(definition);
			}
		}

		if (object_has_non_empty_array_property(
			schema,
			'prefixItems',
			value_is_non_array_object,
		)) {
			const native_class = this.ajv.compile<{
				type: 'object',
				$ref: '#/definitions/NativeClass',
				properties: {
					Classes: {[key: string]: unknown}[],
				},
			}>({
				type: 'object',
				required: ['type', '$ref', 'properties'],
				additionalProperties: false,
				definitions: {
					$ref_base: {
						type: 'object',
						required: [
							'type',
							'$ref',
							'unevaluatedProperties',
						],
						properties: {
							type: {
								type: 'string',
								const: 'object',
							},
							$ref: {
								type: 'string',
								enum: definitions,
							},
							unevaluatedProperties: {
								type: 'boolean',
								const: false,
							},
						},
					},
					$ref: {
						type: 'object',
						$ref: '#/definitions/$ref_base',
						unevaluatedProperties: false,
					},
				},
				properties: {
					type: {type: 'string', const: 'object'},
					$ref: {type: 'string', const: '#/definitions/NativeClass'},
					unevaluatedProperties: {type: 'boolean', const: false},
					properties: {
						type: 'object',
						required: ['Classes'],
						additionalProperties: false,
						properties: {Classes: {oneOf: [
							{
								type: 'object',
								required: [
									'type',
									'minItems',
									'items',
								],
								additionalProperties: false,
								properties: {
									type: {
										type: 'string',
										const: 'array',
									},
									minItems: {
										type: 'number',
										minimum: 1,
									},
									items: {
										$ref: '#/definitions/$ref',
									},
								},
							},
							{
								type: 'object',
								required: [
									'type',
									'items',
									'minItems',
								],
								additionalProperties: false,
								properties: {
									type: {
										type: 'string',
										const: 'array',
									},
									minItems: {
										type: 'number',
										minimum: 1,
									},
									maxItems: {
										type: 'number',
										minimum: 1,
									},
									items: {
										type: 'object',
										required: ['oneOf'],
										additionalProperties: false,
										properties: {oneOf: {
											type: 'array',
											minItems: 1,
											items: {
												$ref: '#/definitions/$ref',
											},
										}},
									},
								},
							},
							{
								type: 'object',
								required: [
									'type',
									'items',
									'minItems',
								],
								additionalProperties: false,
								properties: {
									type: {
										type: 'string',
										const: 'array',
									},
									minItems: {
										type: 'number',
										minimum: 1,
									},
									items: {
										type: 'object',
										$ref: '#/definitions/$ref_base',
										required: [
											'type',
											'$ref',
											'unevaluatedProperties',
											'properties',
										],
										unevaluatedProperties: false,
										properties: {
											properties: {
												type: 'object',
											},
										},
									},
								},
							},
						]}},
					},
				},
			});

			for (const item of schema.prefixItems) {
				if (native_class(item)) {
					result.found_classes.push(item);
				} else {
					result.missing_classes.push(item);
				}
			}

			if (result.found_classes.length < 1) {
				throw new Error('No found classes!');
			}
		}

		result.found_types = Object.fromEntries(
			Object.entries(result.found_types).sort(
				(a, b) => {
					return a[0].localeCompare(b[0]);
				}
			)
		);

		return result;
	}

	private search(maybe:unknown): TypeNode|undefined {
		const generator = this.candidates.find(
			e => e.check(maybe)
		);

		if (generator) {
			return generator.generate()(maybe);
		}

		return undefined;
	}

	add_candidates(...candidates:AnyGenerator[])
	{
		this.candidates.push(...candidates);
	}

	async discover_type_definitions()
	{
		if (!this.$ref_discovery) {
			this.$ref_discovery = new Promise((yup, nope) => {
				this.types_discovery.discover_types().then(
					async (discovered_types) => {
						try {
							if (discovered_types.missed_types.length > 0) {
								nope(new Error(
									`Missing some type definitions:\n${
										discovered_types.missed_types.join(
											'\n'
										)
									}`
								));

								return;
							} else if (
								!is_non_empty_array(
									discovered_types.discovered_types,
									is_string
								)
							) {
								nope(new Error('No types discovered!'));

								return;
							}

							const discovered_types_as_object: {
								[key: string]: true,
							} = Object.fromEntries(
								discovered_types.discovered_types.map(
									e => [e, true]
								)
							);

							const schema = await this.schema_from_json(
								discovered_types_as_object
							);

							yup(this.discover_type_definitions_from<
								typeof discovered_types_as_object
							>(
								schema,
								discovered_types_as_object,
							));
						} catch (err) {
							nope(err);
						}
					}
				).catch(nope);
			});
		}

		return this.$ref_discovery;
	}

	find(maybe:unknown): TypeNode {
		const type = this.search(maybe);

		if (!type) {
			console.error(maybe);
			throw new Error('Could not find a match!');
		}

		return type;
	}

	static standard_jsonschema_discovery(
		ajv:Ajv
	) : [AnyGenerator, ...AnyGenerator[]] {
		return [
			new Const(ajv),
			new Pattern(ajv),
			new BooleanEnum(ajv),
			new Enum(ajv),
			new StringType(ajv),
		];
	}

	static custom_parsing_discovery(
		ajv:Ajv
	) : [AnyGenerator, ...AnyGenerator[]] {
		return [
			new string_starts_with(ajv),
			new UnrealEngineString(ajv),
		];
	}
}
