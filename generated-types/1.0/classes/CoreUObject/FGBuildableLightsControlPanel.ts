import {FGBuildable__circuits_base__type} from './FGBuildable.ts';

import {common_base__FGBuildableLightsControlPanel__type} from '../../../common/classes/CoreUObject/FGBuildableLightsControlPanel.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableLightsControlPanel__type =
	common_base__FGBuildableLightsControlPanel__type &
		FGBuildable__circuits_base__type;

export type FGBuildableLightsControlPanel__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightsControlPanel__type];
	};
