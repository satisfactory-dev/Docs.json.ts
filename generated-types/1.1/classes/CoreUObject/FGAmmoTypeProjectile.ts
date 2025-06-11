import {
	EditorCurveData__type,
	v1_0_base__FGItemDescriptor__FGResourceDescriptor__type,
} from '../../common/unassigned';

import {
	empty_object__type,
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type,
	common_base__FGAmmoTypeProjectile__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGAmmoTypeProjectile__type =
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type &
		common_base__FGAmmoTypeProjectile__pre_1_1__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeProjectile__base__type =
	FGAmmoTypeProjectile__base__from_common__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__type;

export type FGAmmoTypeProjectile__base__from_common__type =
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type & {
		mAmmoDamageFalloff: EditorCurveData__type;
		mFiringSounds:
			| ''
			| [
					(
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_T_RebarGun_Fire.Play_T_RebarGun_Fire'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_StunFire.Play_RebarGun_StunFire'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_HomingAmmo_Shot.Play_Rifle_HomingAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_ChaosAmmo_Shot.Play_Rifle_ChaosAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_GunShot_3P.Play_E_Rifle_GunShot_3P'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_RebarGun_StunFire_3p.Play_RebarGun_StunFire_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/Rifle/Play_Rifle_HomingAmmo_Shot_3p.Play_Rifle_HomingAmmo_Shot_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_RebarGun_Scatter_Fire_3p.Play_RebarGun_Scatter_Fire_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/Rifle/Play_Rifle_ChaosAmmo_Shot_3p.Play_Rifle_ChaosAmmo_Shot_3p'
					),
					...(
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_T_RebarGun_Fire.Play_T_RebarGun_Fire'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_StunFire.Play_RebarGun_StunFire'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_HomingAmmo_Shot.Play_Rifle_HomingAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_ChaosAmmo_Shot.Play_Rifle_ChaosAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_GunShot_3P.Play_E_Rifle_GunShot_3P'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_RebarGun_StunFire_3p.Play_RebarGun_StunFire_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/Rifle/Play_Rifle_HomingAmmo_Shot_3p.Play_Rifle_HomingAmmo_Shot_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_RebarGun_Scatter_Fire_3p.Play_RebarGun_Scatter_Fire_3p'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/Rifle/Play_Rifle_ChaosAmmo_Shot_3p.Play_Rifle_ChaosAmmo_Shot_3p'
					)[],
			];
		mFiringSounds1P?:
			| ''
			| [
					(
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_GunShot.Play_E_Rifle_GunShot'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_T_RebarGun_Fire_3p.Play_T_RebarGun_Fire_3p'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_StunFire.Play_RebarGun_StunFire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_HomingAmmo_Shot.Play_Rifle_HomingAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_ChaosAmmo_Shot.Play_Rifle_ChaosAmmo_Shot'
					),
					...(
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_GunShot.Play_E_Rifle_GunShot'
						| '/Game/WwiseAudio/Events/Equipment/Equipment_Weapons/RebarGun/3p/Play_T_RebarGun_Fire_3p.Play_T_RebarGun_Fire_3p'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_StunFire.Play_RebarGun_StunFire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_HomingAmmo_Shot.Play_Rifle_HomingAmmo_Shot'
						| '/Game/WwiseAudio/Events/Equipment/RebarGun/Play_RebarGun_Scatter_Fire.Play_RebarGun_Scatter_Fire'
						| '/Game/WwiseAudio/Events/Equipment/Rifle/Play_Rifle_ChaosAmmo_Shot.Play_Rifle_ChaosAmmo_Shot'
					)[],
			];
		mAudioEventsCache:
			| empty_object__type
			| {
					mSoftAudioEvents: [
						'/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_WorldImpact_Solids.Play_E_Rifle_WorldImpact_Solids',
						...'/Game/WwiseAudio/Events/Equipment/Rifle/Play_E_Rifle_WorldImpact_Solids.Play_E_Rifle_WorldImpact_Solids'[],
					];
			};
	};

export type FGAmmoTypeProjectile__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeProjectile__type, ...FGAmmoTypeProjectile__type[]];
	};
