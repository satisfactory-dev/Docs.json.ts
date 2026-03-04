import {
	v1_0_base__FGBuildableCircuitSwitch__type,
	has__mOnLastEditedByChanged__type,
	has__mFGTextRenderers__type,
} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableCircuitSwitch__type =
	v1_0_base__FGBuildableCircuitSwitch__type &
		FGBuildable__base__type &
		has__mOnLastEditedByChanged__type &
		has__mFGTextRenderers__type;

export type FGBuildableCircuitSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCircuitSwitch__type];
	};
