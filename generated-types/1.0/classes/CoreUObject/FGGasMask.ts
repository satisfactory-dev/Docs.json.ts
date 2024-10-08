import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
	mDamageTypes__type,
	empty_object__type,
	NativeClass__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

export type FGGasMask__type = FGEquipment__base__type & {
	mDamageTypesToProtectAgainst: mDamageTypes__type;
	mPostProcessEnabled: boolean__type;
	mFilterCountdown: decimal_string__type;
	mFilterDuration: decimal_string__type;
	mIsInPoisonGas: boolean__type;
	mEquipMontage?: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/GasMask/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/GasMask/'>
				>;
				CameraAnim: CameraAnim__type;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: empty_object__type;
};

export type FGGasMask__NativeClass = NativeClass__type & {
	Classes: [FGGasMask__type];
};
