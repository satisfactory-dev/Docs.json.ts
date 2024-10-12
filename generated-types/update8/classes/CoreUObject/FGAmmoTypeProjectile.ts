import {
	boolean__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
} from '../../common/scalar';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	MaterialSlotName__type,
	EditorCurveData__type,
	empty_object__type,
	transformation__type,
	xyz__type,
	color_decimal__type,
	mDamageTypes__type,
} from '../../common/unassigned';

import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGAmmoTypeProjectile__type = FGAmmoTypeProjectile__base__type & {
	mInitialProjectileSpeedOverride: decimal_string__signed__type;
	mProjectileMaxSpeedOverride: decimal_string__signed__type;
	mProjectileHealthOverride: decimal_string__signed__type;
	mProjectileLifespan: decimal_string__signed__type;
	mProjectileStickspan: decimal_string__signed__type;
	mCanTakeDamageBySameProjectileOrChild: boolean__type;
	mDamageTypesAtEndOfLife: '' | mDamageTypes__type;
	mGravityScaleOverLifespan: EditorCurveData__type;
	mHomingProjectile: boolean__type;
	mHomingNeedsValidTarget: boolean__type;
	mMaxHomingAccelerationMagnitudeOverride: decimal_string__signed__type;
	mHomingMagnitudeMultiplierOverLifespan: EditorCurveData__type;
	mHomingMagnitudeMultiplierOverDistanceToTarget: EditorCurveData__type;
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

export type FGAmmoTypeProjectile__base__type =
	FGItemDescriptor__FGResourceDescriptor__type & {
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
				MaterialSlotName: MaterialSlotName__type;
				ImportedMaterialSlotName: MaterialSlotName__type;
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
				MaterialSlotName: MaterialSlotName__type;
				ImportedMaterialSlotName: MaterialSlotName__type;
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
		mAmmoDamageFalloff: EditorCurveData__type;
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

export type FGAmmoTypeProjectile__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeProjectile__type, ...FGAmmoTypeProjectile__type[]];
	};
