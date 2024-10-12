import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableLadder__type = FGBuildable__base__type & {
	mWidth: decimal_string__type;
	mMeshHeight: decimal_string__type;
	mMaxSegmentCount: integer_string__type;
	mNumSegments: integer_string__type;
	mLadderMeshes: '';
};

export type FGBuildableLadder__NativeClass = NativeClass__type & {
	Classes: [FGBuildableLadder__type];
};
