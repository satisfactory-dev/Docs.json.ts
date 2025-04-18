import {v1_0_base__FGBuildable__consumes_power_base__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGPipeHyperStart__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGPipeHyperStart__type =
	common_base__FGPipeHyperStart__pre_1_1__type &
		v1_0_base__FGBuildable__consumes_power_base__type &
		FGBuildable__base__type;

export type FGPipeHyperStart__NativeClass = NativeClass__type & {
	Classes: [FGPipeHyperStart__type];
};
