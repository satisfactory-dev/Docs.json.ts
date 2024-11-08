import {FGBuildableConveyorBelt__base__type} from './FGBuildableConveyorBelt';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {common_base__FGBuildableConveyorLift__type} from '../../../common/classes/CoreUObject/FGBuildableConveyorLift';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableConveyorLift__type =
	FGBuildableConveyorLift__merged__type & {
		mFlipMeshOnReverse: boolean__type;
		mOpposingConnectionClearance: decimal_string__type;
	};

export type FGBuildableConveyorLift__merged__type =
	common_base__FGBuildableConveyorLift__type &
		FGBuildableConveyorBelt__base__type;

export type FGBuildableConveyorLift__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableConveyorLift__type,
			...FGBuildableConveyorLift__type[],
		];
	};
