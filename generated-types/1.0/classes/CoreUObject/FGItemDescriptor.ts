import {mGasType__type} from '../../common/unassigned';

import {StringStartsWith} from '../../utils/validators';

import {
	boolean__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	None__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from '../../../common/classes/CoreUObject/FGItemDescriptor';

export type FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mGasType: mGasType__type;
		mClassToScanFor:
			| None__type
			| StringStartsWith<'/Game/FactoryGame/Resource/Environment/'>
			| StringStartsWith<'/Game/FactoryGame/World/Benefit/'>
			| StringStartsWith<'/Game/FactoryGame/Prototype/WAT/'>;
		mIsAlienItem: boolean__type;
		mNeedsPickUpMarker: boolean__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type &
		FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type FGItemDescriptor__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptor__FGResourceDescriptor__type,
		...FGItemDescriptor__FGResourceDescriptor__type[],
	];
};
