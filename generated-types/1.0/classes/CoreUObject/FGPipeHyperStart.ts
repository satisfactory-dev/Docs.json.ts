import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {common_base__FGPipeHyperStart__type} from '../../../common/classes/CoreUObject/FGPipeHyperStart';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGPipeHyperStart__type = FGPipeHyperStart__merged__type;

export type FGPipeHyperStart__merged__type =
	common_base__FGPipeHyperStart__type &
		FGBuildable__consumes_power_base__type;

export type FGPipeHyperStart__NativeClass = NativeClass__type & {
	Classes: [FGPipeHyperStart__type];
};
