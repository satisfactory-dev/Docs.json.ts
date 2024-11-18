import {FGBuildable__base__type} from './FGBuildable';

import {common_base__FGBuildableWidgetSign__type} from '../../../common/classes/CoreUObject/FGBuildableWidgetSign';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWidgetSign__type = FGBuildableWidgetSign__merged__type;

export type FGBuildableWidgetSign__merged__type =
	common_base__FGBuildableWidgetSign__type &
		FGBuildable__base__type;

export type FGBuildableWidgetSign__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWidgetSign__type, ...FGBuildableWidgetSign__type[]];
	};
