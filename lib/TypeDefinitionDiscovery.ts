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
	is_string,
	object_has_non_empty_array_property,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';
import {
	common_ref,
	local_ref,
} from './StringStartsWith';
import ts, {
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
	NonEmptyString,
	NonEmptyStringWithExclusions,
	StringType,
} from './TypeDefinitionDiscovery/JsonSchema/String';
import {
	FilesGenerator,
	guess_filename,
} from './FilesGenerator';
import {
	adjust_class_name,
	create_modifiers,
} from './TsFactoryWrapper';
import {
	docs_versions,
	DocsTsGenerator,
} from './DocsTsGenerator';
import {
	GeneratesMarkdown,
	progress_group,
	reduce,
	remap,
	remove_indentation,
} from './MarkdownUtilities';
import {
	compile,
} from '@satisfactory-dev/ajv-utilities';
import {
	NoMatchError,
} from './Exceptions';

import common_schema from '../schema/common.schema.json' with {type: 'json'}

type SchemaObjectWithDefinitions<Definitions extends {[key: string]: true}> =
	& SchemaObject
	& {
	$defs: {
		[key in keyof Definitions]: {
			[key: string]: unknown,
		}
	}
}

function is_schema_with_$defs(
	schema:SchemaObject,
	discovered_types: {[key: string]: true},
): schema is SchemaObjectWithDefinitions<typeof discovered_types> {
	return (
		object_has_property(
			schema,
			'$defs',
			value_is_non_array_object,
		)
		&& Object.keys(schema.$defs).every(
			maybe => (
				maybe.startsWith('common.schema.json#/$defs/')
					? maybe
					: (
						maybe.startsWith('#/$defs/')
							? maybe
							: `#/$defs/${maybe}`
					)
			) in discovered_types,
		)
		&& Object.keys(discovered_types).every(maybe => {
			if (maybe.startsWith('common.schema.json#/$defs/')) {
				const ref = maybe.substring(26);
				const common_$defs = common_schema.$defs;

				return (
					object_has_property(
						common_$defs,
						ref,
						value_is_non_array_object,
					)
				);
			}

			const ref = (
				maybe.startsWith('#/$defs/')
					? maybe.substring(8)
					: maybe
			);

			return value_is_non_array_object(schema.$defs[ref]) || (
				ref in common_schema.$defs
			);
		})
	);
}

export type ref_discovery_type = {
	found_types: {[key: string]: (raw_data:unknown) => TypeNode},
	missing_types: string[],
	found_classes: {[key: string]: unknown}[],
	missing_classes: {[key: string]: unknown}[],
};

