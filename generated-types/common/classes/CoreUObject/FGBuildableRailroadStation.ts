import {boolean__type} from '../../common/scalar.ts';

import {mDockingRuleSet__type} from '../../common/unassigned.ts';

import {common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type} from './FGBuildableTrainPlatformCargo.ts';

export type common_base__FGBuildableRailroadStation__type =
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type & {
		mMapText: 'Train Station';
		mShouldTeleportHere: boolean__type;
		mDockedPlatformList: '';
		mCurrentDockedWithRuleSet: mDockingRuleSet__type;
	};
