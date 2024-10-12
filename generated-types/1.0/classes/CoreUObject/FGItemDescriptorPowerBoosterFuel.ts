import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGItemDescriptorPowerBoosterFuel__type =
	FGItemDescriptor__FGResourceDescriptor__type & {
		mBoostPercentage: decimal_string__type;
		mBoostDuration: decimal_string__type;
	};

export type FGItemDescriptorPowerBoosterFuel__NativeClass =
	NativeClass__type & {
		Classes: [FGItemDescriptorPowerBoosterFuel__type];
	};
