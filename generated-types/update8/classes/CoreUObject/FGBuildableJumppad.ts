import {FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

import {common_base__FGBuildableJumppad__type} from '../../../common/classes/CoreUObject/FGBuildableJumppad.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableJumppad__type = FGBuildableJumppad__merged__type;

export type FGBuildableJumppad__merged__type =
	common_base__FGBuildableJumppad__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableJumppad__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableJumppad__type];
	};
