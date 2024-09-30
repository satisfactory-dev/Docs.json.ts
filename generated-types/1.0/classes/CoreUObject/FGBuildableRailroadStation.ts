import {boolean__type} from '../../common/scalar';

import {
	mDockingRuleSet__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type} from './FGBuildableTrainPlatformCargo';

export type FGBuildableRailroadStation__type =
	FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type & {
		mMapText: 'Train Station';
		mShouldTeleportHere: boolean__type;
		mDockedPlatformList: '';
		mCurrentDockedWithRuleSet: mDockingRuleSet__type;
	};

export type FGBuildableRailroadStation__NativeClass = NativeClass__type & {
	Classes: [FGBuildableRailroadStation__type];
};
