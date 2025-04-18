import {
	EditorCurveData__type,
	v1_0_base__mGasType__type,
	v1_0_base__mClassToScanFor__type,
} from '../../common/unassigned';

import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

import {boolean__type} from '../../../common/common/scalar';

import {
	empty_object__type,
	common_base__FGAmmoTypeSpreadshot__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGAmmoTypeSpreadshot__type = FGAmmoTypeProjectile__base__type &
	common_base__FGAmmoTypeSpreadshot__pre_1_1__type &
	FGAmmoTypeSpreadshot__base__type;

export type FGAmmoTypeSpreadshot__base__type = {
	mAmmoDamageFalloff: EditorCurveData__type;
	mFiringSounds:
		| ''
		| [
				'/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire',
				...'/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire'[],
		];
	mAudioEventsCache: empty_object__type;
	mGasType: v1_0_base__mGasType__type;
	mIsAlienItem: boolean__type;
	mClassToScanFor: v1_0_base__mClassToScanFor__type;
	mNeedsPickUpMarker: boolean__type;
};

export type FGAmmoTypeSpreadshot__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeSpreadshot__type];
	};
