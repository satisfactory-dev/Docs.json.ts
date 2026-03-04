import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildablePowerStorage__type
} from '../../../common/classes/CoreUObject/FGBuildablePowerStorage.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePowerStorage__type
	= FGBuildablePowerStorage__merged__type & {
		mStatusPrimitiveID: integer_string__type,
		mChargePrimitiveID: integer_string__type,
		mPowerInput: decimal_string__type,
	};

export type FGBuildablePowerStorage__merged__type
	= common_base__FGBuildablePowerStorage__type
		& FGBuildable__consumes_power_base__type;

export type FGBuildablePowerStorage__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePowerStorage__type],
	};
