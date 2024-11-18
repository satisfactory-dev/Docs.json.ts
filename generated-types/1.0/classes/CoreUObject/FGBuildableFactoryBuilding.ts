import {
	FGBuildable__base__type,
	FGBuildable__occupied__final__type,
	FGBuildable__tiered__type,
} from './FGBuildable';

import {common_base__FGBuildableFactoryBuilding__type} from '../../../common/classes/CoreUObject/FGBuildableFactoryBuilding';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFactoryBuilding__type =
	FGBuildableFactoryBuilding__merged__type;

export type FGBuildableFactoryBuilding__merged__type =
	common_base__FGBuildableFactoryBuilding__type &
		FGBuildable__base__type;

export type FGBuildableFactoryBuilding__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildable__base__type
				| FGBuildable__occupied__final__type
				| FGBuildable__tiered__type
			),
			...(
				| FGBuildable__base__type
				| FGBuildable__occupied__final__type
				| FGBuildable__tiered__type
			)[],
		];
	};
