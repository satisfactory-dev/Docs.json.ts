import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableBeamLightweight__type = FGBuildable__base__type & {
	mSize: decimal_string__type;
	mDefaultLength: decimal_string__type;
	mMaxLength: decimal_string__type;
	mLength: decimal_string__type;
};

export type FGBuildableBeamLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableBeamLightweight__type,
			...FGBuildableBeamLightweight__type[],
		];
	};
