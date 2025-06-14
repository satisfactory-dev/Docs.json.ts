import {
	UnrealEngineString,
	StringStartsWith,
	StringPassedRegExp,
} from '../utils/validators';

import {
	common_base__FGBuildingDescriptor__ClassName__type,
	common_base__FGBuildingDescriptor__mForm__type,
	common_base__FGBuildingDescriptor__mSubCategories__type,
	common_base__FGBuildingDescriptor__type,
} from '../classes/CoreUObject/FGBuildingDescriptor';

import {
	common_base__FGBuildable__base__type,
	common_base__FGBuildable__consumes_power_base__type,
	common_base__FGBuildable__docking_station_base__type,
	common_base__FGBuildable__occupied__type,
	common_base__FGBuildable__tiered__type,
	common_base__FGBuildable__extractor_base__shared__type,
	common_base__FGBuildable__extractor_base__type,
	common_base__FGBuildable__splitter__base__type,
	common_base__FGBuildable__circuits_base__type,
	common_base__FGBuildable__power_switch__base__type,
	common_base__FGBuildable__pipeline_accessory__base__type,
	common_base__FGBuildable__pipeline_accessory__type,
	common_base__FGBuildable__pipeline_flow_accessory__type,
	common_base__FGBuildable__pole__base__no_static__type,
	common_base__FGBuildable__pole__base__with_static__type,
} from '../classes/CoreUObject/FGBuildable';

import {common_base__FGBuildableDroneStation__type} from '../classes/CoreUObject/FGBuildableDroneStation';

import {common_base__FGBuildableBlueprintDesigner__type} from '../classes/CoreUObject/FGBuildableBlueprintDesigner';

import {
	common_base__FGBuildableFactory__jump_pad__type,
	common_base__FGBuildableFactory__landing_pad__type,
	common_base__FGBuildableFactory__generic__type,
} from '../classes/CoreUObject/FGBuildableFactory';

import {common_base__FGBuildableMAM__type} from '../classes/CoreUObject/FGBuildableMAM';

import {common_base__FGBuildableRailroadTrack__type} from '../classes/CoreUObject/FGBuildableRailroadTrack';

import {common_base__FGBuildableWire__type} from '../classes/CoreUObject/FGBuildableWire';

import {common_base__FGBuildablePowerPole__type} from '../classes/CoreUObject/FGBuildablePowerPole';

import {common_base__FGBuildableTradingPost__type} from '../classes/CoreUObject/FGBuildableTradingPost';

import {common_base__FGBuildablePillarLightweight__type} from '../classes/CoreUObject/FGBuildablePillarLightweight';

import {
	common_base__FGBuildableWalkway__base__type,
	common_base__FGBuildableWalkway__type,
} from '../classes/CoreUObject/FGBuildableWalkway';

import {common_base__FGBuildableWalkwayLightweight__type} from '../classes/CoreUObject/FGBuildableWalkwayLightweight';

import {common_base__FGBuildableGenerator__base__type} from '../classes/CoreUObject/FGBuildableGenerator';

import {
	common_base__FGBuildableGeneratorFuel__base__type,
	common_base__FGBuildableGeneratorFuel__solid__type,
	common_base__FGBuildableGeneratorFuel__liquid__type,
	common_base__FGBuildableGeneratorFuel__biogen__type,
} from '../classes/CoreUObject/FGBuildableGeneratorFuel';

import {common_base__FGBuildableGeneratorGeoThermal__type} from '../classes/CoreUObject/FGBuildableGeneratorGeoThermal';

import {
	common_base__FGBuildableGeneratorNuclear__mFuel__base__type,
	common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__type,
} from '../classes/CoreUObject/FGBuildableGeneratorNuclear';

import {common_base__FGBuildablePipeline__type} from '../classes/CoreUObject/FGBuildablePipeline';

import {common_base__FGBuildableWaterPump__type} from '../classes/CoreUObject/FGBuildableWaterPump';

import {common_base__FGBuildableResourceSink__type} from '../classes/CoreUObject/FGBuildableResourceSink';

import {common_base__FGBuildableResourceSinkShop__type} from '../classes/CoreUObject/FGBuildableResourceSinkShop';

import {common_base__FGItemDescriptorBiomass__type} from '../classes/CoreUObject/FGItemDescriptorBiomass';

import {
	common_base__FGBuildableResourceExtractor__oil_extractor__type,
	common_base__FGBuildableResourceExtractor__miner__base__type,
	common_base__FGBuildableResourceExtractor__miner__type,
} from '../classes/CoreUObject/FGBuildableResourceExtractor';

import {
	common_base__FGBuildableManufacturer__base__type,
	common_base__FGBuildableManufacturer__type,
	common_base__FGBuildableManufacturer__packager__type,
	common_base__FGBuildableManufacturer__blender__type,
	common_base__FGBuildableManufacturer__smelter__type,
	common_base__FGBuildableManufacturer__constructor__type,
} from '../classes/CoreUObject/FGBuildableManufacturer';

import {
	common_base__FGBuildableManufacturerVariablePower__base__type,
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
} from '../classes/CoreUObject/FGBuildableManufacturerVariablePower';

import {
	common_base__FGEquipment__placeable__type,
	common_base__FGEquipment__base__type,
} from '../classes/CoreUObject/FGEquipment';

