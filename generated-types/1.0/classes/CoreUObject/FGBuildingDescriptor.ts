import {FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {
	common_base__FGBuildingDescriptor__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildingDescriptor__type =
	common_base__FGBuildingDescriptor__type &
		FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type FGBuildingDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildingDescriptor__type, ...FGBuildingDescriptor__type[]];
	};
