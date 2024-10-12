import {FGBuildable__pipeline_flow_accessory__type} from './FGBuildable';

import {boolean__type} from '../../common/scalar';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipelinePump__type =
	FGBuildable__pipeline_flow_accessory__type & {
		mIsPipePumpPlaying: boolean__type;
		mIsExceedingHeadLift: boolean__type;
		mCurrentAudioHeadLift: decimal_string__type;
	};

export type FGBuildablePipelinePump__valve__type =
	FGBuildable__pipeline_flow_accessory__type;

export type FGBuildablePipelinePump__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
		];
	};
