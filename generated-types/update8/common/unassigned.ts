import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {FGBuildableResourceExtractor__miner__base__type} from '../classes/CoreUObject/FGBuildableResourceExtractor';

import {
	empty_object__type,
	common_base__FGBuildableResourceExtractor__miner_mk3__type,
} from '../../common/common/unassigned';

import {
	decimal_string__type,
	integer_string__type,
	boolean__type,
} from '../../common/common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from '../../common/classes/CoreUObject/FGBuildable';

import {common_base__FGBuildableDroneStation__type} from '../../common/classes/CoreUObject/FGBuildableDroneStation';

import {common_base__FGBuildableTradingPost__type} from '../../common/classes/CoreUObject/FGBuildableTradingPost';

export type FGBuildable__consumes_power_base__update8__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mMaxPotentialIncreasePerCrystal: decimal_string__type;
		OnReplicationDetailActorCreatedEvent: empty_object__type;
		mInventoryPotentialHandlerData: empty_object__type;
	};

export type FGBuildableDroneStation__update8__type =
	common_base__FGBuildableDroneStation__type & {
		mBatteryClasses: [
			UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				StringStartsWith<'/Game/FactoryGame/Resource/Parts/Battery/'>
			>,
			...UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				StringStartsWith<'/Game/FactoryGame/Resource/Parts/Battery/'>
			>[],
		];
		mBatteryStorageSizeX: integer_string__type;
		mBatteryStorageSizeY: integer_string__type;
		mInputInventoryHandler: empty_object__type;
		mOutputInventoryHandler: empty_object__type;
		mBatteryInventoryHandler: empty_object__type;
	};

export type FGBuildableResourceExtractor__miner_mk3__type =
	common_base__FGBuildableResourceExtractor__miner_mk3__type &
		FGBuildableResourceExtractor__miner__base__type;

export type FGBuildableTradingPost__update8__type =
	common_base__FGBuildableTradingPost__type & {
		mWorkBenchOccupied: 'Craft Bench occupied';
		mWorkBenchFree: 'Use Craft Bench';
		Meshes?: [
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/'>
			>,
			...UnrealEngineString<
				'/Script/Engine.StaticMesh',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/'>
			>[],
		];
		mMamFreeText?: 'Use MAM';
		mMamOccupiedText?: 'MAM is occupied';
		mMeshes: [
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			),
			...(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6'
			)[],
		];
		mNeedPlayingBuildEffectNotification: boolean__type;
	};

export type mOutputInventoryHandlerData__type =
	empty_object__type;
