import {FGBuildable__base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGBuildableWidgetSign__type} from '../../../common/classes/CoreUObject/FGBuildableWidgetSign';

export type FGBuildableWidgetSign__type =
	FGBuildableWidgetSign__merged__type & {
		mTextElementToLocDataMap: empty_object__type;
		mSoftActivePrefabLayout: 'None';
		mActivePrefabLayout: empty_object__type;
		mGlobalPrefabIconElementSaveData: '';
	};

export type FGBuildableWidgetSign__merged__type =
	common_base__FGBuildableWidgetSign__type &
		FGBuildable__base__type;

export type FGBuildableWidgetSign__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWidgetSign__type, ...FGBuildableWidgetSign__type[]];
	};
