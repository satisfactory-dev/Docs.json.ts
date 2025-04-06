import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	common_base__FGAmmoTypeProjectile__pre_1_1__type,
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type,
	common_base__EditorCurveData__type,
} from '../../common/unassigned';

export type common_base__FGAmmoTypeProjectile__type =
	common_base__FGAmmoTypeProjectile__base__type &
		common_base__FGAmmoTypeProjectile__pre_1_1__type;

export type common_base__FGAmmoTypeProjectile__base__type =
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type & {
		mAmmoDamageFalloff: common_base__EditorCurveData__type;
		mFiringSounds:
			| ''
			| [
					UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
					>,
					...UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
					>[],
			];
	};
