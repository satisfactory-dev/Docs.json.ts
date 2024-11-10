import {FGEquipment__base__type} from './FGEquipment';

import {
	decimal_string__type,
	integer_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {common_base__FGChainsaw__type} from '../../../common/classes/CoreUObject/FGChainsaw';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGChainsaw__type = FGChainsaw__merged__type & {
	mSawingMontageLength: decimal_string__type;
	mCurrentAkID: integer_string__type;
	mExcludeChainsawableFoliage: boolean__type;
};

export type FGChainsaw__merged__type =
	common_base__FGChainsaw__type & FGEquipment__base__type;

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type];
};
