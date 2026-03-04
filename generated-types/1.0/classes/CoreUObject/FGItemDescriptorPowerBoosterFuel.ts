import type {
	FGItemDescriptor__FGResourceDescriptor__type
} from './FGItemDescriptor.js';

import type {
	decimal_string__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGItemDescriptorPowerBoosterFuel__type
	= FGItemDescriptor__FGResourceDescriptor__type & {
		mBoostPercentage: decimal_string__type,
		mBoostDuration: decimal_string__type,
	};

export type FGItemDescriptorPowerBoosterFuel__NativeClass
	= NativeClass__type & {
		Classes: [FGItemDescriptorPowerBoosterFuel__type],
	};
