import type {
	mElevatorState__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	color_decimal__type,
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	integer_string__signed__type,
	decimal_string__type,
	boolean__type,
} from '../../../common/common/scalar.js';

export type FGBuildableElevatorFloorStop__type = FGBuildable__base__type
	& FGBuildableElevatorFloorStop__properties__type;

export type FGBuildableElevatorFloorStop__properties__type = {
	Timeline_Offset_942DA00C47315AC741095991E04356D7: xyz__type,
	Timeline__Direction_942DA00C47315AC741095991E04356D7: 'Forward',
	DoorStartTime: decimal_string__type,
	mElevatorDataStruct: {
		FloorColor_11_CD9C84CB45D5EE423EB254803463E6C9: color_decimal__type,
	},
	bIsSignificant: boolean__type,
	mSignificanceRange: decimal_string__type,
	mFloorRelevantElevatorState: mElevatorState__type,
	mCachedQueuedStatus: 'EEFSQS_None',
	mCachedFloorStopInfo: {
		IconId: integer_string__signed__type,
		IconColor: color_decimal__type,
		Height: integer_string__signed__type,
	},
};

export type FGBuildableElevatorFloorStop__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableElevatorFloorStop__type,
			...FGBuildableElevatorFloorStop__type[],
		],
	};
