import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import type {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	common_base__FGObjectScanner__type
} from '../../../common/classes/CoreUObject/FGObjectScanner.js';

export type FGObjectScanner__type = FGObjectScanner__merged__type & {
	mPlayingSound: boolean__type,
	mScreenUpdateTimer: empty_object__type,
	mScanlineLerpT: decimal_string__type,
	mScreenUpdateTime: decimal_string__type,
	mNormalizedCloesnessToObject: decimal_string__type,
	mObjectIsWithinRange: boolean__type,
	mIsPlayingStaticSound: boolean__type,
};

export type FGObjectScanner__merged__type
	= common_base__FGObjectScanner__type & FGEquipment__base__type;

export type FGObjectScanner__NativeClass = NativeClass__type & {
	Classes: [FGObjectScanner__type],
};