import {common_base__FGPortableMinerDispenser__type} from '../classes/CoreUObject/FGPortableMinerDispenser';

import {
	common_base__FGItemDescriptorNuclearFuel__waste__type,
	common_base__FGItemDescriptorNuclearFuel__type,
} from '../classes/CoreUObject/FGItemDescriptorNuclearFuel';

import {
	common_base__FGVehicleDescriptor__powered_no_inventory__type,
	common_base__FGVehicleDescriptor__with_inventory__type,
	common_base__FGVehicleDescriptor__fueled_with_inventory__type,
} from '../classes/CoreUObject/FGVehicleDescriptor';

import {common_base__FGBuildableFrackingExtractor__type} from '../classes/CoreUObject/FGBuildableFrackingExtractor';

import {common_base__FGBuildableFrackingActivator__type} from '../classes/CoreUObject/FGBuildableFrackingActivator';

import {common_base__FGBuildableRailroadSignal__type} from '../classes/CoreUObject/FGBuildableRailroadSignal';

import {common_base__FGBuildableTrainPlatform__base__type} from '../classes/CoreUObject/FGBuildableTrainPlatform';

import {
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type,
	common_base__FGBuildableTrainPlatformCargo__type,
} from '../classes/CoreUObject/FGBuildableTrainPlatformCargo';

import {common_base__FGBuildableRailroadStation__type} from '../classes/CoreUObject/FGBuildableRailroadStation';

import {common_base__FGBuildableStorage__type} from '../classes/CoreUObject/FGBuildableStorage';

import {common_base__FGPipeHyperStart__type} from '../classes/CoreUObject/FGPipeHyperStart';

import {common_base__FGBuildablePipeHyper__type} from '../classes/CoreUObject/FGBuildablePipeHyper';

import {common_base__FGBuildablePowerStorage__type} from '../classes/CoreUObject/FGBuildablePowerStorage';

import {common_base__FGBuildableDockingStation__type} from '../classes/CoreUObject/FGBuildableDockingStation';

import {common_base__FGBuildableJumppad__type} from '../classes/CoreUObject/FGBuildableJumppad';

import {common_base__FGBuildableAttachmentMerger__type} from '../classes/CoreUObject/FGBuildableAttachmentMerger';

import {common_base__FGBuildableAttachmentSplitter__type} from '../classes/CoreUObject/FGBuildableAttachmentSplitter';

import {common_base__FGBuildableSplitterSmart__type} from '../classes/CoreUObject/FGBuildableSplitterSmart';

import {
	common_base__FGBuildableFoundation__base__type,
	common_base__FGBuildableFoundation__type,
} from '../classes/CoreUObject/FGBuildableFoundation';

import {common_base__FGBuildableRamp__type} from '../classes/CoreUObject/FGBuildableRamp';

import {
	common_base__FGAmmoTypeProjectile__base__type,
	common_base__FGAmmoTypeProjectile__type,
} from '../classes/CoreUObject/FGAmmoTypeProjectile';

import {common_base__FGAmmoTypeSpreadshot__type} from '../classes/CoreUObject/FGAmmoTypeSpreadshot';

import {
	common_base__FGAmmoTypeInstantHit__base__type,
	common_base__FGAmmoTypeInstantHit__chaos__type,
	common_base__FGAmmoTypeInstantHit__standard__type,
} from '../classes/CoreUObject/FGAmmoTypeInstantHit';

import {
	common_base__FGWeapon__base__type,
	common_base__FGWeapon__gun_base__type,
	common_base__FGWeapon__rebar_gun__type,
	common_base__FGWeapon__rifle__type,
} from '../classes/CoreUObject/FGWeapon';

import {common_base__FGChargedWeapon__type} from '../classes/CoreUObject/FGChargedWeapon';

import {common_base__FGBuildablePriorityPowerSwitch__type} from '../classes/CoreUObject/FGBuildablePriorityPowerSwitch';

import {common_base__FGBuildableCircuitSwitch__type} from '../classes/CoreUObject/FGBuildableCircuitSwitch';

import {common_base__FGBuildableRadarTower__type} from '../classes/CoreUObject/FGBuildableRadarTower';

import {common_base__FGBuildableSnowDispenser__type} from '../classes/CoreUObject/FGBuildableSnowDispenser';

import {common_base__FGBuildableFactorySimpleProducer__type} from '../classes/CoreUObject/FGBuildableFactorySimpleProducer';

import {common_base__FGBuildableLadder__type} from '../classes/CoreUObject/FGBuildableLadder';

import {common_base__FGGolfCartDispenser__type} from '../classes/CoreUObject/FGGolfCartDispenser';

import {common_base__FGBuildablePassthrough__type} from '../classes/CoreUObject/FGBuildablePassthrough';

import {common_base__FGBuildableLightsControlPanel__type} from '../classes/CoreUObject/FGBuildableLightsControlPanel';

import {
	common_base__FGBuildableLightSource__base__type,
	common_base__FGBuildableLightSource__type,
} from '../classes/CoreUObject/FGBuildableLightSource';

import {common_base__FGBuildableFloodlight__type} from '../classes/CoreUObject/FGBuildableFloodlight';

import {common_base__FGBuildableWidgetSign__type} from '../classes/CoreUObject/FGBuildableWidgetSign';

import {common_base__FGBuildableBeamLightweight__type} from '../classes/CoreUObject/FGBuildableBeamLightweight';

