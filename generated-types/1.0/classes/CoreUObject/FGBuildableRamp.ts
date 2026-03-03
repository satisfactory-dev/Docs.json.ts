import {FGBuildableFoundation__base__type} from './FGBuildableFoundation.ts';

import {boolean__type} from '../../../common/common/scalar.ts';

import {common_base__FGBuildableRamp__type} from '../../../common/classes/CoreUObject/FGBuildableRamp.ts';

export type FGBuildableRamp__type = FGBuildableRamp__merged__type & {
	mIsInverted: boolean__type;
};

export type FGBuildableRamp__merged__type =
	common_base__FGBuildableRamp__type &
		FGBuildableFoundation__base__type;
