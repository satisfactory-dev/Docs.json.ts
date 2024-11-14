import {mAspect__type, empty_object__type} from '../../common/unassigned';

import {
	boolean__type,
	integer_string__type,
	decimal_string__type,
} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableRailroadSignal__type =
	common_base__FGBuildable__base__type & {
		mPreviousAspect?: mAspect__type;
		mOnAspectChangedDelegate: empty_object__type;
		mOnBlockValidationChangedDelegate: empty_object__type;
		mDrawDebugVisualState: boolean__type;
		mGuardedConnections: '';
		mObservedConnections: '';
		mAspect: mAspect__type;
		mBlockValidation: 'RBV_Unvalidated';
		mIsPathSignal: boolean__type;
		mIsBiDirectional: boolean__type;
		mVisualState: integer_string__type;
		mSignificanceRange: decimal_string__type;
	};
