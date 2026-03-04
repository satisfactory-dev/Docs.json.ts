import type {
	v1_0_base__FGBuildablePowerStorage__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePowerStorage__type
	= FGBuildablePowerStorage__merged__type & {
		mNumExtraCustomizationData: integer_string__type,
		mMaxRealDataDriftTime: decimal_string__type,
	};

export type FGBuildablePowerStorage__merged__type
	= v1_0_base__FGBuildablePowerStorage__type & FGBuildable__base__type;

export type FGBuildablePowerStorage__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePowerStorage__type],
	};
