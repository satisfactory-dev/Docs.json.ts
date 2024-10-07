import {UnrealEngineString, StringStartsWith} from '../utils/validators';

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

export type faux_1__type = class__type & {
	faux: UnrealEngineString__array__type;
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
