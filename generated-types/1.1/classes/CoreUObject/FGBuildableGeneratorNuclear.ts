import type {
	v1_0_base__FGBuildableGeneratorNuclear__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableGeneratorNuclear__type
	= v1_0_base__FGBuildableGeneratorNuclear__type & FGBuildable__base__type;

export type FGBuildableGeneratorNuclear__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableGeneratorNuclear__type],
	};
