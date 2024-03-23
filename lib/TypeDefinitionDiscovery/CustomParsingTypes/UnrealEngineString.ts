import {
	Generator,
} from '../Generator';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type,
	UnrealEngineString_reference_type, UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';

export class UnrealEngineString extends Generator<
	UnrealEngineString_parent_type,
	TypeReferenceNode
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			definitions: UnrealEngineString_schema_definitions,
			...UnrealEngineString_parent_schema,
		});
	}

	generate() {
		return (raw_data: UnrealEngineString_parent_type) => {
			return UnrealEngineString_reference_type(
				raw_data.UnrealEngineString
			);
		};
	}
}
