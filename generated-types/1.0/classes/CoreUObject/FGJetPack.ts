import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGJetPack__type} from '../../../common/classes/CoreUObject/FGJetPack';

export type FGJetPack__type = FGJetPack__merged__type & {
	mAllowedFuelTypes: [
		UnrealEngineString<
			'/Script/FactoryGame.FGJetPackFuelParameters',
			StringStartsWith<'/Game/FactoryGame/Equipment/JetPack/FuelTypes/'>
		>,
		...UnrealEngineString<
			'/Script/FactoryGame.FGJetPackFuelParameters',
			StringStartsWith<'/Game/FactoryGame/Equipment/JetPack/FuelTypes/'>
		>[],
	];
	mUnlockedFuelTypes: '';
	mAvailableFuelTypes: '';
	mEquipMontage?: {
		Montages: [
			{
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
				>;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
		>;
	};
};

export type FGJetPack__merged__type =
	common_base__FGJetPack__type & FGEquipment__base__type;

export type FGJetPack__NativeClass = NativeClass__type & {
	Classes: [FGJetPack__type];
};
