import {FGBuildable__circuits_base__type} from './FGBuildable';

import {common_base__FGBuildableLightsControlPanel__type} from '../../../common/classes/CoreUObject/FGBuildableLightsControlPanel';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableLightsControlPanel__type =
	FGBuildableLightsControlPanel__merged__type;

export type FGBuildableLightsControlPanel__merged__type =
	common_base__FGBuildableLightsControlPanel__type &
		FGBuildable__circuits_base__type;

export type FGBuildableLightsControlPanel__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightsControlPanel__type];
	};