export class TypeDefinitionDiscovery
	extends FilesGenerator
	implements GeneratesMarkdown
{
	private $ref_discovery:
		| Promise<ref_discovery_type>
		| undefined;
	private readonly candidates: [
		AnyGenerator,
		...AnyGenerator[],
	];
	private readonly version: keyof docs_versions;
	public readonly docs:DocsTsGenerator;
	public readonly types_discovery:TypesDiscovery;

	constructor(
		types_discovery: [
			CandidatesDiscovery,
			...CandidatesDiscovery[],
		],
		type_definition_discover: [
			AnyGenerator,
			...AnyGenerator[],
		],
		docs:DocsTsGenerator,
		version: keyof docs_versions,
	) {
		super();
		this.types_discovery = new TypesDiscovery(
			types_discovery,
			docs,
			version,
		);
		this.candidates = type_definition_discover;
		this.docs = docs;
		this.version = version;
	}

	add_candidates(...candidates:AnyGenerator[])
	{
		this.candidates.push(...candidates);
	}

	async discover_type_$defs()
	{
		if (!this.$ref_discovery) {
			const discovered_types =
				await this.types_discovery.discover_types();

			if (discovered_types.missed_types.length > 0) {
				throw new NoMatchError(
					{
						missed_types: discovered_types.missed_types,
						schema_$defs: discovered_types.schema_$defs,
					},
					'Missing some type $defs',
				);
			} else if (
				!is_non_empty_array(
					discovered_types.discovered_types,
					is_string,
				)
			) {
				throw new Error('No types discovered!');
			}

			const discovered_types_as_object: {
				[key: local_ref<string>]: true,
			} = Object.fromEntries(
				discovered_types.discovered_types.map(
					e => [e, true],
				),
			);

			const schema = await this.schema_from_json(
				discovered_types_as_object,
			);

			this.$ref_discovery = Promise.resolve(
				this.discover_type_definitions_from<
					typeof discovered_types_as_object
				>(
					schema,
					discovered_types_as_object,
				),
			);
		}

		return this.$ref_discovery;
	}

	find(maybe:unknown): TypeNode {
		const type = this.search(maybe);

		if (!type) {
			throw new NoMatchError(maybe, 'Could not find a match!');
		}

		return type;
	}

	async* generate_files() {
		const types = await this.discover_type_$defs();

		for (const entry of Object.entries(types.found_types)) {
			const [definition, generator] = entry;

			const $ref = definition.startsWith('common.schema.json#/$defs/')
				? definition.substring(26)
				: definition.substring(8);
			const target_file = guess_filename($ref);

			yield {
				file: target_file,
				node: ts.factory.createTypeAliasDeclaration(
					create_modifiers('export'),
					adjust_class_name(`${$ref}__type`),
					undefined,
					generator(await this.docs.definition(
						this.version,
						$ref,
					)),
				),
			};
		}
	}

	async generate_markdown(): Promise<string>
	{
		const grouped_progress: progress_group = {
			members: [],
			subgroups: {},
		};

		const manual_groups = {
			class: '',
			'class--no-description': '',
			'class--no-description-or-display-name': '',
			'color-decimal--semi-native': 'color',
			'decimal-string': '',
			'decimal-string--signed': '',
			'integer-string': '',
			'integer-string--signed': '',
			'FGAmmoTypeInstantHit--base': 'FGAmmoType',
			'FGAmmoTypeInstantHit--chaos': 'FGAmmoType',
			'FGAmmoTypeInstantHit--standard': 'FGAmmoType',
			FGAmmoTypeProjectile: 'FGAmmoType',
			'FGAmmoTypeProjectile--base': 'FGAmmoType',
			xyz: 'vectors',
			'xyz--semi-native': 'vectors',
			xy: 'vectors',
			'xy--integer': 'vectors',
			'xy--semi-native': 'vectors',
			'xyz--integer': 'vectors',
			quaternion: 'vectors',
			'quaternion--semi-native': 'vectors',
			'pitch-yaw-roll': 'vectors',
			'FGEquipmentDescriptor--base': 'FGEquipment',
		};

		const discovered_types = await this.types_discovery.discover_types();

		const all_referenced_common_types = [
			...discovered_types.discovered_types,
			...discovered_types.missed_types,
		]
			.filter(e => e.startsWith('common.schema.json#/$defs/'))
			.map(e => e.substring(26));

		const all_referenced_types = [
			...discovered_types.discovered_types,
			...discovered_types.missed_types,
		].map(e => {
			if (e.startsWith('common.schema.json#/$defs/')) {
				return e.substring(26);
			}

			return e.substring(8);
		}).sort((a, b) => a.localeCompare(b));
		const supported_types = discovered_types.discovered_types.map((e) => {
			if (e.startsWith('common.schema.json#/$defs/')) {
				return e.substring(26);
			}

			return e.substring(8);
		});

		for (const item of all_referenced_types) {
			const parts = item.split('--');

			let checking = grouped_progress;

			if (item in manual_groups) {
				if ('' !== manual_groups[item as keyof typeof manual_groups]) {
					if (
						!(
							manual_groups[
								item as keyof typeof manual_groups
							] in checking.subgroups
						)
					) {
						checking.subgroups[
							manual_groups[item as keyof typeof manual_groups]
						] = {
							members: [],
							subgroups: {},
						};
					}

					checking = checking.subgroups[
						manual_groups[item as keyof typeof manual_groups]
					];
				}
			} else if (parts.length > 1) {
				for (
					let iteration = 1;
					iteration < Math.min(2, parts.length);
					++iteration
				) {
					if (!(parts[iteration - 1] in checking.subgroups)) {
						checking.subgroups[parts[iteration - 1]] = {
							members: [],
							subgroups: {},
						};
					}

					checking = checking.subgroups[parts[iteration - 1]];
				}
			}

			if (!checking.members.includes(item)) {
				checking.members.push(item);
			}
		}

		remap(grouped_progress);

		return remove_indentation(`
			# Types Progress

			${(
				(supported_types.length /
					all_referenced_types.length) *
				100
			).toFixed(2)}% Complete (${supported_types.length} of ${
				all_referenced_types.length
			})

			${reduce(grouped_progress).map((group) => {
				return remove_indentation(
					`
					${'#'.repeat(group.depth)} ${group.title}

					${group.members.map((key) => {
						return `-   [${supported_types.includes(key) ? 'x' : ' '}] ${key.replace(
							/__/g,
							'\\_\\_',
						)}${
							all_referenced_common_types.includes(key)
								? ' (common type)'
								: ''
						}`;
					}).join('\n')}`,
				);
			}).join('\n\n')}
		`);
	}

	private discover_type_definitions_from<
		Definitions extends {[key: string]: true}
	>(
		schema: SchemaObjectWithDefinitions<Definitions>,
		discovered_types: Definitions,
	) {
		const result: {
			found_types: {[key: string]: (raw_data:unknown) => TypeNode},
			missing_types: string[],
			common_types: string[],
			found_classes: {[key: string]: unknown}[],
			missing_classes: {[key: string]: unknown}[],
		} = {
			found_types: {},
			missing_types: [],
			common_types: [],
			found_classes: [],
			missing_classes: [],
		};

		const $defs = Object.keys(
			discovered_types,
		) as (local_ref<string>|common_ref<string>)[];

		for (const definition of $defs) {
			const $ref = (
				definition.startsWith('#/$defs/')
					? definition.substring(8) as (
						& string
						& keyof typeof schema.$defs
					)
					: definition.substring(26) as (
						& keyof typeof common_schema.$defs
					)
			);

			let use_definition:string = definition;

			if (
				'common' === this.version
				&& definition.startsWith('common.schema.json#/$defs/')
			) {
				use_definition = definition.substring(18);
			}

			const generator = this.candidates.find(
				e => e.check(schema.$defs[$ref]),
			);

			if (generator) {
				result.found_types[use_definition] = generator.generate();
			} else if (
				'common' !== this.version
				&& (
					(
						definition.startsWith('#/$defs/')
						&& definition.substring(8) in common_schema.$defs
					)
					|| (
						definition.startsWith('common.schema.json#/$defs/')
						&& definition.substring(26) in common_schema.$defs
					)
				)
			) {
				result.common_types.push(definition);
			} else {
				result.missing_types.push(definition);
			}
		}

		if (object_has_non_empty_array_property(
			schema,
			'prefixItems',
			value_is_non_array_object,
		)) {
			const native_class = compile<{
				type: 'object',
				$ref: '#/$defs/NativeClass',
				properties: {
					Classes: {[key: string]: unknown}[],
				},
			}>(this.docs.ajv, {
				type: 'object',
				required: ['$comment', 'type', '$ref', 'properties'],
				additionalProperties: false,
				$defs: {
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
								enum: $defs,
							},
							unevaluatedProperties: {
								type: 'boolean',
								const: false,
							},
						},
					},
					$ref: {
						type: 'object',
						$ref: '#/$defs/$ref_base',
						unevaluatedProperties: false,
					},
				},
				properties: {
					$comment: {
						type: 'string',
						// eslint-disable-next-line max-len
						pattern: '^\\/Script\\/CoreUObject\\.Class\'\\/Script\\/FactoryGame\\.',
					},
					type: {type: 'string', const: 'object'},
					$ref: {type: 'string', enum: [
						'#/$defs/NativeClass',
						'common.schema.json#/$defs/NativeClass',
					]},
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
									maxItems: {
										type: 'number',
										minimum: 1,
									},
									items: {
										$ref: '#/$defs/$ref',
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
												$ref: '#/$defs/$ref',
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
										$ref: '#/$defs/$ref_base',
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
							{
								type: 'object',
								required: [
									'type',
									'prefixItems',
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
										type: 'boolean',
										const: false,
									},
									prefixItems: {
										type: 'array',
										minItems: 1,
										items: {
											$ref: '#/$defs/$ref',
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
					if ('$comment' in item) {
						delete item.$comment;
					}
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
				},
			),
		);

		return result;
	}

	/**
	 * @todo move to DocsTsGenerator
	 */
	private async schema_from_json(
		discovered_types: {[key: string]: true},
	) : Promise<SchemaObjectWithDefinitions<typeof discovered_types>> {
		const schema = await this.docs.schema(this.version);

		if (!is_schema_with_$defs(schema, discovered_types)) {
			throw new Error('Schema $defs not as expected!');
		}

		return schema;
	}

	private search(maybe:unknown): TypeNode|undefined {
		performance.mark(`${this.constructor.name}.search() start`);

		const generator = this.candidates.find(
			e => e.check(maybe),
		);

		if (generator) {
			const result = generator.generate()(maybe);

			performance.measure(
				`${this.constructor.name}.search()`,
				`${this.constructor.name}.search() start`,
			);

			return result;
		}

		return undefined;
	}

	static custom_parsing_discovery(
		ajv:Ajv,
	) : [AnyGenerator, ...AnyGenerator[]] {
		return [
			new string_starts_with(ajv),
			new UnrealEngineString(ajv),
		];
	}

	static standard_jsonschema_discovery(
		ajv:Ajv,
	) : [AnyGenerator, ...AnyGenerator[]] {
		return [
			new Const(ajv),
			new Pattern(ajv),
			new BooleanEnum(ajv),
			new Enum(ajv),
			new StringType(ajv),
			new NonEmptyString(ajv),
			new NonEmptyStringWithExclusions(ajv),
		];
	}
}
