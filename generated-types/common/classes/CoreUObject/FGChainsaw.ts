import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__mChainsawState__type} from '../../common/unassigned';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGChainsaw__type =
	common_base__FGEquipment__base__type & {
		mInterpSawProgress: decimal_string__type;
		mCurrentOutputDataSFX: decimal_string__type;
		mCurrentHasFuel: boolean__type;
		mPreviousState: common_base__mChainsawState__type;
		mEnergyConsumption: decimal_string__type;
		mSawDownTreeTime: decimal_string__type;
		mCollateralPickupRadius: decimal_string__type;
		mEnergyStored: decimal_string__type;
		mSawingProgress: decimal_string__type;
		mChainsawState: common_base__mChainsawState__type;
	};
