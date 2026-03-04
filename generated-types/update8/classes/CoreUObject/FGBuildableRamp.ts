import type {
	FGBuildableFoundation__base__type
} from './FGBuildableFoundation.js';

import type {
	common_base__FGBuildableRamp__type
} from '../../../common/classes/CoreUObject/FGBuildableRamp.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableRamp__type = FGBuildableRamp__merged__type;

export type FGBuildableRamp__merged__type
	= common_base__FGBuildableRamp__type
		& FGBuildableFoundation__base__type;

export type FGBuildableRamp__NativeClass = NativeClass__type & {
	Classes: [FGBuildableRamp__type, ...FGBuildableRamp__type[]],
};
