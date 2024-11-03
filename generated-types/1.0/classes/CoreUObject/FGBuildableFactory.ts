import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	common_base__FGBuildableFactory__jump_pad__type,
	common_base__FGBuildableFactory__landing_pad__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableFactory__generic__type =
	FGBuildable__consumes_power_base__type;

export type FGBuildableFactory__jump_pad__type =
	FGBuildableFactory__jump_pad__merged__type;

export type FGBuildableFactory__jump_pad__merged__type =
	common_base__FGBuildableFactory__jump_pad__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableFactory__landing_pad__type =
	FGBuildableFactory__landing_pad__merged__type;

export type FGBuildableFactory__landing_pad__merged__type =
	common_base__FGBuildableFactory__landing_pad__type &
		FGBuildable__consumes_power_base__type;

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
