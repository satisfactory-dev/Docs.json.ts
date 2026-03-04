import {FGBuildable__consumes_power_base__type} from './FGBuildable.js';

import {common_base__FGBuildableStorage__type} from '../../../common/classes/CoreUObject/FGBuildableStorage.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableStorage__type =
	common_base__FGBuildableStorage__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStorage__type, ...FGBuildableStorage__type[]];
	};