import {common_base__FGBuildableFactoryBuilding__type} from '../classes/CoreUObject/FGBuildableFactoryBuilding';

import {common_base__FGBuildableSpaceElevator__type} from '../classes/CoreUObject/FGBuildableSpaceElevator';

import {
	FGSchematic__mUnlocks_mSchematics__mSchematics__type,
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type,
	common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type,
	common_base__FGSchematic__mUnlocks_Class__type,
	common_base__FGSchematic__with_unlocks__type,
	common_base__FGSchematic__base__type,
	FGSchematic__mUnlocks_mTapeUnlocks__type,
	FGSchematic__mUnlocks_mRecipes__type,
	FGSchematic__mUnlocks_resources_to_scan__type,
	FGSchematic__mUnlocks_mEmotes__type,
	FGSchematic__mUnlocks_mSchematics__type,
	FGSchematic__mUnlocks_inventory_slots__type,
	FGSchematic__mUnlocks_equipment_slots__type,
	FGSchematic__mUnlocks_mScannableObjects__type,
	FGSchematic__mUnlocks_mItemsToGive__type,
} from '../classes/CoreUObject/FGSchematic';

import {
	common_base__FGEquipmentStunSpear__base__type,
	common_base__FGEquipmentStunSpear__type,
	common_base__FGEquipmentStunSpear__xeno_zapper__type,
} from '../classes/CoreUObject/FGEquipmentStunSpear';

import {common_base__FGHoverPack__type} from '../classes/CoreUObject/FGHoverPack';

import {common_base__FGJetPack__type} from '../classes/CoreUObject/FGJetPack';

import {common_base__FGSuitBase__type} from '../classes/CoreUObject/FGSuitBase';

import {common_base__FGGasMask__type} from '../classes/CoreUObject/FGGasMask';

import {common_base__FGChainsaw__type} from '../classes/CoreUObject/FGChainsaw';

import {common_base__FGObjectScanner__type} from '../classes/CoreUObject/FGObjectScanner';

import {common_base__FGJumpingStilts__type} from '../classes/CoreUObject/FGJumpingStilts';

import {common_base__FGEquipmentZipline__type} from '../classes/CoreUObject/FGEquipmentZipline';

import {common_base__FGParachute__type} from '../classes/CoreUObject/FGParachute';

import {
	boolean__type,
	boolean_extended__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
	integer_string__signed__type,
} from './scalar';

import {common_base__FGBuildablePipelineJunction__type} from '../classes/CoreUObject/FGBuildablePipelineJunction';

import {
	common_base__FGBuildablePipelinePump__type,
	common_base__FGBuildablePipelinePump__valve__type,
} from '../classes/CoreUObject/FGBuildablePipelinePump';

import {common_base__FGBuildablePipeReservoir__type} from '../classes/CoreUObject/FGBuildablePipeReservoir';

import {common_base__FGBuildablePoleLightweight__type} from '../classes/CoreUObject/FGBuildablePoleLightweight';

import {
	common_base__FGItemDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from '../classes/CoreUObject/FGItemDescriptor';

import {common_base__FGResourceDescriptor__type} from '../classes/CoreUObject/FGResourceDescriptor';

import {common_base__FGRecipe__type} from '../classes/CoreUObject/FGRecipe';

import {
	common_base__FGBuildableWall__base__type,
	common_base__FGBuildableWall__base__rectangle__type,
} from '../classes/CoreUObject/FGBuildableWall';

import {common_base__FGBuildableCornerWall__type} from '../classes/CoreUObject/FGBuildableCornerWall';

import {
	common_base__FGBuildableDoor__base__type,
	common_base__FGBuildableDoor__type,
	common_base__FGBuildableDoor__automated__type,
} from '../classes/CoreUObject/FGBuildableDoor';

import {
	common_base__FGBuildableConveyorBelt__base__type,
	common_base__FGBuildableConveyorBelt__type,
} from '../classes/CoreUObject/FGBuildableConveyorBelt';

import {common_base__FGBuildableConveyorLift__type} from '../classes/CoreUObject/FGBuildableConveyorLift';

import {common_base__FGPoleDescriptor__type} from '../classes/CoreUObject/FGPoleDescriptor';

import {
	common_base__FGEquipmentDescriptor__base__type,
	common_base__FGEquipmentDescriptor__type,
} from '../classes/CoreUObject/FGEquipmentDescriptor';

import {
	common_base__FGConsumableDescriptor__base__type,
	common_base__FGConsumableDescriptor__type,
	common_base__FGConsumableDescriptor__healing__type,
} from '../classes/CoreUObject/FGConsumableDescriptor';

export type class__type = class__no_description__type & {
	mDescription: string;
};

export type class__no_description__type =
	class__no_description_or_display_name__type & {
		mDisplayName: string;
	};

export type class__no_description_or_display_name__type = {
	ClassName: Exclude<string, ''>;
};

export type color__type = {
	B: integer_string__type;
	G: integer_string__type;
	R: integer_string__type;
	A: integer_string__type;
};

export type color_decimal__type = {
	R: decimal_string__type;
	G: decimal_string__type;
	B: decimal_string__type;
	A: decimal_string__type;
};

export type common_base__EditorCurveData__type = {
	EditorCurveData: common_base__EditorCurveData__EditorCurveData__type;
	ExternalCurve?: common_base__EditorCurveData__ExternalCurve__type;
};

export type common_base__EditorCurveData__EditorCurveData__type = {
	DefaultValue: decimal_string__type;
	PreInfinityExtrap: InfinityExtrap__type;
	PostInfinityExtrap: InfinityExtrap__type;
};

export type common_base__EditorCurveData__ExternalCurve__type =
	UnrealEngineString<
		'/Script/Engine.CurveFloat',
		| '/Game/FactoryGame/Resource/Parts/SpikedRebar/SpikedRebar_Falloff.SpikedRebar_Falloff'
		| '/Game/FactoryGame/Resource/Parts/CartridgeStandard/LinearDamageFalloff.LinearDamageFalloff'
	>;

export type common_base__FGAmmoTypeInstantHit__base__pre_1_1__type =
	common_base__FGAmmoTypeProjectile__base__pre_1_1__type & {
		mPlayFireEffects: boolean__type;
	};

export type common_base__FGAmmoTypeInstantHit__chaos__pre_1_1__type =
	common_base__FGAmmoTypeInstantHit__base__pre_1_1__type & {
		ClassName: 'Desc_CartridgeChaos_C';
		Location: xyz__type;
		Trail_Velocity: decimal_string__type;
	};

export type common_base__FGAmmoTypeInstantHit__standard__pre_1_1__type =
	common_base__FGAmmoTypeInstantHit__base__pre_1_1__type & {
		ClassName: 'Desc_CartridgeStandard_C';
	};

export type common_base__FGAmmoTypeProjectile__base__pre_1_1__type =
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
		mMuzzleFlashScale: xyz__type;
		mAmmoColor: color_decimal__type;
		mAmmoScale: decimal_string__type;
		mAmmoTickFunction: {
			bAllowTickOnDedicatedServer: boolean__type;
		};
	};

