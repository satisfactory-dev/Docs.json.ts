import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	decimal_string__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableStair__type = FGBuildable__base__type & {
	mStairDirection: 'EBSD_Left' | 'EBSD_Right',
	mHeight: decimal_string__type,
	mSize: decimal_string__type,
};

export type FGBuildableStair__NativeClass = NativeClass__type & {
	Classes: [FGBuildableStair__type, ...FGBuildableStair__type[]],
};
