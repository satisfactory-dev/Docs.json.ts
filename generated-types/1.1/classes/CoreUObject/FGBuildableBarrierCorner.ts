import {FGBuildablePillarLightweight__type} from './FGBuildablePillarLightweight.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildablePillarLightweight__type} from '../../../common/classes/CoreUObject/FGBuildablePillarLightweight.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableBarrierCorner__type = FGBuildable__base__type &
	common_base__FGBuildablePillarLightweight__type;

export type FGBuildableBarrierCorner__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePillarLightweight__type,
			...FGBuildablePillarLightweight__type[],
		];
	};
