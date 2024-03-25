import Ajv from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from './TypeDefinitionDiscovery';
import {
	AnyGenerator,
} from './DataTransformer/Generator';
import {
	CallExpression,
	PrimaryExpression,
} from 'typescript';

export class DataTransformerDiscovery
{
	private readonly ajv:Ajv;
	public readonly discovery:TypeDefinitionDiscovery;
	private readonly candidates: [AnyGenerator, ...AnyGenerator[]];

	constructor(
		ajv: Ajv,
		discovery:TypeDefinitionDiscovery,
		candidates: [AnyGenerator, ...AnyGenerator[]],
	) {
		this.ajv = ajv;
		this.discovery = discovery;
		this.candidates = candidates;
	}

	find(from:{[key: string]: unknown}) {
		const maybe = this.candidates.find(
			e => e.check(from)
		);

		if (maybe) {
			return maybe;
		}

		const output:{
			[key: string]: (expression:PrimaryExpression) => CallExpression
		} = {};
		const found_something = false;
		/*
		let found_something = false;
		for (const entry of Object.entries(from)) {
			const [property, value] = entry;
			const maybe = this.candidates.find(
				e => e.check(value)
			);
			const type = this.discovery.find(value);

			if (maybe) {
				output[property] = maybe.generate(type);
				found_something = true;
			}
		}
		*/

		return found_something ? output : undefined;
	}
}
