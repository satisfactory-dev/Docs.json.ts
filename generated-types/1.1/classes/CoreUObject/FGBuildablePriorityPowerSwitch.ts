import {
	v1_0_base__FGBuildablePriorityPowerSwitch__type,
	has__mOnLastEditedByChanged__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePriorityPowerSwitch__type =
	v1_0_base__FGBuildablePriorityPowerSwitch__type &
		FGBuildable__base__type &
		has__mOnLastEditedByChanged__type;

export type FGBuildablePriorityPowerSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePriorityPowerSwitch__type];
	};
