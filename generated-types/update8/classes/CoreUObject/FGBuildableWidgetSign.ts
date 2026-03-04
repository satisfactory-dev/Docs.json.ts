import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildableWidgetSign__type} from '../../../common/classes/CoreUObject/FGBuildableWidgetSign.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableWidgetSign__type =
	common_base__FGBuildableWidgetSign__type &
		FGBuildable__base__type;

export type FGBuildableWidgetSign__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWidgetSign__type, ...FGBuildableWidgetSign__type[]];
	};
