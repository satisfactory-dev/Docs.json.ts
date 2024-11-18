import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGBuildableSpaceElevator__type} from '../../../common/classes/CoreUObject/FGBuildableSpaceElevator';

export type FGBuildableSpaceElevator__type =
	FGBuildableSpaceElevator__merged__type & {
		mOnSpaceElevatorStateUpdated: empty_object__type;
		mSpaceElevatorState: FGBuildableSpaceElevator__mSpaceElevatorState__type;
	};

export type FGBuildableSpaceElevator__merged__type =
	common_base__FGBuildableSpaceElevator__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableSpaceElevator__mSpaceElevatorState__type = 'ESES_Load';

export type FGBuildableSpaceElevator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableSpaceElevator__type];
	};
