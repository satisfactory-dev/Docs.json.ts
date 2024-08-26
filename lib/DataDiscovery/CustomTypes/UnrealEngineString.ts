import {
	is_string,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	Converter,
	ExpressionResult,
} from '../Generator';
import {
	is_UnrealEngineString_parent,
	string_or_string_array_to_node,
	UnrealEngineString_parent_type,
	UnrealEngineString_regex,
} from '../../CustomParsingTypes/UnrealEngineString';
import ts, {
	CallExpression,
	TypeNode,
} from 'typescript';
import {
	create_literal,
	create_property_access,
	create_type,
	type_reference_node,
} from '../../TsFactoryWrapper';
import {
	SchemaObject,
} from 'ajv';
import {
	NoMatchError,
} from '../../Exceptions';

export class UnrealEngineStringConverter extends Converter<
	UnrealEngineString_parent_type,
	string,
	CallExpression
> {
	can_convert_schema(
		schema: SchemaObject,
	): schema is UnrealEngineString_parent_type {
		return is_UnrealEngineString_parent(schema);
	}

	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown,
	): Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& is_string(raw_data)
			&& UnrealEngineString_regex.test(raw_data),
		);
	}

	async convert(
		schema: UnrealEngineString_parent_type,
		raw_data: string,
	): Promise<ExpressionResult<CallExpression>> {
		if (!await this.can_convert_schema_and_raw_data(schema, raw_data)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Not an UnrealEngineString!',
			);
		}
		const type_args:[TypeNode, TypeNode] = [
			create_literal('/Script/Engine.BlueprintGeneratedClass'),
			create_type('string'),
		];

		const {UnrealEngineString} = schema;

		if (true !== UnrealEngineString) {
			if (object_has_property(UnrealEngineString, 'left')) {
				type_args[0] = string_or_string_array_to_node(
					UnrealEngineString.left,
				);
			}
			if (object_has_property(UnrealEngineString, 'right')) {
				if (value_is_non_array_object(UnrealEngineString.right)) {
					type_args[1] = type_reference_node(
						'StringStartsWith',
						string_or_string_array_to_node(
							UnrealEngineString.right.starts_with,
						),
					);
				} else {
					type_args[1] = string_or_string_array_to_node(
						UnrealEngineString.right,
					);
				}
			}
		}

		return new ExpressionResult(
			ts.factory.createCallExpression(
				create_property_access(
					ts.factory.createIdentifier('UnrealEngineString'),
					'fromString',
				),
				type_args,
				[ts.factory.createStringLiteral(raw_data)],
			),
		);
	}
}
