import Ajv, {Schema, ValidateFunction} from 'ajv/dist/2020';
import ts, {preProcessFile} from "typescript";
import {import_these_somewhere_later} from "./TypesGeneration";

export class TypeNodeGenerationResult
{
	readonly type:() => ts.TypeNode;
	readonly import_these_somewhere_later:import_these_somewhere_later;
	constructor(
		type:() => ts.TypeNode,
		import_these_somewhere_later:import_these_somewhere_later = {}
	) {
		this.type = type;
		this.import_these_somewhere_later = import_these_somewhere_later;
	}
}

declare type TypeNodeGeneration_generator<T extends {[key: string]: any}> = (data:T) => TypeNodeGenerationResult;

export class TypeNodeGeneration<T extends { [key: string]: any }>
{
	readonly schema:Schema;
	private validate:WeakMap<Ajv, ValidateFunction<T>> = new WeakMap<Ajv, ValidateFunction<T>>();
	private generator:TypeNodeGeneration_generator<T>;
	constructor(schema:Schema, generator:TypeNodeGeneration_generator<T>) {
		this.schema = schema;
		this.generator = generator;
	}

	match(ajv: Ajv, property: object): TypeNodeGenerationResult | null {
		if (!this.validate.has(ajv)) {
			this.validate.set(ajv, ajv.compile<T>(this.schema));
		}
		const validate = this.validate.get(ajv) as ValidateFunction<T>;

		if (validate(property)) {
			return this.generator(property);
		}

		return null;
	}

	static matchers:TypeNodeGeneration<any>[] = [];
}

declare type oneOf_validator = ValidateFunction<{oneOf: object[]}>;

export class TypeNodeGenerationMatcher
{
	private matchers:TypeNodeGeneration<any>[];
	private oneOf_matcher:WeakMap<Ajv, ValidateFunction<{
		oneOf: object[],
	}>> = new WeakMap<Ajv, oneOf_validator>();

	constructor(matchers:TypeNodeGeneration<any>[]) {
		this.matchers = matchers;
	}
	find(
		ajv:Ajv,
		property:object,
	) : TypeNodeGenerationResult {
		for (const matcher of this.matchers) {
			const match = matcher.match(ajv, property);

			if (match) {
				return match;
			}
		}

		if (!this.oneOf_matcher.has(ajv)) {
			this.oneOf_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: ['oneOf'],
				additionalProperties: false,
				properties: {
					oneOf: {
						type: 'array',
						minItems: 1,
						items: {type: 'object'},
					},
				},
			}));
		}

		const oneOf_matcher = this.oneOf_matcher.get(ajv) as oneOf_validator;

		if (oneOf_matcher(property)) {
			const matches:TypeNodeGenerationResult[] = [];
			let has_all_matches = true;

			for (const sub_property of property.oneOf) {
				let found_match = false;
				for (const matcher of this.matchers) {
					const match = matcher.match(ajv, sub_property);

					if (match) {
						found_match = true;
						matches.push(match);
						break;
					}
				}

				if (!found_match) {
					has_all_matches = false;
					break;
				}
			}

			if (has_all_matches && matches.length) {
				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createUnionTypeNode(matches.map((result) => {
							return result.type();
						}));
					},
				);
			}

			for (const entry of property.oneOf) {
				console.error(entry);
			}

			console.error(matches);

			throw new Error('Could not match property.oneOf to type generation!');
		}

		console.error(property);

		throw new Error('Could not match property to type generation!');
	}
}
