import type {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
} from '../../common/unassigned.js';

import type {
	UnrealEngineString, StringStartsWith
} from '../../utils/validators.js';

import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	common_base__FGEquipmentZipline__type
} from '../../../common/classes/CoreUObject/FGEquipmentZipline.js';

export type FGEquipmentZipline__type = FGEquipmentZipline__merged__type & {
	mZiplineAttachMontage: {
		Montage_1P: Montage_1P__type,
		Montage_3P: Montage_3P__type,
		CameraAnim: CameraAnim__type,
	},
	mZiplineDetachMontage: {
		Montage_1P: Montage_1P__type,
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
		>,
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
		>,
		CameraAnim: CameraAnim__type,
	},
	mZiplineTryAttachMontage: {
		Montage_1P: Montage_1P__type,
		Montage_3P: Montage_3P__type,
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
		>,
	},
	mWantToGrab: boolean__type,
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type,
				Montage_3P: Montage_3P__type,
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
				>,
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
				>,
			},
		],
	},
	mStingerMontage: empty_object__type,
	mUnEquipMontage: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
		>,
	},
};

export type FGEquipmentZipline__merged__type
	= common_base__FGEquipmentZipline__type & FGEquipment__base__type;

export type FGEquipmentZipline__NativeClass
	= NativeClass__type & {
		Classes: [FGEquipmentZipline__type],
	};
