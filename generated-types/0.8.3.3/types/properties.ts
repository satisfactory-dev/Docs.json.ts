/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
} from './../../common/types.ts';

type mDamageTypes = [
	mDamageTypes_item,
	...mDamageTypes_item[],
];

type mDamageTypes_item = `/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_${Exclude<string, ''>}${'DamageType_'}${Exclude<string, ''>}${'_C\''}${Exclude<string, ''>}${'\''}`;

type FGBuildable_mOcclusionBoxInfo_item = {
	Min: docs_json_ts_common_types_XYZ_decimal_string,
	Max: docs_json_ts_common_types_XYZ_decimal_string,
	IsValid: docs_json_ts_common_types_bool_string,
};

type FGTrainPlatformConnection_quoted = `/Script/FactoryGame.FGTrainPlatformConnection'"/Game/FactoryGame${Exclude<string, ''>}${'"\''}`;

type Meshes_item = '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'';

export type {
	mDamageTypes,
	mDamageTypes_item,
	FGBuildable_mOcclusionBoxInfo_item,
	FGTrainPlatformConnection_quoted,
	Meshes_item,
};
