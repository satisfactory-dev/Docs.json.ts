import type {
	v1_0_base__FGBuildableLightsControlPanel__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableLightsControlPanel__type
	= v1_0_base__FGBuildableLightsControlPanel__type & FGBuildable__base__type;

export type FGBuildableLightsControlPanel__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableLightsControlPanel__type],
	};
