import {Montage_1P__type, Montage_3P__type} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	xyz__type,
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {decimal_string__type} from '../../../common/common/scalar';

import {common_base__FGGolfCartDispenser__type} from '../../../common/classes/CoreUObject/FGGolfCartDispenser';

export type FGGolfCartDispenser__type = FGGolfCartDispenser__merged__type & {
	mBuildDisqualifierText: 'Vehicles cannot be built or deployed on top of existing vehicles!';
	mChristmasMaterial:
		| 'None'
		| '/Game/FactoryGame/Buildable/Vehicle/Golfcart/Material/MI_ChrismasCart_Inst.MI_ChrismasCart_Inst';
	mChristmasMaterial1P:
		| 'None'
		| '/Game/FactoryGame/Buildable/Vehicle/Golfcart/Material/MI_ChrismasCart_Inst_1p.MI_ChrismasCart_Inst_1p';
	mCartPlacementClearance: xyz__type;
	mCartPlacementDistance: decimal_string__type;
	mEquipMontage?: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
		>;
	};
};

export type FGGolfCartDispenser__merged__type =
	common_base__FGGolfCartDispenser__type &
		FGEquipment__base__type;

export type FGGolfCartDispenser__NativeClass =
	NativeClass__type & {
		Classes: [FGGolfCartDispenser__type, FGGolfCartDispenser__type];
	};
