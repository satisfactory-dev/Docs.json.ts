import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeHyper__type = FGBuildable__base__type & {
	mMeshLength: decimal_string__type;
	mSplineData: '';
	mSnappedPassthroughs: '';
};

export type FGBuildablePipeHyper__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeHyper__type];
	};
