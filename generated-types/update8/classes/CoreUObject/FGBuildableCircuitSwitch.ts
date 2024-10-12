import {FGBuildable__power_switch__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableCircuitSwitch__type =
	FGBuildable__power_switch__base__type & {
		ClassName: 'Build_PowerSwitch_C';
	};

export type FGBuildableCircuitSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCircuitSwitch__type];
	};
