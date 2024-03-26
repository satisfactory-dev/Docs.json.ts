import {
	Generator,
} from '../Generator';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type,
	UnrealEngineString_reference_type,
	UnrealEngineString_regex,
	UnrealEngineString_schema_definitions,
	UnrealEngineString_type,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';

export type UnrealEngineString_left_right<
	left extends string = string,
	right extends string = string
> = (
	& Exclude<UnrealEngineString_type, true>
	& {left: left, right: right}
);

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

	static fromString<
		left extends string = string,
		right extends string = string
	>(value:string): UnrealEngineString_left_right<left, right> {
		const result = UnrealEngineString_regex.exec(value);

		if (!result) {
			throw new Error(`Not an UnrealEngineString (${value})`);
		}

		return {
			left: result[1] as left,
			right: (result[2] || result[3]) as right,
		};
	}
}
