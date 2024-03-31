import {
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	is_string,
} from '../../StringStartsWith';
import {
	string_or_string_array_to_node,
	UnrealEngineString_parent_type,
	UnrealEngineString_regex,
} from '../../CustomParsingTypes/UnrealEngineString';
import ts, {
	TypeNode,
} from 'typescript';
import {
	create_property_access,
	create_type,
	type_reference_node,
} from '../../TsFactoryWrapper';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

export class UnrealEngineString extends ConvertsUnknown<
	string,
	ExpressionResult,
	UnrealEngineString_parent_type
> {
	convert_unknown(
		definition: UnrealEngineString_parent_type,
		raw_data: string
	): Promise<ExpressionResult<ts.Expression>> {
		const {UnrealEngineString} = definition;
		const type_args:[TypeNode, TypeNode] = [
			create_type('string'),
			create_type('string'),
		];

		if (true !== UnrealEngineString) {
			if (object_has_property(UnrealEngineString, 'left')) {
				type_args[0] = string_or_string_array_to_node(
					UnrealEngineString.left
				);
			}
			if (object_has_property(UnrealEngineString, 'right')) {
				if (value_is_non_array_object(UnrealEngineString.right)) {
					type_args[1] = type_reference_node(
						'StringStartsWith',
						string_or_string_array_to_node(
							UnrealEngineString.right.starts_with
						)
					);
				} else {
					type_args[1] = string_or_string_array_to_node(
						UnrealEngineString.right
					);
				}
			}
		}

		return Promise.resolve(new ExpressionResult(
			ts.factory.createCallExpression(
				create_property_access(
					ts.factory.createIdentifier('UnrealEngineString'),
					'fromString'
				),
				type_args,
				[ts.factory.createStringLiteral(raw_data)]
			)
		));
	}
	matches(
		raw_data: unknown
	): Promise<RawGenerationResult<this> | undefined> {
		if (is_string(raw_data) && UnrealEngineString_regex.test(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
