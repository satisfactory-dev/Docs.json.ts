import {StringStartsWith} from '../../utils/validators';

import {integer_string__type} from '../../../common/common/scalar';

import {
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type,
	mForm__type,
	None__type,
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mClassToScanFor:
			| None__type
			| StringStartsWith<'/Game/FactoryGame/Resource/Environment/'>
			| StringStartsWith<'/Game/FactoryGame/World/Benefit/'>;
	};

export type FGItemDescriptor__FGResourceDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mSubCategories: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type;
		mForm: mForm__type;
	};

export type FGItemDescriptor__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptor__FGResourceDescriptor__type,
		...FGItemDescriptor__FGResourceDescriptor__type[],
	];
};
