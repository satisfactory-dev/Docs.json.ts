import {decimal_string__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableStair__type = FGBuildable__base__type & {
	mStairDirection: 'EBSD_Left' | 'EBSD_Right';
	mHeight: decimal_string__type;
	mSize: decimal_string__type;
};

export type FGBuildableStair__NativeClass = NativeClass__type & {
	Classes: [FGBuildableStair__type, ...FGBuildableStair__type[]];
};
