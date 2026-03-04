import type {
	FGBuildable__circuits_base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableLightsControlPanel__type
} from '../../../common/classes/CoreUObject/FGBuildableLightsControlPanel.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableLightsControlPanel__type
	= common_base__FGBuildableLightsControlPanel__type
		& FGBuildable__circuits_base__type;

export type FGBuildableLightsControlPanel__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableLightsControlPanel__type],
	};
