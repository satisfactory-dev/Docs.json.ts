import {mGasType__type, mClassToScanFor__type} from '../../common/unassigned';

import {boolean__type} from '../../../common/common/scalar';

import {
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from '../../../common/classes/CoreUObject/FGItemDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mGasType: mGasType__type;
		mClassToScanFor: mClassToScanFor__type;
		mIsAlienItem: boolean__type;
		mNeedsPickUpMarker: boolean__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type &
		FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type FGItemDescriptor__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptor__FGResourceDescriptor__type,
		...FGItemDescriptor__FGResourceDescriptor__type[],
	];
};
