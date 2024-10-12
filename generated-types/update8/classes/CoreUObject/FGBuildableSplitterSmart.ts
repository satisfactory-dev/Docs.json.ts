import {empty_object__type} from '../../common/unassigned';

import {FGBuildable__splitter__base__type} from './FGBuildable';

import {integer_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableSplitterSmart__type =
	FGBuildable__splitter__base__type & {
		OnSortRulesChangedDelegate: empty_object__type;
		mMaxNumSortRules: integer_string__type;
		mLastItem: {
			ItemState: empty_object__type;
		};
		mItemToLastOutputMap: empty_object__type;
		mLastOutputIndex: integer_string__type;
		mCurrentInventoryIndex: integer_string__type;
		mDistributionTable: '';
	};

export type FGBuildableSplitterSmart__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableSplitterSmart__type,
			...FGBuildableSplitterSmart__type[],
		];
	};
