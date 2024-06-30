import {decimal_string__type, boolean__type} from '../../common/scalar';

import {
	pitch_yaw_roll__type,
	xyz__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

export type FGBuildablePassthrough__type = FGBuildable__base__type & {
	mSnappedBuildingThickness: decimal_string__type;
	mMidMeshLength: decimal_string__type;
	mGenerateTunnelCollision: boolean__type;
	mEndCapRotation: pitch_yaw_roll__type;
	mMidMeshRotation: pitch_yaw_roll__type;
	mEndCapTranslation: xyz__type;
	mClearanceHeightMin: decimal_string__type;
	mClearanceThickness: decimal_string__type;
	mCostSegmentLength: decimal_string__type;
	mGeneratedMeshComponents: '';
};

export type FGBuildablePassthrough__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePassthrough__type, ...FGBuildablePassthrough__type[]];
};
