import {
	decimal_string__type,
	integer_string__signed__type,
} from '../../common/scalar';

import {FGBuildable__pole__base__type} from './FGBuildable';

import {NativeClass__type} from '../../common/unassigned';

export type FGBuildablePoleLightweight__type =
	FGBuildable__pole__base__type & {
		mHeight: decimal_string__type;
		mSelectedPoleVersion: integer_string__signed__type;
	};

export type FGBuildablePoleLightweight__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePoleLightweight__type];
};
