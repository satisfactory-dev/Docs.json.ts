import {FGBuildable__base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	boolean__type,
	decimal_string__signed__type,
	integer_string__signed__type,
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

export type FGBuildableConveyorMonitor__type = FGBuildable__base__type &
	FGBuildableConveyorMonitor__properties__type;

export type FGBuildableConveyorMonitor__properties__type = {
	WidgetClass: '/Game/FactoryGame/Buildable/Factory/ConveyorMonitor/BPW_ConveyorMonitorDisplay.BPW_ConveyorMonitorDisplay_C';
	OnAverageDataUpdatedDelegate: empty_object__type;
	mIsSignificant: boolean__type;
	mOffsetAlongConveyor: decimal_string__signed__type;
	mCalculatedItemsPerMinute: integer_string__signed__type;
	mTotalItems: integer_string__type;
	mTotalTime: decimal_string__type;
	mConfidence: decimal_string__type;
	mReplicatedCoreData: empty_object__type;
	mSignificanceRange: decimal_string__type;
};

export type FGBuildableConveyorMonitor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableConveyorMonitor__type];
	};
