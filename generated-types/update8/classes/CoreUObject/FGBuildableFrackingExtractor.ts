import {FGBuildable__extractor_base__type} from './FGBuildable';

import {
	None__type,
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableFrackingExtractor__type =
	FGBuildable__extractor_base__type & {
		mAllowedResourceForms: [
			'RF_LIQUID' | 'RF_GAS',
			...('RF_LIQUID' | 'RF_GAS')[],
		];
		mExtractorTypeName: None__type;
		mAllowedResources: UnrealEngineString__array__type;
	};

export type FGBuildableFrackingExtractor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFrackingExtractor__type];
	};
