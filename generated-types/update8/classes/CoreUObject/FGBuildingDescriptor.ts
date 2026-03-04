import type {
	FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type
} from './FGItemDescriptor.js';

import type {
	common_base__FGBuildingDescriptor__type
} from '../../../common/classes/CoreUObject/FGBuildingDescriptor.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildingDescriptor__type
	= common_base__FGBuildingDescriptor__type
		& FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type FGBuildingDescriptor__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildingDescriptor__type, ...FGBuildingDescriptor__type[]],
	};
