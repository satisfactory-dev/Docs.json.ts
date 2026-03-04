import type {
	boolean__type
} from '../../common/scalar.js';

import type {
	mDockingRuleSet__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type
} from './FGBuildableTrainPlatformCargo.js';

export type common_base__FGBuildableRailroadStation__type
	= common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type & {
		mMapText: 'Train Station',
		mShouldTeleportHere: boolean__type,
		mDockedPlatformList: '',
		mCurrentDockedWithRuleSet: mDockingRuleSet__type,
	};