export type common_base__FGAmmoTypeProjectile__pre_1_1__type = {
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

export type common_base__FGAmmoTypeSpreadshot__pre_1_1__type = {
	SpreadTrail_Velocity: decimal_string__type;
	mNumShots: {
		Min: integer_string__type;
		Max: integer_string__type;
	};
	mSpreadAngleDegrees: decimal_string__type;
};

export type common_base__FGBuildable__pole__base__no_static__pre_1_1__type =
	common_base__FGBuildable__base__type & {
		mStackHeight: decimal_string__type;
	};

export type common_base__FGBuildablePipeline__pre_1_1__type =
	common_base__FGBuildable__base__type & {
		mMeshLength: decimal_string__type;
		mSplineData: '';
		mRadius: decimal_string__type;
		mFlowLimit: decimal_string__type;
		mFlowIndicatorMinimumPipeLength: decimal_string__type;
		mPipeConnections: '';
		mFluidBox: empty_object__type;
		mMaxIndicatorTurnAngle: decimal_string__type;
		mIgnoreActorsForIndicator: '';
		mFluidNames: [
			{
				WwiseSafeName: StringPassedRegExp<'^[A-Z][A-Za-z]+(_[A-Z][A-Za-z]+)*$'>;
				ActualName?: StringPassedRegExp<'^[A-Z][A-Za-z]+( [A-Z][A-Za-z]+)*$'>;
			},
			...{
				WwiseSafeName: StringPassedRegExp<'^[A-Z][A-Za-z]+(_[A-Z][A-Za-z]+)*$'>;
				ActualName?: StringPassedRegExp<'^[A-Z][A-Za-z]+( [A-Z][A-Za-z]+)*$'>;
			}[],
		];
		mCurrentFluid: '';
		mLastContentForSound: decimal_string__type;
		mLastFlowForSound: decimal_string__type;
		mRattleLimit: decimal_string__type;
		mIsRattling: boolean__type;
		mUpdateSoundsHandle: empty_object__type;
		mSnappedPassthroughs: common_base__mSnappedPassthroughs__type;
	};

export type common_base__FGBuildableResourceExtractor__miner_mk3__type =
	common_base__FGBuildableResourceExtractor__miner__base__type & {
		mInternalMiningState_0: 'NewEnumerator0';
		mToggleMiningStateHandle_0: empty_object__type;
		mMinimumDrillTime_0: decimal_string__type;
		mMaximumDrillTime_0: decimal_string__type;
	};

export type common_base__FGPipeHyperStart__pre_1_1__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mWindDirectionFromTurbine: empty_object__type;
		['mIsWindSoundPlaying?']: boolean__type;
		mAudioTimerCounter: decimal_string__type;
		AudioCounterTimer: empty_object__type;
		IsEnginePlaying: boolean__type;
		mOpeningOffset: decimal_string__type;
		mInitialMinSpeedFactor: decimal_string__type;
	};

