import {FGBuildable__splitter__base__type} from './FGBuildable.js';

import {common_base__FGBuildableSplitterSmart__type} from '../../../common/classes/CoreUObject/FGBuildableSplitterSmart.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

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
