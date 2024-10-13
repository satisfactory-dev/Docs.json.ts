import {FGBuildableFoundation__base__type} from './FGBuildableFoundation';

import {boolean__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRamp__type = FGBuildableFoundation__base__type & {
	mIsDoubleRamp: boolean__type;
	mIsRoof: boolean__type;
};

export type FGBuildableRamp__NativeClass = NativeClass__type & {
	Classes: [FGBuildableRamp__type, ...FGBuildableRamp__type[]];
};
