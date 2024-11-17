import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	boolean__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
} from '../../common/scalar';

import {
	common_base__MaterialSlotName__type,
	common_base__EditorCurveData__type,
	empty_object__type,
	transformation__type,
	xyz__type,
	color_decimal__type,
	mDamageTypes__type,
} from '../../common/unassigned';

import {common_base__FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

export type common_base__FGAmmoTypeProjectile__type =
	common_base__FGAmmoTypeProjectile__base__type & {
		mInitialProjectileSpeedOverride: decimal_string__signed__type;
		mProjectileMaxSpeedOverride: decimal_string__signed__type;
		mProjectileHealthOverride: decimal_string__signed__type;
		mProjectileLifespan: decimal_string__signed__type;
		mProjectileStickspan: decimal_string__signed__type;
		mCanTakeDamageBySameProjectileOrChild: boolean__type;
		mDamageTypesAtEndOfLife: '' | mDamageTypes__type;
		mGravityScaleOverLifespan: common_base__EditorCurveData__type;
		mHomingProjectile: boolean__type;
		mHomingNeedsValidTarget: boolean__type;
		mMaxHomingAccelerationMagnitudeOverride: decimal_string__signed__type;
		mHomingMagnitudeMultiplierOverLifespan: common_base__EditorCurveData__type;
		mHomingMagnitudeMultiplierOverDistanceToTarget: common_base__EditorCurveData__type;
		mHomingOverlapSize: decimal_string__type;
		mHomingAngleLimit: decimal_string__type;
		mHomingOverrideTargets:
			| ''
			| [
					{
						ActorClass: UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Character/Creature/Enemy/'>
						>;
					},
					...{
						ActorClass: UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Character/Creature/Enemy/'>
						>;
					}[],
			];
	};

export type common_base__FGAmmoTypeProjectile__base__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__type & {
		AmmoFiredDelegate: empty_object__type;
		mFiringTransform: transformation__type;
		mFiringDirection: xyz__type;
		mMagazineSize: integer_string__type;
		mMaxAmmoEffectiveRange: decimal_string__type;
		mReloadTimeMultiplier: decimal_string__type;
		mFireRate: decimal_string__type;
		mFiringTransformIgnoresDispersion: boolean__type;
		mDispersionFireRateMultiplier: decimal_string__type;
		mDispersionPerShot: decimal_string__type;
		mRestingDispersion: decimal_string__type;
		mFiringDispersion: decimal_string__type;
		mDispersionRecoveryTime: decimal_string__type;
		mHasBeenInitialized: boolean__type;
		mWeaponDamageMultiplier: decimal_string__type;
		mMagazineMeshMaterials: [
			{
				MaterialInterface: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant' | '/Script/Engine.Material'
				>;
				MaterialSlotName: common_base__MaterialSlotName__type;
				ImportedMaterialSlotName: common_base__MaterialSlotName__type;
				UVChannelData: {
					bInitialized: boolean__type;
					['LocalUVDensities[0]']: decimal_string__type;
					['LocalUVDensities[1]']?: decimal_string__type;
				};
			},
			...{
				MaterialInterface: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant' | '/Script/Engine.Material'
				>;
				MaterialSlotName: common_base__MaterialSlotName__type;
				ImportedMaterialSlotName: common_base__MaterialSlotName__type;
				UVChannelData: {
					bInitialized: boolean__type;
					['LocalUVDensities[0]']: decimal_string__type;
					['LocalUVDensities[1]']?: decimal_string__type;
				};
			}[],
		];
		mMagazineMeshMaterials1p: [
			UnrealEngineString<'/Script/Engine.MaterialInstanceConstant'>,
			...UnrealEngineString<'/Script/Engine.MaterialInstanceConstant'>[],
		];
		mDamageTypesOnImpact: '' | mDamageTypes__type;
		mAmmoDamageFalloff: common_base__EditorCurveData__type;
		mMuzzleFlashScale: xyz__type;
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
		mFiringSounds1P: '';
		mAmmoColor: color_decimal__type;
		mAmmoScale: decimal_string__type;
		mAmmoTickFunction: {
			bAllowTickOnDedicatedServer: boolean__type;
		};
	};
