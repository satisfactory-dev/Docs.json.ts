import {supported_$ref} from './SupportedRefObject';
import {typed_string_enum} from './TypedStringEnum';
import {typed_string_const} from './TypedStringConst';
import {SupportedSubSchemaType} from './CustomPairingTypes';
import {UnexpectedlyUnknownNoMatchError} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

const supported = [supported_$ref, typed_string_enum, typed_string_const];

function find(value: any): SupportedSubSchemaType<any, any> {
	const match = supported.find((e) => e.is_supported_schema(value));

	if (!match) {
		throw new UnexpectedlyUnknownNoMatchError(
			value,
			'Not a supported value!'
		);
	}

	return match;
}

class SupportedMeta extends SupportedSubSchemaType<any, any> {
	is_supported_schema(maybe: any): maybe is any {
		return -1 !== supported.findIndex((e) => e.is_supported_schema(maybe));
	}

	value_regex(value: any): string {
		return find(value).value_regex(value);
	}
	value_type(value: any) {
		return find(value).value_type(value);
	}
}

export const supported_meta = new SupportedMeta();
