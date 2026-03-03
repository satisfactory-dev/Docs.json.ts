import {boolean__type} from '../../common/scalar.ts';

import {common_base__FGBuildableFoundation__base__type} from './FGBuildableFoundation.ts';

export type common_base__FGBuildableRamp__type =
	common_base__FGBuildableFoundation__base__type & {
		mIsDoubleRamp: boolean__type;
		mIsRoof: boolean__type;
	};
