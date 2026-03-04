import type {
	FGBuildable__base__type,
	FGBuildable__occupied__type,
	FGBuildable__tiered__type,
} from './FGBuildable.js';

import type {
	common_base__FGBuildableFactoryBuilding__type
} from '../../../common/classes/CoreUObject/FGBuildableFactoryBuilding.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFactoryBuilding__type
	= common_base__FGBuildableFactoryBuilding__type
		& FGBuildable__base__type;

export type FGBuildableFactoryBuilding__NativeClass
	= NativeClass__type & {
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
		],
	};
