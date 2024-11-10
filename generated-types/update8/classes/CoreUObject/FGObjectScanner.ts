import {FGEquipment__base__type} from './FGEquipment';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGObjectScanner__type} from '../../../common/classes/CoreUObject/FGObjectScanner';

export type FGObjectScanner__type = FGObjectScanner__merged__type & {
	mPlayingSound: boolean__type;
	mScreenUpdateTimer: empty_object__type;
	mScanlineLerpT: decimal_string__type;
	mScreenUpdateTime: decimal_string__type;
	mNormalizedCloesnessToObject: decimal_string__type;
	mObjectIsWithinRange: boolean__type;
	mIsPlayingStaticSound: boolean__type;
};

export type FGObjectScanner__merged__type =
	common_base__FGObjectScanner__type & FGEquipment__base__type;

export type FGObjectScanner__NativeClass = NativeClass__type & {
	Classes: [FGObjectScanner__type];
};
