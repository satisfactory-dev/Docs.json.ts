import type {
	v1_0_base__FGBuildableBeamLightweight__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableBeam__type
	= v1_0_base__FGBuildableBeamLightweight__type & FGBuildableBeam__base__type;

export type FGBuildableBeam__base__type = FGBuildable__base__type & {
	bTiledMesh: boolean__type,
};

export type FGBuildableBeam__NativeClass = NativeClass__type & {
	Classes: [FGBuildableBeam__type, ...FGBuildableBeam__type[]],
};