export type common_base__FGWeapon__base__pre_1_1__type =
	common_base__FGEquipment__base__type & {
		mOnWeaponStateChanged: empty_object__type;
		mWeaponState: common_base__weaponState__type;
		mAutomaticallyReload: boolean__type;
		mAutoReloadDelay: decimal_string__type;
		mAutoReloadTimerHandle: empty_object__type;
		mCurrentAmmoCount: integer_string__type;
		mAllowedAmmoClasses: UnrealEngineString__array__type;
		mAttachMagazineToPlayer: boolean__type;
		mMuzzleSocketName: 'muzzleSocket' | 'MuzzleSocket' | 'None';
		mCurrentMagazineBoneName: 'CurrentMagazine' | 'hand_rSocket';
		mEjectMagazineBoneName: 'EjectMagazine' | 'hand_rSocket';
		mDispersionOnNoMagazine: decimal_string__type;
		mWeaponDamageMultiplier: decimal_string__type;
		mFiringBlocksDispersionReduction: boolean__type;
		mCurrentDispersion: decimal_string__type;
		mReloadTime: decimal_string__type;
		mAmmoSwitchUsedRadialMenu: boolean__type;
		mOnAmmoCyclingPressed: empty_object__type;
		mOnAmmoCyclingReleased: empty_object__type;
		mBlockSprintWhenFiring: boolean__type;
	};

export type common_base__MaterialSlotName__type =
	| 'uv_checker_material_uv_grid_1024x1024'
	| 'lambert1'
	| 'lambert10'
	| 'lambert9_001'
	| 'lambert2'
	| 'Material_002'
	| 'Material_003'
	| 'Rocket1'
	| 'Rocket2'
	| 'Rifle'
	| '01 - Default';

export type common_base__mChainsawState__type = None__type;

export type common_base__mDisableSnapOn__type =
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Bottom: boolean__type;
	}
	| {
			Top: boolean__type;
	}
	| {
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Left: boolean__type;
	}
	| {
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Right: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
	}
	| {
			Right: boolean__type;
			Top: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
	}
	| {
			Front: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	};

export type common_base__mLightControlData__type = {
	Intensity: decimal_string__type;
};

export type common_base__mSnappedPassthroughs__type = '';

export type common_base__weaponState__type = 'EWS_Unequipped';

export type empty_object__type = '()';

export type faux_1__type = class__type & {
	faux:
		| UnrealEngineString__array__type
		| decimal_string__type
		| decimal_string__signed__type
		| integer_string__type
		| integer_string__signed__type
		| color__type
		| color_decimal__type
		| empty_object__type
		| None__type
		| xyz__type
		| xy__type
		| xy__integer__type
		| quaternion__type
		| pitch_yaw_roll__type
		| xyz__integer__type
		| xyz_array__type
		| transformation__type
		| common_base__FGSchematic__base__type;
};

export type faux_10__type = class__type & {
	faux: 'FGBuildingDescriptor--properties';
	ClassName?: common_base__FGBuildingDescriptor__ClassName__type;
	mForm: common_base__FGBuildingDescriptor__mForm__type;
	mSubCategories: common_base__FGBuildingDescriptor__mSubCategories__type;
};

export type faux_10b__type = class__type & {
	faux: 'FGBuildingDescriptor';
	FGBuildingDescriptor: common_base__FGBuildingDescriptor__type;
};

