import {FGBuildable__base__type} from './FGBuildable';

import {common_base__FGBuildableBeamLightweight__type} from '../../../common/classes/CoreUObject/FGBuildableBeamLightweight';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableBeamLightweight__type =
	FGBuildableBeamLightweight__merged__type;

export type FGBuildableBeamLightweight__merged__type =
	common_base__FGBuildableBeamLightweight__type &
		FGBuildable__base__type;

export type FGBuildableBeamLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableBeamLightweight__type,
			...FGBuildableBeamLightweight__type[],
		];
	};
