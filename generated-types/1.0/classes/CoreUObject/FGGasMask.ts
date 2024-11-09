import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {boolean__type} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGGasMask__type} from '../../../common/classes/CoreUObject/FGGasMask';

export type FGGasMask__type = FGGasMask__merged__type & {
	mEquipMontage: {
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
	mStingerMontage: empty_object__type;
	mUnEquipMontage: FGGasMask__mUnEquipMontage__type;
};

export type FGGasMask__merged__type =
	common_base__FGGasMask__type & FGEquipment__base__type;

export type FGGasMask__mUnEquipMontage__type = {
	AudioEvent: UnrealEngineString<
		'/Script/AkAudio.AkAudioEvent',
		StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Equipment_Gear/GasMask/'>
	>;
};

export type FGGasMask__NativeClass = NativeClass__type & {
	Classes: [FGGasMask__type];
};
