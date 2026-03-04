import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableRailroadAttachment__type = FGBuildable__base__type & {
	mIsEndStop: boolean__type,
};

export type FGBuildableRailroadAttachment__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableRailroadAttachment__type,
			...FGBuildableRailroadAttachment__type[],
		],
	};
