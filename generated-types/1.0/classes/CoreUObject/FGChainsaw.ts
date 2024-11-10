import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {Montage_1P__type, Montage_3P__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {
	integer_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGChainsaw__type} from '../../../common/classes/CoreUObject/FGChainsaw';

export type FGChainsaw__type = FGChainsaw__merged__type & {
	StartUpToIdleID: integer_string__type;
	mChainsawEngageMontage: {
		Montage_1P: Montage_1P__type;
		Montage_Equipment: FGChainsaw__Montage_Equipment__type;
	};
	mChainsawSawingMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		Montage_Equipment: FGChainsaw__Montage_Equipment__type;
	};
	mChainsawEquipFuelMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		Montage_Equipment: FGChainsaw__Montage_Equipment__type;
	};
	mChainsawEquipNoFuelMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		Montage_Equipment: FGChainsaw__Montage_Equipment__type;
	};
	mChainsawEquipStingerMontage: {
		Montage_1P: Montage_1P__type;
		Montage_Equipment: FGChainsaw__Montage_Equipment__type;
	};
	mShowAOESelectorUITimer: empty_object__type;
	EngagePlayingID: integer_string__type;
	['IdlePlaying ID']: integer_string__type;
	['Playing ID']: integer_string__type;
	SawingPlayingID: integer_string__type;
	mIsAOEOn: boolean__type;
	mEquipMontage?: empty_object__type;
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: empty_object__type;
};

export type FGChainsaw__merged__type =
	common_base__FGChainsaw__type & FGEquipment__base__type;

export type FGChainsaw__Montage_Equipment__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Equipment/Chainsaw/Animation/'>
>;

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type];
};
