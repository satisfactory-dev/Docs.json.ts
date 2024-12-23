import {UnrealEngineString} from '../../utils/validators';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {xyz__type, None__type} from '../../common/unassigned';

import {common_base__FGBuildable__extractor_base__type} from './FGBuildable';

export type common_base__FGBuildableWaterPump__type =
	common_base__FGBuildable__extractor_base__type & {
		mWaterpumpTimeline_RTPC_B8FA6F944E717E3B7A286E84901F620E: decimal_string__type;
		mWaterpumpTimeline__Direction_B8FA6F944E717E3B7A286E84901F620E: 'Forward';
		HasLostSignificance: boolean__type;
		mMinimumDepthForPlacement: decimal_string__type;
		mDepthTraceOriginOffset: xyz__type;
		mAllowedResourceForms: ['RF_LIQUID', ...'RF_LIQUID'[]];
		mAllowedResources: [
			UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				'/Game/FactoryGame/Resource/RawResources/Water/Desc_Water.Desc_Water_C'
			>,
			...UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				'/Game/FactoryGame/Resource/RawResources/Water/Desc_Water.Desc_Water_C'
			>[],
		];
		mExtractorTypeName?: None__type;
	};
