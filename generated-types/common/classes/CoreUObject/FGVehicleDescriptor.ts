import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor';

export type common_base__FGVehicleDescriptor__fueled_with_inventory__type =
	common_base__FGVehicleDescriptor__with_inventory__type & {
		mFuelConsumption: decimal_string__type;
	};

export type common_base__FGVehicleDescriptor__powered_no_inventory__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mPowerConsumption: {
			Min: decimal_string__type;
			Max: decimal_string__type;
		};
	};

export type common_base__FGVehicleDescriptor__with_inventory__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mInventorySize: integer_string__type;
	};
