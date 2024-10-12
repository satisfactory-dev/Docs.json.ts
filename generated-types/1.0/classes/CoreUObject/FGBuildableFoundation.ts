import {boolean__type} from '../../common/scalar';

import {
	empty_object__type,
	mDisableSnapOn__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

export type FGBuildableFoundation__type = FGBuildableFoundation__base__type;

export type FGBuildableFoundation__base__type = FGBuildable__base__type & {
	mWidth: decimal_string__type;
	mDepth: decimal_string__type;
	mHeight: decimal_string__type;
	mElevation: decimal_string__type;
	mIsFrame: boolean__type;
	mDisableSnapOn: empty_object__type | mDisableSnapOn__type;
	mDisableAttachmentSnapOn: empty_object__type | mDisableSnapOn__type;
};
