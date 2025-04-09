import {
	decimal_string__type,
	integer_string__signed__type,
} from '../../common/scalar';

import {
	common_base__FGBuildable__pole__base__with_static__type,
	common_base__FGBuildable__base__type,
} from './FGBuildable';

export type common_base__FGBuildablePoleLightweight__type =
	common_base__FGBuildable__pole__base__with_static__type &
		common_base__FGBuildablePoleLightweight__properties__type;

export type common_base__FGBuildablePoleLightweight__properties__type =
	common_base__FGBuildable__base__type & {
		mHeight: decimal_string__type;
		mSelectedPoleVersion: integer_string__signed__type;
	};
