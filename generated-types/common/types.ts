/* eslint-disable @stylistic/max-len */

import type {
	StringPassesRegex,
} from '@signpostmarv/json-schema-typescript-codegen';

type bool_string = 'False' | 'True';

type decimal_string = StringPassesRegex<'^\\d+\\.\\d{6}$'>;

type decimal_string_signed = StringPassesRegex<'^-?\\d+\\.\\d{6}$'>;

type empty_object = '()';

type integer_string = StringPassesRegex<'^\\d+$'>;

type integer_string_signed = StringPassesRegex<'^-?\\d+$'>;

type BGRA = {
	B: integer_string,
	G: integer_string,
	R: integer_string,
	A: integer_string,
};

type PitchYawRoll_decimal_string_signed = {
	Pitch: decimal_string_signed,
	Yaw: decimal_string_signed,
	Roll: decimal_string_signed,
};

type RGBA = {
	R: decimal_string,
	G: decimal_string,
	B: decimal_string,
	A: decimal_string,
};

type XY_decimal_string = {
	X: decimal_string_signed,
	Y: decimal_string_signed,
};

type XYZ_decimal_string = {
	X: decimal_string_signed,
	Y: decimal_string_signed,
	Z: decimal_string_signed,
};

type XYZW_decimal_string = {
	X: decimal_string,
	Y: decimal_string,
	Z: decimal_string,
	W: decimal_string,
};

export type {
	bool_string, decimal_string, decimal_string_signed, empty_object, integer_string, integer_string_signed, BGRA, PitchYawRoll_decimal_string_signed, RGBA, XY_decimal_string, XYZ_decimal_string, XYZW_decimal_string,
};
