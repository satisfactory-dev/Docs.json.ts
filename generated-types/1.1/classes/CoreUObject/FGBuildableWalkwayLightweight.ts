import {FGBuildableWalkway__base__type} from './FGBuildableWalkway';

import {common_base__FGBuildableWalkwayLightweight__type} from '../../../common/classes/CoreUObject/FGBuildableWalkwayLightweight';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWalkwayLightweight__type =
	common_base__FGBuildableWalkwayLightweight__type &
		FGBuildableWalkway__base__type;

export type FGBuildableWalkwayLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		];
	};
