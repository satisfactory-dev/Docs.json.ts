import {FGBuildable__pole__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipelineSupport__type =
	FGBuildable__pole__base__type & {
		mLength: decimal_string__type;
		mVerticalAngle: decimal_string__type;
	};

export type FGBuildablePipelineSupport__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePipelineSupport__type,
			...FGBuildablePipelineSupport__type[],
		];
	};
