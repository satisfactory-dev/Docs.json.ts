import type {
	v1_0_base__FGBuildableMAM__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableMAM__type = v1_0_base__FGBuildableMAM__type
	& FGBuildable__base__type;

export type FGBuildableMAM__NativeClass = NativeClass__type & {
	Classes: [FGBuildableMAM__type],
};
