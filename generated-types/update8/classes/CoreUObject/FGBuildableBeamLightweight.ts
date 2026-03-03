import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildableBeamLightweight__type} from '../../../common/classes/CoreUObject/FGBuildableBeamLightweight.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableBeamLightweight__type =
	common_base__FGBuildableBeamLightweight__type &
		FGBuildable__base__type;

export type FGBuildableBeamLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableBeamLightweight__type,
			...FGBuildableBeamLightweight__type[],
		];
	};
