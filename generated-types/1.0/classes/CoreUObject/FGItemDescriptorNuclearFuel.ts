import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {
	common_base__FGItemDescriptorNuclearFuel__waste__type,
	common_base__FGItemDescriptorNuclearFuel__type,
} from '../../../common/classes/CoreUObject/FGItemDescriptorNuclearFuel';

import {
	None__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGItemDescriptorNuclearFuel__type =
	FGItemDescriptorNuclearFuel__merged__type & {
		mSpentFuelClass:
			| common_base__FGItemDescriptorNuclearFuel__waste__type
			| None__type;
	};

export type FGItemDescriptorNuclearFuel__merged__type =
	common_base__FGItemDescriptorNuclearFuel__type &
		FGItemDescriptor__FGResourceDescriptor__type;

export type FGItemDescriptorNuclearFuel__NativeClass =
	NativeClass__type & {
		Classes: [
			FGItemDescriptorNuclearFuel__type,
			FGItemDescriptorNuclearFuel__type,
			FGItemDescriptorNuclearFuel__type,
		];
	};
