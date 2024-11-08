import {FGBuildable__base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGBuildableConveyorBelt__base__type,
	common_base__FGBuildableConveyorBelt__type,
} from '../../../common/classes/CoreUObject/FGBuildableConveyorBelt';

export type FGBuildableConveyorBelt__type =
	FGBuildableConveyorBelt__merged__type;

export type FGBuildableConveyorBelt__base__type =
	FGBuildableConveyorBelt__base__merged__type & {
		mItems: empty_object__type;
	};

export type FGBuildableConveyorBelt__base__merged__type =
	common_base__FGBuildableConveyorBelt__base__type &
		FGBuildable__base__type;

export type FGBuildableConveyorBelt__merged__type =
	common_base__FGBuildableConveyorBelt__type &
		FGBuildableConveyorBelt__base__type;

export type FGBuildableConveyorBelt__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableConveyorBelt__type,
			...FGBuildableConveyorBelt__type[],
		];
	};
