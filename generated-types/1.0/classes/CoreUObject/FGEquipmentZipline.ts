import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
	empty_object__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentZipline__type = FGEquipment__base__type & {
	mZiplineAttachMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		CameraAnim: CameraAnim__type;
	};
	mZiplineDetachMontage: {
		Montage_1P: Montage_1P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
		>;
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
		>;
		CameraAnim: CameraAnim__type;
	};
	mZiplineTryAttachMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
		>;
	};
	mWantToGrab: boolean__type;
	mZiplineJumpLaunchVelocity: decimal_string__type;
	mMaxZiplineAngle: decimal_string__type;
	mTraceDistance: decimal_string__type;
	mTraceStartOffset: decimal_string__type;
	mTraceRadius: decimal_string__type;
	mVisualizeTraceDistance: boolean__type;
	mActiveNoiseFrequency: decimal_string__type;
	mZiplineReattachCooldown: decimal_string__type;
	mEquipMontage?: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
				>;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
		>;
	};
};

export type FGEquipmentZipline__NativeClass =
	NativeClass__type & {
		Classes: [FGEquipmentZipline__type];
	};
