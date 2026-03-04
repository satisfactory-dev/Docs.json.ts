import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	common_base__FGPipeHyperStart__type
} from '../../../common/classes/CoreUObject/FGPipeHyperStart.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGPipeHyperStart__type = FGPipeHyperStart__merged__type;

export type FGPipeHyperStart__merged__type
	= common_base__FGPipeHyperStart__type
		& FGBuildable__consumes_power_base__type;

export type FGPipeHyperStart__NativeClass = NativeClass__type & {
	Classes: [FGPipeHyperStart__type],
};
