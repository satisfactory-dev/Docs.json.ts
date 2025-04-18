import {v1_0_base__FGBuildableRailroadSignal__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {boolean__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRailroadSignal__type =
	FGBuildableRailroadSignal__merged__type & {
		mIsLeftHanded: boolean__type;
	};

export type FGBuildableRailroadSignal__merged__type =
	v1_0_base__FGBuildableRailroadSignal__type & FGBuildable__base__type;

export type FGBuildableRailroadSignal__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableRailroadSignal__type,
			...FGBuildableRailroadSignal__type[],
		];
	};
