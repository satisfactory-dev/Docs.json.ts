import {v1_0_base__FGBuildableStorage__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableStorage__type = v1_0_base__FGBuildableStorage__type &
	FGBuildable__base__type;

export type FGBuildableStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStorage__type, ...FGBuildableStorage__type[]];
	};
