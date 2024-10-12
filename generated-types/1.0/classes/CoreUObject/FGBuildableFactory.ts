import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFactory__generic__type =
	FGBuildable__consumes_power_base__type;

export type FGBuildableFactory__jump_pad__type =
	FGBuildable__consumes_power_base__type & {
		JumpForceCharacter: decimal_string__type;
		JumpForcePhysics: decimal_string__type;
	};

export type FGBuildableFactory__landing_pad__type =
	FGBuildable__consumes_power_base__type & {
		mDampeningFactor: decimal_string__type;
		mPlayerList: '';
	};

export type FGBuildableFactory__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildableFactory__jump_pad__type
				| FGBuildableFactory__landing_pad__type
				| FGBuildableFactory__generic__type
			),
			(
				| FGBuildableFactory__jump_pad__type
				| FGBuildableFactory__landing_pad__type
				| FGBuildableFactory__generic__type
			),
			(
				| FGBuildableFactory__jump_pad__type
				| FGBuildableFactory__landing_pad__type
				| FGBuildableFactory__generic__type
			),
			(
				| FGBuildableFactory__jump_pad__type
				| FGBuildableFactory__landing_pad__type
				| FGBuildableFactory__generic__type
			),
			(
				| FGBuildableFactory__jump_pad__type
				| FGBuildableFactory__landing_pad__type
				| FGBuildableFactory__generic__type
			),
		];
	};
