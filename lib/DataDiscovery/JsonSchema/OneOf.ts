import {
	ConvertsUnknown,
	ExpressionResult, RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	RefToTypedString,
} from '../CustomTypes/RefToTypedString';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	compile,
} from '../../AjvUtilities';
import {
	require_non_empty_array,
} from '../../ArrayUtilities';
import {
	RefToConst,
} from '../CustomTypes/RefToConst';
import {
	UnrealEngineString,
} from '../CustomTypes/UnrealEngineString';
import {
	StringStartsWith,
} from '../CustomTypes/StringStartsWith';

type oneOf = {
	oneOf: [SchemaObject, ...SchemaObject[]],
};
type $ref = {
	$ref: local_ref<string>,
};

const schema = {
	type: 'object',
	required: ['oneOf'],
	additionalProperties: false,
	properties: {
		oneOf: {
			type: 'array',
			minItems: 1,
			items: {type: 'object', minProperties: 1},
		},
	},
};

export class OneOf extends ConvertsUnknown<unknown, ExpressionResult> {
	private readonly RefToConst:Promise<RefToConst>;
	private readonly RefToTypedString:Promise<RefToTypedString>;
	private readonly StringStartsWith:StringStartsWith;
	private readonly UnrealEngineString:UnrealEngineString;
	public readonly is_oneOf:ValidateFunction<oneOf>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.is_oneOf = compile<oneOf>(discovery.docs.ajv, schema);
		const promise = discovery.docs.schema().then(
			({definitions}) : [RefToConst, RefToTypedString] => {
				return [
					RefToConst.from_definitions(definitions, discovery),
					RefToTypedString.from_definitions(definitions, discovery),
				];
			}
		);

		this.RefToConst = promise.then(([RefToConst]) => {
			return RefToConst;
		});
		this.RefToTypedString = promise.then(([, RefToTypedString]) => {
			return RefToTypedString;
		});
		this.StringStartsWith = new StringStartsWith(discovery);
		this.UnrealEngineString = new UnrealEngineString(discovery);
	}

	async convert_unknown(
		schema: oneOf,
		raw_data: unknown
	) {
		const oneOf_matches:ConvertsUnknown<unknown, ExpressionResult>[] = [];

		for (const entry of schema.oneOf) {
			let match = false;
			for (const candidate of await this.discovery.candidates) {
				const maybe = await (
					await candidate.matches(entry)
				)?.result();

				if (maybe instanceof ConvertsUnknown) {
					oneOf_matches.push(
						maybe as ConvertsUnknown<unknown, ExpressionResult>
					);
					match = true;
					break;
				}
			}
			if (!match) {
				for (const alternate_candidate of [
					await this.RefToTypedString,
					await this.RefToConst,
					this.StringStartsWith,
					this.UnrealEngineString,
				]) {
					if (await alternate_candidate.matches(entry)) {
						oneOf_matches.push(alternate_candidate);
						match = true;
						break;
					}
				}
			}

			if (!match) {
				throw new NoMatchError(
					entry,
					'Unable to locate converter!'
				);
			}
		}

		const attempts:{[key: string]: boolean} = {};

		let index = 0;
		for (const match of oneOf_matches) {
			const maybe = await (await match.matches(raw_data))?.result();

			attempts[match.constructor.name] = maybe !== undefined;

			console.log(match.constructor.name, maybe);

			if (maybe instanceof ConvertsUnknown) {
				return maybe.convert_unknown(schema.oneOf[index], raw_data);
			}

			++index;
		}

		throw new NoMatchError(
			{
				schema,
				raw_data,
				oneOf_matches: oneOf_matches.map(e => e.constructor.name),
				attempts,
			},
			'Unable to convert oneOf!'
		);
	}

	async matches(raw_data: unknown)
	{
		if (this.is_oneOf(raw_data)) {
			let match = true;
			const oneOf_found = raw_data.oneOf.map(() => false);
			let index = 0;
			for (const entry of raw_data.oneOf) {
				let entry_match = false;
				for (const candidate of await this.discovery.candidates) {
					const maybe = await (
						await candidate.matches(entry)
					)?.result();
					if (maybe instanceof ConvertsUnknown) {
						entry_match = true;
						oneOf_found[index] = true;
						break;
					}
				}

				if (!entry_match) {
					if (
						!!(await (await this.RefToTypedString).matches(entry))
						|| !!(await (await this.RefToConst).matches(entry))
						|| !!(await this.StringStartsWith.matches(entry))
						|| !!(await this.UnrealEngineString.matches(entry))
					) {
						entry_match = true;
						oneOf_found[index] = true;
					}
				}

				if (!entry_match) {
					match = false
					break;
				}

				++index;
			}

			if (match) {
				return new RawGenerationResult(this);
			}

			throw new NoMatchError(
				{
					raw_data,
					oneOf_found,
					is_typed_string_ref: await Promise.all(raw_data.oneOf.map(
						async (entry) => {
							return !!(await (
								await this.RefToTypedString
							).matches(entry));
						}
					)),
					is_ref_to_const: await Promise.all(raw_data.oneOf.map(
						async (entry) => {
							return !!(await (
								await this.RefToConst
							).matches(entry));
						}
					)),
					is_string_starts_with: await Promise.all(
						raw_data.oneOf.map(
							async (entry) => {
								return !!(await this.StringStartsWith.matches(
									entry
								));
							}
						)
					),
					is_UnrealEngineString: await Promise.all(
						raw_data.oneOf.map(
							async (entry) => {
								return !!(
									await this.UnrealEngineString.matches(
										entry
									)
								);
							}
						)
					),
				},
				'oneOf identified but unable to resolve sub-match!',
			);
		}

		return undefined;
	}
}

export class RefToOneOf extends ConvertsUnknown<unknown, ExpressionResult> {
	private readonly check:ValidateFunction<$ref>;
	private readonly OneOf:OneOf;

	protected constructor(
		discovery:DataDiscovery,
		refs:[local_ref<string>, ...local_ref<string>[]]
	) {
		super(discovery);
		this.OneOf = new OneOf(discovery);
		this.check = compile(
			discovery.docs.ajv,
			{
				type: 'object',
				required: ['$ref'],
				additionalProperties: false,
				properties: {
					$ref: {
						type: 'string',
						enum: refs,
					},
				},
			},
		);
	}

	async convert_unknown(
		schema:$ref,
		raw_data:unknown
	) {
		const definition = await this.discovery.docs.definition(
			schema.$ref.substring(14)
		);

		if (!this.OneOf.is_oneOf(definition)) {
			throw new NoMatchError(
				{
					definition,
					errors: this.OneOf.is_oneOf.errors,
				},
				'Definition did not match oneOf!'
			);
		}

		return this.OneOf.convert_unknown(definition, raw_data)
	}

	async matches(raw_data:unknown)
	{
		if (this.check(raw_data)) {
			const definition = await this.discovery.docs.definition(
				raw_data.$ref.substring(14)
			);

			if (await this.OneOf.matches(definition)) {
				return new RawGenerationResult(this);
			}

			throw new NoMatchError(
				{
					raw_data,
				},
				'Matched as a $ref to oneOf but did not match against oneOf!'
			);
		}

		return undefined;
	}

	static from_definitions(
		definitions:{[key: string]: SchemaObject},
		discovery: DataDiscovery
	) {
		const check = compile<oneOf>(discovery.docs.ajv, schema);

		return new this(
			discovery,
			require_non_empty_array(Object.entries(definitions).filter(
				maybe => check(maybe[1])
			).map(e => e[0]).map(e => local_ref(e)))
		);
	}
}
