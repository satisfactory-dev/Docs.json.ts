import {v1_0_base__FGBuildableStorage__type} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableStorage__type = v1_0_base__FGBuildableStorage__type &
	FGBuildable__base__type;

export type FGBuildableStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStorage__type, ...FGBuildableStorage__type[]];
	};
