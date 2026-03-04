import type {
	v1_0_base__FGBuildableFrackingActivator__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFrackingActivator__type
	= v1_0_base__FGBuildableFrackingActivator__type & FGBuildable__base__type;

export type FGBuildableFrackingActivator__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableFrackingActivator__type],
	};
