import {
	Montage_1P__type,
	Montage_3P__type,
	NativeClass__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__placeable__type} from './FGEquipment';

export type FGPortableMinerDispenser__type = FGEquipment__placeable__type & {
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/PortableMiner/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/PortableMiner/'>
				>;
			},
		];
	};
	mStingerMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: Montage_1P__type;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/PortableMiner/'>
				>;
			},
		];
	};
	mUnEquipMontage: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
		>;
	};
};

export type FGPortableMinerDispenser__NativeClass = NativeClass__type & {
	Classes: [FGPortableMinerDispenser__type];
};
