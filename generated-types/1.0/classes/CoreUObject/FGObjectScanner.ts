import {
	Montage_1P__type,
	Montage_3P__type,
	xyz__type,
	empty_object__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGObjectScanner__type = FGEquipment__base__type & {
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
	mBeepDelayMax: decimal_string__type;
	mBeepDelayMin: decimal_string__type;
	mDetectionRange: decimal_string__type;
	mUpdateClosestObjectTime: decimal_string__type;
	mClosestObject: {
		ActorLocation: xyz__type;
	};
	mClosestObjectInScanRange: boolean__type;
	mNormalizedDistanceToClosestObject: decimal_string__type;
	mAngleToClosestObject: decimal_string__type;
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

export type FGObjectScanner__NativeClass = NativeClass__type & {
	Classes: [FGObjectScanner__type];
};
