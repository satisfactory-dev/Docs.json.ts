import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {FGBuildableBlueprintDesigner__base__type} from '../classes/CoreUObject/FGBuildableBlueprintDesigner';

import {FGBuildableResourceExtractor__miner__base__type} from '../classes/CoreUObject/FGBuildableResourceExtractor';

import {
	xyz__type,
	quaternion__type,
	empty_object__type,
	common_base__FGBuildableResourceExtractor__miner_mk3__type,
} from '../../common/common/unassigned';

import {
	boolean__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from '../../common/classes/CoreUObject/FGBuildable';

import {common_base__FGBuildableDroneStation__type} from '../../common/classes/CoreUObject/FGBuildableDroneStation';

import {common_base__FGBuildableTradingPost__type} from '../../common/classes/CoreUObject/FGBuildableTradingPost';

export type CameraAnim__type = UnrealEngineString<
	'/Script/TemplateSequence.CameraAnimationSequence',
	StringStartsWith<'/Game/FactoryGame/Character/Player/CameraShake/'>
>;

export type FGBuildable__consumes_power_base__version_1__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mAlienOverClockingParticleEffects: '';
		mProductionBoostPowerConsumptionExponent: decimal_string__type;
		mOnPendingPotentialChanged: empty_object__type;
		mOnPendingProductionBoostChanged: empty_object__type;
		mOnCurrentProductivityChanged: empty_object__type;
		mCanChangeProductionBoost: boolean__type;
		mBaseProductionBoost: decimal_string__type;
		mPotentialShardSlots: integer_string__type;
		mProductionShardSlotSize: integer_string__type;
		mProductionShardBoostMultiplier: decimal_string__type;
		mHasInventoryPotential: boolean__type;
		mIsTickRateManaged: boolean__type;
		mOverridePotentialShardSlots: boolean__type;
		mOverrideProductionShardSlotSize: boolean__type;
	};

export type FGBuildableBlueprintDesigner__mk1__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_C';
		mDisplayName: 'Blueprint Designer Mk.1';
	};

export type FGBuildableBlueprintDesigner__mk2__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_MK2_C';
		mDisplayName: 'Blueprint Designer Mk.2';
	};

export type FGBuildableBlueprintDesigner__mk3__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_Mk3_C';
		mDisplayName: 'Blueprint Designer Mk.3';
	};

export type FGBuildableDroneStation__version_1__type =
	common_base__FGBuildableDroneStation__type & {
		mFuelStorageSizeX: integer_string__type;
		mFuelStorageSizeY: integer_string__type;
	};

export type FGBuildableResourceExtractor__miner_mk1__type =
	FGBuildableResourceExtractor__miner__base__type & {
		InternalStartUpTimer: decimal_string__type;
	};

export type FGBuildableResourceExtractor__miner_mk3__type =
	FGBuildableResourceExtractor__miner_mk3__merged__type;

export type FGBuildableResourceExtractor__miner_mk3__merged__type =
	common_base__FGBuildableResourceExtractor__miner_mk3__type &
		FGBuildableResourceExtractor__miner__base__type;

export type FGBuildableTradingPost__version_1__type =
	common_base__FGBuildableTradingPost__type & {
		mWorkBenchOccupied: 'Crafting Bench occupied';
		mWorkBenchFree: 'Use Crafting Bench';
		Meshes?: [
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
		];
		mMamFreeText?: 'Use the MAM';
		mMamOccupiedText?: 'The MAM is occupied';
		mMeshes: [
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
		];
		mStages: [
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			...(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			)[],
		];
		mLadderVisibilityLevel: integer_string__type;
		mLockerVisibilityLevel: integer_string__type;
		mMiniGameAndCalendarVisibilityLevel: integer_string__type;
	};

export type FilterMontageTag__type =
	| 'HasAmmunition'
	| 'EquipmentInHand_None'
	| 'EquipmentInHand_TwoHanded';

export type FilterMontageTag__charged__type =
	| 'LowCharged'
	| 'MediumCharged'
	| 'FullyCharged';

export type mClearanceData__type =
	| ''
	| [
			{
				Type?: 'CT_Soft';
				ClearanceBox: {
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				};
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			},
			...{
				Type?: 'CT_Soft';
				ClearanceBox: {
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				};
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			}[],
	];

export type mGasType__type = 'GT_NORMAL' | 'GT_ENERGY';

export type Montage_1P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/FirstPerson/'>
>;

export type Montage_3P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/ThirdPerson/'>
>;
