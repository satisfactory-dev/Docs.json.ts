import type {
	FGBuildable__base__type,
	FGBuildable__occupied__final__type,
	FGBuildable__tiered__type,
} from './FGBuildable.js';

import type {
	v1_0_base__FGBuildableFactoryBuilding__type
} from '../../common/unassigned.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFactoryBuilding__type
	= v1_0_base__FGBuildableFactoryBuilding__type & FGBuildable__base__type;

export type FGBuildableFactoryBuilding__NativeClass
	= NativeClass__type & {
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
		],
	};
