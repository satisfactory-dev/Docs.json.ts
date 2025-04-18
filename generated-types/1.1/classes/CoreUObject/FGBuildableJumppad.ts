import {v1_0_base__FGBuildableJumppad__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableJumppad__type = v1_0_base__FGBuildableJumppad__type &
	FGBuildable__base__type;

export type FGBuildableJumppad__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableJumppad__type];
	};
