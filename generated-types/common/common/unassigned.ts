import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
	integer_string__signed__type,
} from './scalar';

export type class__type = class__no_description__type & {
	mDescription: string;
};

export type class__no_description__type =
	class__no_description_or_display_name__type & {
		mDisplayName: string;
	};

export type class__no_description_or_display_name__type = {
	ClassName: Exclude<string, ''>;
};

export type color__type = {
	B: integer_string__type;
	G: integer_string__type;
	R: integer_string__type;
	A: integer_string__type;
};

export type color_decimal__type = {
	R: decimal_string__type;
	G: decimal_string__type;
	B: decimal_string__type;
	A: decimal_string__type;
};

export type faux_1__type = class__type & {
	faux:
		| UnrealEngineString__array__type
		| decimal_string__type
		| decimal_string__signed__type
		| integer_string__type
		| integer_string__signed__type
		| color__type
		| color_decimal__type;
};

export type NativeClass__type = {
	NativeClass: UnrealEngineString<
		'/Script/CoreUObject.Class',
		StringStartsWith<'/Script/FactoryGame.FG'>
	>;
};

export type UnrealEngineString__array__type = [
	UnrealEngineString,
	...UnrealEngineString[],
];