export type faux_11__type = class__type & {
	faux: 'FGBuildable--base';
	FGBuildable_base?: common_base__FGBuildable__base__type;
	FGBuildable_consumes_power_base?: common_base__FGBuildable__consumes_power_base__type;
	FGBuildable_docking_station_base?: common_base__FGBuildable__docking_station_base__type;
	FGBuildableDroneStation?: common_base__FGBuildableDroneStation__type;
	FGBuildableBlueprintDesigner?: common_base__FGBuildableBlueprintDesigner__type;
	FGBuildableFactory_jump_pad?: common_base__FGBuildableFactory__jump_pad__type;
	FGBuildableFactory_landing_pad?: common_base__FGBuildableFactory__landing_pad__type;
	FGBuildable_occupied?: common_base__FGBuildable__occupied__type;
	FGBuildable_tiered?: common_base__FGBuildable__tiered__type;
	FGBuildableMAM?: common_base__FGBuildableMAM__type;
	FGBuildableRailroadTrack?: common_base__FGBuildableRailroadTrack__type;
	FGBuildableWire?: common_base__FGBuildableWire__type;
	FGBuildablePowerPole?: common_base__FGBuildablePowerPole__type;
	FGBuildableTradingPost?: common_base__FGBuildableTradingPost__type;
	FGBuildablePillarLightweight?: common_base__FGBuildablePillarLightweight__type;
	FGBuildableFactory_generic?: common_base__FGBuildableFactory__generic__type;
	FGBuildableWalkway_base?: common_base__FGBuildableWalkway__base__type;
	mDisableSnapOn?: common_base__mDisableSnapOn__type;
	FGBuildableWalkwayLightweight?: common_base__FGBuildableWalkwayLightweight__type;
	FGBuildableWalkway?: common_base__FGBuildableWalkway__type;
	FGBuildableGenerator_base?: common_base__FGBuildableGenerator__base__type;
	FGBuildableGeneratorFuel_base?: common_base__FGBuildableGeneratorFuel__base__type;
	FGBuildableGeneratorFuel_solid?: common_base__FGBuildableGeneratorFuel__solid__type;
	FGBuildableGeneratorFuel_liquid?: common_base__FGBuildableGeneratorFuel__liquid__type;
	FGBuildableGeneratorFuel_biogen?: common_base__FGBuildableGeneratorFuel__biogen__type;
	FGBuildableGeneratorGeoThermal?: common_base__FGBuildableGeneratorGeoThermal__type;
	FGBuildableGeneratorNuclear_mFuel_base?: common_base__FGBuildableGeneratorNuclear__mFuel__base__type;
	FGBuildableGeneratorNuclear_mFuel_NuclearFuelRod?: common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type;
	FGBuildableGeneratorNuclear_mFuel_PlutoniumFuelRod?: common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type;
	FGBuildableGeneratorNuclear?: common_base__FGBuildableGeneratorNuclear__type;
	FGBuildablePipeline?: common_base__FGBuildablePipeline__type;
	FGBuildable_extractor_base_shared?: common_base__FGBuildable__extractor_base__shared__type;
	FGBuildable_extractor_base?: common_base__FGBuildable__extractor_base__type;
	FGBuildableWaterPump?: common_base__FGBuildableWaterPump__type;
	FGBuildableResourceSink?: common_base__FGBuildableResourceSink__type;
	FGBuildableResourceSinkShop?: common_base__FGBuildableResourceSinkShop__type;
	FGItemDescriptorBiomass?: common_base__FGItemDescriptorBiomass__type;
	FGBuildableResourceExtractor_oil_extractor?: common_base__FGBuildableResourceExtractor__oil_extractor__type;
	FGBuildableResourceExtractor_miner_base?: common_base__FGBuildableResourceExtractor__miner__base__type;
	FGBuildableResourceExtractor_miner?: common_base__FGBuildableResourceExtractor__miner__type;
	FGBuildableResourceExtractor_miner_mk3?: common_base__FGBuildableResourceExtractor__miner_mk3__type;
	FGBuildableManufacturer_base?: common_base__FGBuildableManufacturer__base__type;
	FGBuildableManufacturer?: common_base__FGBuildableManufacturer__type;
	FGBuildableManufacturer_packager?: common_base__FGBuildableManufacturer__packager__type;
	FGBuildableManufacturer_blender?: common_base__FGBuildableManufacturer__blender__type;
	FGBuildableManufacturer_smelter?: common_base__FGBuildableManufacturer__smelter__type;
	FGBuildableManufacturer_constructor?: common_base__FGBuildableManufacturer__constructor__type;
	FGBuildableManufacturerVariablePower_base?: common_base__FGBuildableManufacturerVariablePower__base__type;
	FGBuildableManufacturerVariablePower_HadronCollider?: common_base__FGBuildableManufacturerVariablePower__HadronCollider__type;
	FGEquipment_placeable?: common_base__FGEquipment__placeable__type;
	FGPortableMinerDispenser?: common_base__FGPortableMinerDispenser__type;
	FGItemDescriptorNuclearFuel_waste?: common_base__FGItemDescriptorNuclearFuel__waste__type;
	FGItemDescriptorNuclearFuel?: common_base__FGItemDescriptorNuclearFuel__type;
	FGVehicleDescriptor_powered_no_inventory?: common_base__FGVehicleDescriptor__powered_no_inventory__type;
	FGVehicleDescriptor_with_inventory?: common_base__FGVehicleDescriptor__with_inventory__type;
	FGVehicleDescriptor_fueled_with_inventory?: common_base__FGVehicleDescriptor__fueled_with_inventory__type;
	FGBuildableFrackingExtractor?: common_base__FGBuildableFrackingExtractor__type;
	FGBuildableFrackingActivator?: common_base__FGBuildableFrackingActivator__type;
	FGBuildableRailroadSignal?: common_base__FGBuildableRailroadSignal__type;
	FGBuildableTrainPlatform_base?: common_base__FGBuildableTrainPlatform__base__type;
	FGBuildableTrainPlatformCargo_FGBuildableRailroadStation?: common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type;
	FGBuildableTrainPlatformCargo?: common_base__FGBuildableTrainPlatformCargo__type;
	FGBuildableRailroadStation?: common_base__FGBuildableRailroadStation__type;
	FGBuildableStorage?: common_base__FGBuildableStorage__type;
	FGPipeHyperStart?: common_base__FGPipeHyperStart__type;
	FGBuildablePipeHyper?: common_base__FGBuildablePipeHyper__type;
	FGBuildablePowerStorage?: common_base__FGBuildablePowerStorage__type;
	FGBuildableDockingStation?: common_base__FGBuildableDockingStation__type;
	FGBuildableJumppad?: common_base__FGBuildableJumppad__type;
	FGBuildableAttachmentMerger?: common_base__FGBuildableAttachmentMerger__type;
	FGBuildable_splitter_base?: common_base__FGBuildable__splitter__base__type;
	FGBuildableAttachmentSplitter?: common_base__FGBuildableAttachmentSplitter__type;
	FGBuildableSplitterSmart?: common_base__FGBuildableSplitterSmart__type;
	FGBuildableFoundation_base?: common_base__FGBuildableFoundation__base__type;
	FGBuildableFoundation?: common_base__FGBuildableFoundation__type;
	FGBuildableRamp?: common_base__FGBuildableRamp__type;
	MaterialSlotName?: common_base__MaterialSlotName__type;
	EditorCurveData?: common_base__EditorCurveData__type;
	FGAmmoTypeProjectile_base?: common_base__FGAmmoTypeProjectile__base__type;
	FGAmmoTypeProjectile?: common_base__FGAmmoTypeProjectile__type;
	FGAmmoTypeSpreadshot?: common_base__FGAmmoTypeSpreadshot__type;
	FGAmmoTypeInstantHit_base?: common_base__FGAmmoTypeInstantHit__base__type;
	FGAmmoTypeInstantHit_chaos?: common_base__FGAmmoTypeInstantHit__chaos__type;
	FGAmmoTypeInstantHit_standard?: common_base__FGAmmoTypeInstantHit__standard__type;
	weaponState?: common_base__weaponState__type;
	FGWeapon_base?: common_base__FGWeapon__base__type;
	FGWeapon_gun_base?: common_base__FGWeapon__gun_base__type;
	FGWeapon_rebar_gun?: common_base__FGWeapon__rebar_gun__type;
	FGWeapon_rifle?: common_base__FGWeapon__rifle__type;
	FGChargedWeapon?: common_base__FGChargedWeapon__type;
	FGBuildable_circuits_base?: common_base__FGBuildable__circuits_base__type;
	FGBuildable_power_switch_base?: common_base__FGBuildable__power_switch__base__type;
	FGBuildablePriorityPowerSwitch?: common_base__FGBuildablePriorityPowerSwitch__type;
	FGBuildableCircuitSwitch?: common_base__FGBuildableCircuitSwitch__type;
	FGBuildableRadarTower?: common_base__FGBuildableRadarTower__type;
	FGBuildableSnowDispenser?: common_base__FGBuildableSnowDispenser__type;
	FGBuildableFactorySimpleProducer?: common_base__FGBuildableFactorySimpleProducer__type;
	FGBuildableLadder?: common_base__FGBuildableLadder__type;
	FGGolfCartDispenser?: common_base__FGGolfCartDispenser__type;
	FGBuildablePassthrough?: common_base__FGBuildablePassthrough__type;
	mLightControlData?: common_base__mLightControlData__type;
	FGBuildableLightsControlPanel?: common_base__FGBuildableLightsControlPanel__type;
	FGBuildableLightSource_base?: common_base__FGBuildableLightSource__base__type;
	FGBuildableLightSource?: common_base__FGBuildableLightSource__type;
	FGBuildableFloodlight?: common_base__FGBuildableFloodlight__type;
	FGBuildableWidgetSign?: common_base__FGBuildableWidgetSign__type;
	FGBuildableBeamLightweight?: common_base__FGBuildableBeamLightweight__type;
	FGBuildableFactoryBuilding?: common_base__FGBuildableFactoryBuilding__type;
	FGBuildableSpaceElevator?: common_base__FGBuildableSpaceElevator__type;
};

