import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {empty_object__type} from '../../common/unassigned';

import {boolean__type, integer_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGJetPack__type = FGEquipment__base__type & {
	FuelTypeDescriptos: '';
	mOnFuelAmountChanged: empty_object__type;
	mOnBurnPercentChanged: empty_object__type;
	mOnFuelTypeChanged: empty_object__type;
	mDefaultAirControl: decimal_string__type;
	mRTPCInterval: decimal_string__type;
	mCurrentFuel: decimal_string__type;
	mIsThrusting: boolean__type;
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
	mSelectedFuelType: integer_string__type;
	mCurrentFuelType: integer_string__type;
	mUnlockedFuelTypes: '';
	mAvailableFuelTypes: '';
	mActiveNoiseFrequency: decimal_string__type;
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
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/JetPack/'>
		>;
	};
};

export type FGJetPack__NativeClass = NativeClass__type & {
	Classes: [FGJetPack__type];
};
