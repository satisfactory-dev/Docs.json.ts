import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	integer_string__signed__type,
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import type {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

export type FGBuildableSnowCannon__type = FGBuildable__base__type & {
	SFXLocation: xyz__type,
	mSignificanceRange: decimal_string__type,
	mAngleLimit?: {
		Min: integer_string__signed__type,
		Max: integer_string__type,
	},
	mAngleOffset?: integer_string__signed__type,
	mCannonAngle?: integer_string__type,
};

export type FGBuildableSnowCannon__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableSnowCannon__type],
	};
