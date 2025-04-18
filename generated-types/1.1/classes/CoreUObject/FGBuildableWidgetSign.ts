import {
	v1_0_base__FGBuildableWidgetSign__type,
	has__mLastEditedBy__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWidgetSign__type =
	v1_0_base__FGBuildableWidgetSign__type &
		FGBuildable__base__type &
		has__mLastEditedBy__type;

export type FGBuildableWidgetSign__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWidgetSign__type, ...FGBuildableWidgetSign__type[]];
	};
