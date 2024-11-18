import {
	FGBuildable__base__type,
	FGBuildable__occupied__type,
	FGBuildable__tiered__type,
} from './FGBuildable';

import {common_base__FGBuildableSnowDispenser__type} from '../../../common/classes/CoreUObject/FGBuildableSnowDispenser';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableSnowDispenser__type =
	FGBuildableSnowDispenser__merged__type;

export type FGBuildableSnowDispenser__merged__type =
	common_base__FGBuildableSnowDispenser__type &
		FGBuildable__base__type;

export type FGBuildableSnowDispenser__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildable__base__type
				| FGBuildable__occupied__type
				| FGBuildable__tiered__type
			),
			...(
				| FGBuildable__base__type
				| FGBuildable__occupied__type
				| FGBuildable__tiered__type
			)[],
		];
	};
