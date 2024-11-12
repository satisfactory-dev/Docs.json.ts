import {FGBuildable__extractor_base__type} from './FGBuildable';

import {common_base__FGBuildableWaterPump__type} from '../../../common/classes/CoreUObject/FGBuildableWaterPump';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWaterPump__type = FGBuildableWaterPump__merged__type;

export type FGBuildableWaterPump__merged__type =
	common_base__FGBuildableWaterPump__type &
		FGBuildable__extractor_base__type;

export type FGBuildableWaterPump__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWaterPump__type];
	};
