import type {
	FGBuildable__power_switch__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableCircuitSwitch__type
} from '../../../common/classes/CoreUObject/FGBuildableCircuitSwitch.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableCircuitSwitch__type
	= common_base__FGBuildableCircuitSwitch__type
		& FGBuildable__power_switch__base__type;

export type FGBuildableCircuitSwitch__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableCircuitSwitch__type],
	};
