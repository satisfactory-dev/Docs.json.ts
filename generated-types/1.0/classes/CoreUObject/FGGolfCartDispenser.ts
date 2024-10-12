import {
	Montage_1P__type,
	Montage_3P__type,
	xyz__type,
	empty_object__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGGolfCartDispenser__type = FGEquipment__base__type & {
	mBuildDisqualifierText: 'Vehicles cannot be built or deployed on top of existing vehicles!';
	canDisplayDisqualifier: boolean__type;
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

export type FGGolfCartDispenser__NativeClass =
	NativeClass__type & {
		Classes: [FGGolfCartDispenser__type, FGGolfCartDispenser__type];
	};
