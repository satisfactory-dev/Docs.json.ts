import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildable__base__type
} from './FGBuildable.js';

export type common_base__FGBuildablePipeHyper__type
	= common_base__FGBuildable__base__type & {
		mMeshLength: decimal_string__type,
		mSplineData: '',
		mSnappedPassthroughs: '',
	};
