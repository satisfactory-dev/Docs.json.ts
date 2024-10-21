import {FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {
	common_base__FGBuildingDescriptor__ClassName__type,
	common_base__FGBuildingDescriptor__mForm__type,
	common_base__FGBuildingDescriptor__mSubCategories__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildingDescriptor__type =
	FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		ClassName: common_base__FGBuildingDescriptor__ClassName__type;
		mForm: common_base__FGBuildingDescriptor__mForm__type;
		mSubCategories: common_base__FGBuildingDescriptor__mSubCategories__type;
	};

export type FGBuildingDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildingDescriptor__type, ...FGBuildingDescriptor__type[]];
	};
