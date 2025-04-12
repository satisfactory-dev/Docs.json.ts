import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {common_base__FGBuildableStorage__type} from '../../../common/classes/CoreUObject/FGBuildableStorage';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableStorage__type =
	common_base__FGBuildableStorage__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStorage__type, ...FGBuildableStorage__type[]];
	};
