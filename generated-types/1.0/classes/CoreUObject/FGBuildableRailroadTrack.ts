import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildableRailroadTrack__type} from '../../../common/classes/CoreUObject/FGBuildableRailroadTrack.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableRailroadTrack__type =
	common_base__FGBuildableRailroadTrack__type &
		FGBuildable__base__type;

export type FGBuildableRailroadTrack__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRailroadTrack__type];
	};
