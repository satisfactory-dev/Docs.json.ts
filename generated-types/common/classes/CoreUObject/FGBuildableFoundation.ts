import {decimal_string__type, boolean__type} from '../../common/scalar';

import {
	empty_object__type,
	common_base__mDisableSnapOn__type,
} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableFoundation__type =
	common_base__FGBuildableFoundation__base__type;

export type common_base__FGBuildableFoundation__base__type =
	common_base__FGBuildable__base__type & {
		mWidth: decimal_string__type;
		mDepth: decimal_string__type;
		mHeight: decimal_string__type;
		mElevation: decimal_string__type;
		mIsFrame: boolean__type;
		mDisableSnapOn:
			| empty_object__type
			| common_base__mDisableSnapOn__type;
		mDisableAttachmentSnapOn:
			| empty_object__type
			| common_base__mDisableSnapOn__type;
	};
