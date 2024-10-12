import {decimal_string__type, boolean__type} from '../../common/scalar';

import {FGBuildableWall__base__type} from './FGBuildableWall';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableCornerWall__type = FGBuildableWall__base__type & {
	mSize: decimal_string__type;
	mIsInverted: boolean__type;
};

export type FGBuildableCornerWall__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCornerWall__type, ...FGBuildableCornerWall__type[]];
	};
