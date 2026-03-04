import type {
	boolean__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildableFoundation__base__type
} from './FGBuildableFoundation.js';

export type common_base__FGBuildableRamp__type
	= common_base__FGBuildableFoundation__base__type & {
		mIsDoubleRamp: boolean__type,
		mIsRoof: boolean__type,
	};
