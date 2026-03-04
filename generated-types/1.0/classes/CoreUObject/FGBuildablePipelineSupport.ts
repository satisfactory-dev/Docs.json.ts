import {FGBuildable__pole__base__with_static__merged__type} from './FGBuildable.js';

import {decimal_string__type} from '../../../common/common/scalar.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildablePipelineSupport__type =
	FGBuildable__pole__base__with_static__merged__type &
		FGBuildablePipelineSupport__properties__type;

export type FGBuildablePipelineSupport__properties__type = {
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
