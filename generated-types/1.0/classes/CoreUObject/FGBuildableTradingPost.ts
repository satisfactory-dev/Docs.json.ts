import {UnrealEngineString} from '../../utils/validators';

import {integer_string__type, decimal_string__type} from '../../common/scalar';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableTradingPost__type =
	FGBuildable__consumes_power_base__type & {
		mWorkBenchOccupied: 'Crafting Bench occupied';
		mWorkBenchFree: 'Use Crafting Bench';
		Meshes: [
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
		mShipUpgradeLevel: integer_string__type;
		mStorageText: 'Open Storage';
		mMamFreeText: 'Use the MAM';
		mMamOccupiedText: 'The MAM is occupied';
		mMeshes: [
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
		];
		ABClass: '/Game/FactoryGame/Buildable/Factory/TradingPost/BPA_Tradingpost.BPA_Tradingpost_C';
		mSkeletalMeshSoftPtr: '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SK_Tradingpost.SK_Tradingpost';
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
		mGenerators: '';
		mStorageInventorySize: integer_string__type;
		mStorageVisibilityLevel: integer_string__type;
		mLockerVisibilityLevel: integer_string__type;
		mMiniGameAndCalendarVisibilityLevel: integer_string__type;
		mSpawningGroundZOffset: decimal_string__type;
		mGroundSearchZDistance: decimal_string__type;
		mDefaultResources: '';
		mRepresentationText: 'The HUB';
	};

export type FGBuildableTradingPost__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableTradingPost__type];
	};
