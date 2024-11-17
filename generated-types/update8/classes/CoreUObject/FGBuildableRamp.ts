import {FGBuildableFoundation__base__type} from './FGBuildableFoundation';

import {common_base__FGBuildableRamp__type} from '../../../common/classes/CoreUObject/FGBuildableRamp';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRamp__type = FGBuildableRamp__merged__type;

export type FGBuildableRamp__merged__type =
	common_base__FGBuildableRamp__type &
		FGBuildableFoundation__base__type;

export type FGBuildableRamp__NativeClass = NativeClass__type & {
	Classes: [FGBuildableRamp__type, ...FGBuildableRamp__type[]];
};
