import {FGBuildable__base__type} from './FGBuildable';

import {
	integer_string__signed__type,
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableSnowCannon__type = FGBuildable__base__type & {
	SFXLocation: xyz__type;
	mSignificanceRange: decimal_string__type;
	mAngleLimit?: {
		Min: integer_string__signed__type;
		Max: integer_string__type;
	};
	mAngleOffset?: integer_string__signed__type;
	mCannonAngle?: integer_string__type;
};

export type FGBuildableSnowCannon__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableSnowCannon__type];
	};
