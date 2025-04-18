import {StringStartsWith} from '../../utils/validators';

import {
	v1_0_base__FGBuildable__base__type,
	v1_0_base__FGBuildable__consumes_power_base__version_1__type,
} from '../../common/unassigned';

import {
	empty_object__type,
	common_base__FGBuildable__pole__base__no_static__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGBuildable__occupied__type,
	common_base__FGBuildable__tiered__type,
} from '../../../common/classes/CoreUObject/FGBuildable';

export type FGBuildable__base__type = v1_0_base__FGBuildable__base__type & {
	mOnBuildableReturnedToLightweightPool: empty_object__type;
	mInteractWidgetSoftClass:
		| 'None'
		| StringStartsWith<'/Game/FactoryGame/Buildable/'>
		| StringStartsWith<'/Game/FactoryGame/Interface/UI/'>;
};

export type FGBuildable__consumes_power_base__type =
	v1_0_base__FGBuildable__consumes_power_base__version_1__type &
		FGBuildable__base__type;

export type FGBuildable__occupied__final__type =
	common_base__FGBuildable__occupied__type &
		FGBuildable__base__type;

export type FGBuildable__pole__base__no_static__type =
	common_base__FGBuildable__pole__base__no_static__pre_1_1__type &
		FGBuildable__base__type;

export type FGBuildable__tiered__type =
	common_base__FGBuildable__tiered__type &
		FGBuildable__base__type;

export type FGBuildable__NativeClass = NativeClass__type & {
	Classes: [
		(
			| FGBuildable__base__type
			| FGBuildable__occupied__final__type
			| FGBuildable__tiered__type
		),
		...(
			| FGBuildable__base__type
			| FGBuildable__occupied__final__type
			| FGBuildable__tiered__type
		)[],
	];
};
