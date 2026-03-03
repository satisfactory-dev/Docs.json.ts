import {
	v1_0_base__FGBuildableGeneratorFuel__biogen__type,
	v1_0_base__FGBuildableGeneratorFuel__liquid__type,
	v1_0_base__FGBuildableGeneratorFuel__base__type,
} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildableGeneratorFuel__solid__type} from '../../../common/classes/CoreUObject/FGBuildableGeneratorFuel.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableGeneratorFuel__biogen__type =
	v1_0_base__FGBuildableGeneratorFuel__biogen__type & FGBuildable__base__type;

export type FGBuildableGeneratorFuel__liquid__type =
	v1_0_base__FGBuildableGeneratorFuel__liquid__type & FGBuildable__base__type;

export type FGBuildableGeneratorFuel__solid__type =
	common_base__FGBuildableGeneratorFuel__solid__type &
		v1_0_base__FGBuildableGeneratorFuel__base__type &
		FGBuildable__base__type;

export type FGBuildableGeneratorFuel__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableGeneratorFuel__solid__type,
			FGBuildableGeneratorFuel__liquid__type,
			FGBuildableGeneratorFuel__biogen__type,
		];
	};
