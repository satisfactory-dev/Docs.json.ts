import {
	SchemaCompilingWithAutoDefinitions,
} from '../Generator';
import {
	UnrealEngineString,
	UnrealEngineString_left_right,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import Ajv from 'ajv/dist/2020';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type, UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	DataTransformer,
} from '../../DataTransformer';

export class UnrealEngineString_left_right_generator
	extends SchemaCompilingWithAutoDefinitions<
		UnrealEngineString_parent_type,
		string,
		UnrealEngineString_left_right
	> {
	generate() {
		return Promise.resolve((
			raw_data:string
		) => {
			return UnrealEngineString.fromString(raw_data);
		});
	}

	static async from_data_discovery(ajv: Ajv, discovery:DataTransformer)
	{
		return new this(
			ajv,
			await this.augment_schema(
				discovery,
				{
					definitions: UnrealEngineString_schema_definitions,
					...UnrealEngineString_parent_schema,
				},
			)
		);
	}
}
