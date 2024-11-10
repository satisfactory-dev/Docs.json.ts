import {Montage_1P__type, Montage_3P__type} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	xyz__type,
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGObjectScanner__type} from '../../../common/classes/CoreUObject/FGObjectScanner';

export type FGObjectScanner__type = FGObjectScanner__merged__type & {
	mScannerCycleLeftMontage: {
		Montage_1P: Montage_1P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/ObjectScanner/Animation/'>
		>;
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
		>;
	};
	mScannerCycleRightMontage: {
		Montage_1P: Montage_1P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/ObjectScanner/Animation/'>
		>;
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
		>;
	};
	mClosestObject: {
		ActorLocation: xyz__type;
	};
	mEquipMontage?: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
				>;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
		>;
	};
};

export type FGObjectScanner__merged__type =
	common_base__FGObjectScanner__type & FGEquipment__base__type;

export type FGObjectScanner__NativeClass = NativeClass__type & {
	Classes: [FGObjectScanner__type];
};
