import {FGBuildable__base__type} from './FGBuildable';

import {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableStackableShelf__type = FGBuildable__base__type &
	FGBuildableStackableShelf__properties__type;

export type FGBuildableStackableShelf__properties__type = {
	mSize: xyz__type;
};

export type FGBuildableStackableShelf__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStackableShelf__type];
	};
