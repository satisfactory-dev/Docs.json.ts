import {FGBuildable__splitter__base__type} from './FGBuildable';

import {common_base__FGBuildableSplitterSmart__type} from '../../../common/classes/CoreUObject/FGBuildableSplitterSmart';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableSplitterSmart__type =
	common_base__FGBuildableSplitterSmart__type &
		FGBuildable__splitter__base__type;

export type FGBuildableSplitterSmart__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableSplitterSmart__type,
			...FGBuildableSplitterSmart__type[],
		];
	};
