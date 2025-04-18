import {FGBuildable__base__type} from './FGBuildable';

import {boolean__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRailroadAttachment__type = FGBuildable__base__type & {
	mIsEndStop: boolean__type;
};

export type FGBuildableRailroadAttachment__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableRailroadAttachment__type,
			...FGBuildableRailroadAttachment__type[],
		];
	};
