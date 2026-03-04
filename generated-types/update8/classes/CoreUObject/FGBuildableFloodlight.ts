import {FGBuildableLightSource__base__type} from './FGBuildableLightSource.js';

import {common_base__FGBuildableFloodlight__type} from '../../../common/classes/CoreUObject/FGBuildableFloodlight.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableFloodlight__type =
	common_base__FGBuildableFloodlight__type &
		FGBuildableLightSource__base__type;

export type FGBuildableFloodlight__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFloodlight__type, ...FGBuildableFloodlight__type[]];
	};
