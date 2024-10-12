import {
	FGBuildable__base__type,
	FGBuildable__occupied__type,
	FGBuildable__tiered__type,
} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFactoryBuilding__type = FGBuildable__base__type;

export type FGBuildableFactoryBuilding__NativeClass =
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
