import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildableRailroadSignal__type} from '../../../common/classes/CoreUObject/FGBuildableRailroadSignal.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableRailroadSignal__type =
	FGBuildableRailroadSignal__merged__type;

export type FGBuildableRailroadSignal__merged__type =
	common_base__FGBuildableRailroadSignal__type &
		FGBuildable__base__type;

export type FGBuildableRailroadSignal__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableRailroadSignal__type,
			...FGBuildableRailroadSignal__type[],
		];
	};
