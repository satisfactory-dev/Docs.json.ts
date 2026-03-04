import {FGBuildableConveyorBelt__pre_1_1__type} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {integer_string__signed__type} from '../../../common/common/scalar.js';

import {
	common_base__FGBuildableConveyorBelt__base__type,
	common_base__FGBuildableConveyorBelt__type,
} from '../../../common/classes/CoreUObject/FGBuildableConveyorBelt.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableConveyorBelt__type =
	FGBuildableConveyorBelt__pre_1_1__type;

export type FGBuildableConveyorBelt__base__type =
	FGBuildableConveyorBelt__base__merged__type & {
		mItems: {
			ArrayReplicationKey: integer_string__signed__type;
		};
		mChainSegmentIndex: integer_string__signed__type;
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
