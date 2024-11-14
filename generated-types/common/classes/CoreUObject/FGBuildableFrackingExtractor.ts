import {
	None__type,
	UnrealEngineString__array__type,
} from '../../common/unassigned';

import {common_base__FGBuildable__extractor_base__type} from './FGBuildable';

export type common_base__FGBuildableFrackingExtractor__type =
	common_base__FGBuildable__extractor_base__type & {
		mAllowedResourceForms: [
			'RF_LIQUID' | 'RF_GAS',
			...('RF_LIQUID' | 'RF_GAS')[],
		];
		mExtractorTypeName: None__type;
		mAllowedResources: UnrealEngineString__array__type;
	};
