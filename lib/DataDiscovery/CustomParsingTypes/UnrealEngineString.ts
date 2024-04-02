import {
	SecondaryCheckWithAutoDefinitions,
} from '../Generator';
import {
	UnrealEngineString,
	UnrealEngineString_left_right,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type,
	UnrealEngineString_regex,
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	is_string,
} from '../../StringStartsWith';
import {
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	NoMatchError,
} from '../../Exceptions';

/**
 * @todo get this to support spitting out TypeReferenceNode instances
 */
export class UnrealEngineString_left_right_generator
	extends SecondaryCheckWithAutoDefinitions<
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

	secondary_check(
		schema_data: UnrealEngineString_parent_type,
		raw_data: unknown
	): Promise<boolean> {
		this._secondary_errors = undefined;

		if (is_string(raw_data) && UnrealEngineString_regex.test(raw_data)) {
			return Promise.resolve(true);
		}

		const generator =
			value_is_non_array_object(raw_data)
				? this.discovery.data.find_generator(
					schema_data
				)
				: undefined;

		const result = (
			!!generator
			&& generator.check(schema_data)
		);

		if (!result && generator) {
			this._secondary_errors = generator.check.errors;
		} else if (!result) {
			this._secondary_errors = [new NoMatchError({
				schema_data,
				raw_data,
			})];
		}

		return Promise.resolve(result);
	}

	static async from_data_discovery(discovery:DataTransformer)
	{
		return new this(
			await this.augment_schema(
				discovery,
				{
					definitions: UnrealEngineString_schema_definitions,
					...UnrealEngineString_parent_schema,
				},
			),
			discovery
		);
	}
}
