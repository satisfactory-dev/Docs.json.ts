import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	decimal_string__type,
	integer_string__type,
	boolean__type,
} from '../../../common/common/scalar.js';

import type {
	common_base__FGChainsaw__type
} from '../../../common/classes/CoreUObject/FGChainsaw.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGChainsaw__type = FGChainsaw__merged__type & {
	mSawingMontageLength: decimal_string__type,
	mCurrentAkID: integer_string__type,
	mExcludeChainsawableFoliage: boolean__type,
};

export type FGChainsaw__merged__type
	= common_base__FGChainsaw__type & FGEquipment__base__type;

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type],
};
