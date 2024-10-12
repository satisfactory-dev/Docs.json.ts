import {None__type, empty_object__type} from '../../common/unassigned';

import {boolean__type, integer_string__type} from '../../common/scalar';

import {FGBuildable__extractor_base__shared__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableFrackingActivator__type =
	FGBuildable__extractor_base__shared__type & {
		mExtractorTypeName?: None__type;
		CurrentPotentialChangedDelegate: empty_object__type;
		ConnectedExtractorCountChangedDelegate: empty_object__type;
		mActivationStartupTime: decimal_string__type;
		mActivationStartupTimer: decimal_string__type;
		mSatelliteActivationComplete: boolean__type;
		mSatelliteNodeCount: integer_string__type;
		mConnectedExtractorCount: integer_string__type;
		mDefaultPotentialExtractionPerMinute: decimal_string__type;
		mAllowedResources: UnrealEngineString__array__type;
	};

export type FGBuildableFrackingActivator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFrackingActivator__type];
	};