export type faux_12__type = class__type & {
	faux: 'mEventType--optional-csv';
	mEventType__optional_csv?: mEventType__optional_csv__type;
};

export type faux_13__type = class__type & {
	faux: 'FGSchematic--mUnlocks_mSchematics--mSchematics';
	FGSchematic__mUnlocks_mSchematics__mSchematics: FGSchematic__mUnlocks_mSchematics__mSchematics__type;
};

export type faux_14__type = class__type & {
	faux: 'common-base--FGSchematic--mUnlocks';
	common_base__FGSchematic__mUnlocks: common_base__FGSchematic__mUnlocks__type;
	optional?:
		| FGSchematic__mUnlocks_mTapeUnlocks__type
		| FGSchematic__mUnlocks_mRecipes__type
		| FGSchematic__mUnlocks_resources_to_scan__type
		| FGSchematic__mUnlocks_mEmotes__type
		| FGSchematic__mUnlocks_mSchematics__type
		| FGSchematic__mUnlocks_inventory_slots__type
		| FGSchematic__mUnlocks_equipment_slots__type
		| FGSchematic__mUnlocks_mScannableObjects__type
		| FGSchematic__mUnlocks_mItemsToGive__type;
	optional2?: common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type;
	optional3?: common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type;
};

export type faux_15__type = class__type & {
	faux: 'common-base--FGEquipment--base';
	FGSchematic__mUnlocks_mSchematics__mSchematics?: common_base__FGEquipment__base__type;
	FGEquipmentStunSpear_base?: common_base__FGEquipmentStunSpear__base__type;
	FGEquipmentStunSpear?: common_base__FGEquipmentStunSpear__type;
	FGEquipmentStunSpear_xeno_zapper?: common_base__FGEquipmentStunSpear__xeno_zapper__type;
	hoverpack?: common_base__FGHoverPack__type;
	jetpack?: common_base__FGJetPack__type;
	suit?: common_base__FGSuitBase__type;
	mask?: common_base__FGGasMask__type;
	chainsaw?: common_base__FGChainsaw__type;
	chainsaw_state?: common_base__mChainsawState__type;
	object_scanner?: common_base__FGObjectScanner__type;
	jumping_stilts?: common_base__FGJumpingStilts__type;
	zipline?: common_base__FGEquipmentZipline__type;
	parachute?: common_base__FGParachute__type;
};

export type faux_16__type = class__type & {
	faux: 'faux-16';
	mAspect?: mAspect__type;
	mPlatformDockingStatus?: mPlatformDockingStatus__type;
	mDockingRuleSet?: mDockingRuleSet__type;
	mBatteryStatus?: mBatteryStatus__type;
	InfinityExtrap?: InfinityExtrap__type;
	mDamageTypes?: mDamageTypes__type;
};

export type faux_2__type = class__type & {
	faux_bool: boolean__type;
};

