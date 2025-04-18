import {v1_0_base__FGBuildablePowerStorage__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePowerStorage__type =
	FGBuildablePowerStorage__merged__type & {
		mNumExtraCustomizationData: integer_string__type;
		mMaxRealDataDriftTime: decimal_string__type;
	};

export type FGBuildablePowerStorage__merged__type =
	v1_0_base__FGBuildablePowerStorage__type & FGBuildable__base__type;

export type FGBuildablePowerStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerStorage__type];
	};
