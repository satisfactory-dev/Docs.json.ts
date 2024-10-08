import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

export type FGBuildableSpaceElevator__type =
	FGBuildable__consumes_power_base__type & {
		mOnSpaceElevatorStateUpdated: empty_object__type;
		mSpaceElevatorState: FGBuildableSpaceElevator__mSpaceElevatorState__type;
	};

export type FGBuildableSpaceElevator__mSpaceElevatorState__type = 'ESES_Load';

export type FGBuildableSpaceElevator__NativeClass = NativeClass__type & {
	Classes: [FGBuildableSpaceElevator__type];
};
