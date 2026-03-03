import {FGBuildable__extractor_base__type} from './FGBuildable.ts';

import {common_base__FGBuildableWaterPump__type} from '../../../common/classes/CoreUObject/FGBuildableWaterPump.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableWaterPump__type =
	common_base__FGBuildableWaterPump__type &
		FGBuildable__extractor_base__type;

export type FGBuildableWaterPump__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWaterPump__type];
	};
