import type {
	decimal_string__type, boolean__type
} from '../../common/scalar.js';

import type {
	pitch_yaw_roll__type, xyz__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__base__type
} from './FGBuildable.js';

export type common_base__FGBuildablePassthrough__type
	= common_base__FGBuildable__base__type & {
		mSnappedBuildingThickness: decimal_string__type,
		mMidMeshLength: decimal_string__type,
		mGenerateTunnelCollision: boolean__type,
		mEndCapRotation: pitch_yaw_roll__type,
		mMidMeshRotation: pitch_yaw_roll__type,
		mEndCapTranslation: xyz__type,
		mClearanceHeightMin: decimal_string__type,
		mClearanceThickness: decimal_string__type,
		mCostSegmentLength: decimal_string__type,
		mGeneratedMeshComponents: '',
	};
