import {FGBuildableFoundation__base__type} from './FGBuildableFoundation';

import {boolean__type} from '../../../common/common/scalar';

export type FGBuildableRamp__type = FGBuildableFoundation__base__type & {
	mIsDoubleRamp: boolean__type;
	mIsRoof: boolean__type;
	mIsInverted: boolean__type;
};
