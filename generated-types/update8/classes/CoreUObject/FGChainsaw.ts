import {boolean__type} from '../../common/scalar';

import {mChainsawState__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGChainsaw__type = FGEquipment__base__type & {
	mSawingMontageLength: decimal_string__type;
	mInterpSawProgress: decimal_string__type;
	mCurrentOutputDataSFX: decimal_string__type;
	mCurrentAkID: integer_string__type;
	mCurrentHasFuel: boolean__type;
	mPreviousState: mChainsawState__type;
	mEnergyConsumption: decimal_string__type;
	mSawDownTreeTime: decimal_string__type;
	mCollateralPickupRadius: decimal_string__type;
	mExcludeChainsawableFoliage: boolean__type;
	mEnergyStored: decimal_string__type;
	mSawingProgress: decimal_string__type;
	mChainsawState: mChainsawState__type;
};

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type];
};
