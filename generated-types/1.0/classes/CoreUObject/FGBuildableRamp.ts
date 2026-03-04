import type {
	FGBuildableFoundation__base__type
} from './FGBuildableFoundation.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildableRamp__type
} from '../../../common/classes/CoreUObject/FGBuildableRamp.js';

export type FGBuildableRamp__type = FGBuildableRamp__merged__type & {
	mIsInverted: boolean__type,
};

export type FGBuildableRamp__merged__type
	= common_base__FGBuildableRamp__type
		& FGBuildableFoundation__base__type;
