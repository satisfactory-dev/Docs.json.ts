import {FGBuildableConveyorBelt__base__type} from './FGBuildableConveyorBelt.js';

import {common_base__FGBuildableConveyorLift__type} from '../../../common/classes/CoreUObject/FGBuildableConveyorLift.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableConveyorLift__type =
	common_base__FGBuildableConveyorLift__type &
		FGBuildableConveyorBelt__base__type;

export type FGBuildableConveyorLift__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableConveyorLift__type,
			...FGBuildableConveyorLift__type[],
		];
	};
