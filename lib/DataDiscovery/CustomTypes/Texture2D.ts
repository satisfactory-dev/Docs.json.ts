import {
	ConvertsUnknown,
	ExpressionResult, RawGenerationResult,
} from '../Generator';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	is_UnrealEngineString_parent,
	UnrealEngineString_regex,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString as UnrealEngineString_type_definition,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';
import ts from 'typescript';
import {
	UnrealEngineString,
} from './UnrealEngineString';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	object_has_non_empty_array_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

type Texture2D_type = {
	oneOf: [
		{
			type: 'string',
			string_starts_with: 'Texture2D /Game/FactoryGame/',
		},
		{$ref: local_ref<'None'>},
		{
			type: 'string',
			minLength: 1,
			UnrealEngineString: {
				left: '/Script/Engine.Texture2D',
			},
		},
	],
};

export class Texture2D extends ConvertsUnknown<
	string,
	ExpressionResult,
	Texture2D_type
> {
	private readonly UnrealEngineString:UnrealEngineString;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.UnrealEngineString = new UnrealEngineString(discovery);
	}

	async convert_unknown(
		schema: Texture2D_type,
		raw_data: string
	): Promise<ExpressionResult> {
		if (raw_data === 'None') {
			return new ExpressionResult(
				ts.factory.createStringLiteral('None')
			);
		} else if (raw_data.startsWith('Texture2D /Game/FactoryGame/')) {
			return new ExpressionResult(
				ts.factory.createAsExpression(
					ts.factory.createStringLiteral(raw_data),
					type_reference_node(
						'StringStartsWith',
						create_literal('Texture2D /Game/FactoryGame/')
					)
				)
			);
		} else if (!await this.UnrealEngineString.matches(raw_data)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Not an UnrealEngineString!'
			);
		}

		const definition = await this.discovery.docs.definition(
			'Texture2D'
		);

		if (
			!object_has_non_empty_array_property(
				definition,
				'oneOf',
				value_is_non_array_object
			)
			|| definition.oneOf.length < 3
			|| !is_UnrealEngineString_parent(definition.oneOf[2])
		) {
			throw new NoMatchError(
				definition,
				'Definition not of expected shape!'
			);
		}

		return this.UnrealEngineString.convert_unknown(
			definition.oneOf[2],
			raw_data
		);
	}

	matches(raw_data: unknown): Promise<RawGenerationResult<this>|undefined> {
		if (
			is_string(raw_data)
			&& (
				raw_data === 'None'
				|| raw_data.startsWith('Texture2D /Game/FactoryGame/')
				|| (
					UnrealEngineString_regex.test(raw_data)
					&& UnrealEngineString_type_definition.fromString(
						raw_data
					).left === '/Script/Engine.Texture2D'
				)
			)
		) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
