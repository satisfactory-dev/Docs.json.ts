import {boolean__type, decimal_string__type} from '../../common/scalar';

import {empty_object__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGObjectScanner__type = FGEquipment__base__type & {
	mPlayingSound: boolean__type;
	mScreenUpdateTimer: empty_object__type;
	mScanlineLerpT: decimal_string__type;
	mScreenUpdateTime: decimal_string__type;
	mNormalizedCloesnessToObject: decimal_string__type;
	mObjectIsWithinRange: boolean__type;
	mIsPlayingStaticSound: boolean__type;
	mBeepDelayMax: decimal_string__type;
	mBeepDelayMin: decimal_string__type;
	mDetectionRange: decimal_string__type;
	mUpdateClosestObjectTime: decimal_string__type;
	mClosestObjectInScanRange: boolean__type;
	mNormalizedDistanceToClosestObject: decimal_string__type;
	mAngleToClosestObject: decimal_string__type;
};

export type FGObjectScanner__NativeClass = NativeClass__type & {
	Classes: [FGObjectScanner__type];
};
