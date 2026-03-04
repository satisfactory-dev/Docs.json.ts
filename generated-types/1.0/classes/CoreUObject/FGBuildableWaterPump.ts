import {FGBuildable__extractor_base__type} from './FGBuildable.js';

import {common_base__FGBuildableWaterPump__type} from '../../../common/classes/CoreUObject/FGBuildableWaterPump.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableWaterPump__type =
	common_base__FGBuildableWaterPump__type &
		FGBuildable__extractor_base__type;

export type FGBuildableWaterPump__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWaterPump__type];
	};
