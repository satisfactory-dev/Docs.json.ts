import {boolean__type} from '../../common/scalar';

import {mDockingRuleSet__type} from '../../common/unassigned';

import {common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type} from './FGBuildableTrainPlatformCargo';

export type common_base__FGBuildableRailroadStation__type =
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type & {
		mMapText: 'Train Station';
		mShouldTeleportHere: boolean__type;
		mDockedPlatformList: '';
		mCurrentDockedWithRuleSet: mDockingRuleSet__type;
	};
