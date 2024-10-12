import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGVehicleDescriptor__fueled_with_inventory__type =
	FGVehicleDescriptor__with_inventory__type & {
		mFuelConsumption: decimal_string__type;
	};

export type FGVehicleDescriptor__powered_no_inventory__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mPowerConsumption: {
			Min: decimal_string__type;
			Max: decimal_string__type;
		};
	};

export type FGVehicleDescriptor__unfueled_with_inventory__type =
	FGVehicleDescriptor__with_inventory__type;

export type FGVehicleDescriptor__with_inventory__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mInventorySize: integer_string__type;
	};

export type FGVehicleDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGVehicleDescriptor__powered_no_inventory__type
				| FGVehicleDescriptor__unfueled_with_inventory__type
				| FGVehicleDescriptor__fueled_with_inventory__type
			),
			...(
				| FGVehicleDescriptor__powered_no_inventory__type
				| FGVehicleDescriptor__unfueled_with_inventory__type
				| FGVehicleDescriptor__fueled_with_inventory__type
			)[],
		];
	};
