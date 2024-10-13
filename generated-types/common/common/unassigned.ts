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

export type empty_object__type = '()';

export type faux_1__type = class__type & {
	faux:
		| UnrealEngineString__array__type
		| decimal_string__type
		| decimal_string__signed__type
		| integer_string__type
		| integer_string__signed__type
		| color__type
		| color_decimal__type
		| empty_object__type
		| None__type
		| xyz__type
		| xy__type
		| xy__integer__type
		| quaternion__type
		| pitch_yaw_roll__type
		| xyz__integer__type
		| xyz_array__type;
};

export type NativeClass__type = {
	NativeClass: UnrealEngineString<
		'/Script/CoreUObject.Class',
		StringStartsWith<'/Script/FactoryGame.FG'>
	>;
};

export type None__type = 'None';

export type pitch_yaw_roll__type = {
	Pitch: decimal_string__signed__type;
	Yaw: decimal_string__signed__type;
	Roll: decimal_string__signed__type;
};

export type quaternion__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
	W: decimal_string__type;
};

export type UnrealEngineString__array__type = [
	UnrealEngineString,
	...UnrealEngineString[],
];

export type xy__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
};

export type xy__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
};

export type xyz__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
};

export type xyz__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
	Z: integer_string__type;
};

export type xyz_array__type = [
	{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	},
	...{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	}[],
];