export type faux_26__type = class__type & {
	faux?: 'pipeline-stuff';
	ref: common_base__FGBuildable__pipeline_accessory__base__type;
	accessory?: common_base__FGBuildable__pipeline_accessory__type;
	junction?: common_base__FGBuildablePipelineJunction__type;
	flow_accessory?: common_base__FGBuildable__pipeline_flow_accessory__type;
	pump?: common_base__FGBuildablePipelinePump__type;
	valve?: common_base__FGBuildablePipelinePump__valve__type;
	reservoir?: common_base__FGBuildablePipeReservoir__type;
};

export type faux_27__type = class__type & {
	faux: 'pole-stuff';
	base_no_static: common_base__FGBuildable__pole__base__no_static__type;
	base_with_static: common_base__FGBuildable__pole__base__with_static__type;
	lightweight: common_base__FGBuildablePoleLightweight__type;
};

export type faux_28__type = class__type & {
	faux?: 'FGItemDescriptor--FGResourceDescriptor';
	ref: common_base__FGItemDescriptor__FGResourceDescriptor__type;
	resource_descriptor?: common_base__FGResourceDescriptor__type;
};

export type faux_29__type = class__type & {
	faux?: 'FGRecipe';
	ref: common_base__FGRecipe__type;
};

export type faux_3__type = class__type & {
	faux_bool_extended: boolean_extended__type;
};

export type faux_31__type = class__type & {
	faux?: 'FGSchematic--mUnlocks_Class';
	ref: common_base__FGSchematic__mUnlocks_Class__type;
	schematic_with_unlocks?: common_base__FGSchematic__with_unlocks__type;
};

export type faux_32__type = class__type & {
	faux?: 'FGBuildableWall--base';
	base: common_base__FGBuildableWall__base__type;
	rectangle?: common_base__FGBuildableWall__base__rectangle__type;
	corner?: common_base__FGBuildableCornerWall__type;
	door_base?: common_base__FGBuildableDoor__base__type;
	door?: common_base__FGBuildableDoor__type;
	door_autoamted?: common_base__FGBuildableDoor__automated__type;
};

export type faux_34__type = class__type & {
	faux?: 'FGBuildableConveyorBelt';
	base: common_base__FGBuildableConveyorBelt__base__type;
	belt?: common_base__FGBuildableConveyorBelt__type;
	lift?: common_base__FGBuildableConveyorLift__type;
};

export type faux_4__type = class__type & {
	faux_texture: Texture2D__type;
};

export type faux_5__type = class__type & {
	faux_none: None__type;
};

export type faux_6__type = class__type & {
	mForm: mForm__type;
};

export type faux_7__type = class__type & {
	ItemClass_opt: ItemClass__type;
};

export type faux_8__type = class__type & {
	ItemClass: ItemClass__amount_required__type;
};

export type faux_9__type = class__type & {
	faux: 'FGItemDescriptor--FGResourceDescriptor--FGPoleDescriptor--mSubCategories';
	mSubCategories: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type;
};

export type faux_9b__type = class__type & {
	faux: 'stashing all the remaining descriptors here';
	FGItemDescriptor_FGResourceDescriptor_FGPoleDescriptor?: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;
	FGPoleDescriptor?: common_base__FGPoleDescriptor__type;
	FGEquipmentDescriptor_base?: common_base__FGEquipmentDescriptor__base__type;
	FGEquipmentDescriptor?: common_base__FGEquipmentDescriptor__type;
	FGConsumableDescriptor_base?: common_base__FGConsumableDescriptor__base__type;
	FGConsumableDescriptor?: common_base__FGConsumableDescriptor__type;
	FGConsumableDescriptor_healing?: common_base__FGConsumableDescriptor__healing__type;
};

export type InfinityExtrap__type = 'RCCE_Constant';

export type ItemClass__type = [
	{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	}[],
];

export type ItemClass__amount_required__type = [
	{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	}[],
];

export type mAspect__type = 'RSA_None';

export type mBatteryStatus__type = 'BS_Idle';

export type mDamageTypes__type = [
	UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>,
	...UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>[],
];

export type mDockingRuleSet__type = {
	DockForDuration: decimal_string__type;
};

export type mEventType__type = 'EV_Christmas';

export type mEventType__optional_csv__type =
	| ''
	| [mEventType__type, ...mEventType__type[]];

export type mForm__type = 'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_INVALID';

export type mPlatformDockingStatus__type = 'ETPDS_None';

export type NativeClass__type = {
	NativeClass: UnrealEngineString<
		'/Script/CoreUObject.Class',
		StringStartsWith<'/Script/FactoryGame.FG'>
	>;
};

export type None__type = 'None';

export type pitch_yaw_roll__type = {
	Pitch: decimal_string__signed__type;
	Yaw: decimal_string__signed__type;
	Roll: decimal_string__signed__type;
};

export type quaternion__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
	W: decimal_string__type;
};

export type SpecifiedColor__type = {
	SpecifiedColor: color_decimal__type;
};

export type Texture2D__type =
	| StringStartsWith<'Texture2D /Game/FactoryGame/'>
	| None__type
	| UnrealEngineString<'/Script/Engine.Texture2D'>;

export type transformation__type = {
	Rotation: quaternion__type;
	Translation: xyz__type;
	Scale3D: xyz__type;
};

export type UnrealEngineString__array__type = [
	UnrealEngineString,
	...UnrealEngineString[],
];

export type xy__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
};

export type xy__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
};

export type xyz__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
};

export type xyz__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
	Z: integer_string__type;
};

export type xyz_array__type = [
	{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	},
	...{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	}[],
];
