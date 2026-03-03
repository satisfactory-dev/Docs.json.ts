import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

import {decimal_string__type} from '../../common/scalar.ts';

export type common_base__FGBuildableFactory__generic__type =
	common_base__FGBuildable__consumes_power_base__type;

export type common_base__FGBuildableFactory__jump_pad__type =
	common_base__FGBuildable__consumes_power_base__type & {
		JumpForceCharacter: decimal_string__type;
		JumpForcePhysics: decimal_string__type;
	};

export type common_base__FGBuildableFactory__landing_pad__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mDampeningFactor: decimal_string__type;
		mPlayerList: '';
	};
