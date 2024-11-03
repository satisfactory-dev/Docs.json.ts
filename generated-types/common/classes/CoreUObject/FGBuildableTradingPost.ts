import {UnrealEngineString} from '../../utils/validators';

import {integer_string__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildableTradingPost__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mWorkBenchOccupied: Exclude<string, ''>;
		mWorkBenchFree: Exclude<string, ''>;
		Meshes: [
			UnrealEngineString<'/Script/Engine.StaticMesh'>,
			...UnrealEngineString<'/Script/Engine.StaticMesh'>[],
		];
		mShipUpgradeLevel: integer_string__type;
		mStorageText: 'Open Storage';
		mMamFreeText: Exclude<string, ''>;
		mMamOccupiedText: Exclude<string, ''>;
		ABClass: '/Game/FactoryGame/Buildable/Factory/TradingPost/BPA_Tradingpost.BPA_Tradingpost_C';
		mSkeletalMeshSoftPtr: '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SK_Tradingpost.SK_Tradingpost';
		mGenerators: '';
		mStorageInventorySize: integer_string__type;
		mStorageVisibilityLevel: integer_string__type;
		mSpawningGroundZOffset: decimal_string__type;
		mGroundSearchZDistance: decimal_string__type;
		mDefaultResources: '';
		mRepresentationText: 'The HUB';
	};
