import {
	v1_0_base__FGVehicleDescriptor__powered_no_inventory__type,
	v1_0_base__FGVehicleDescriptor__unfueled_with_inventory__type,
	v1_0_base__FGVehicleDescriptor__fueled_with_inventory__type,
} from '../../common/unassigned';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGVehicleDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| v1_0_base__FGVehicleDescriptor__powered_no_inventory__type
				| v1_0_base__FGVehicleDescriptor__unfueled_with_inventory__type
				| v1_0_base__FGVehicleDescriptor__fueled_with_inventory__type
			),
			...(
				| v1_0_base__FGVehicleDescriptor__powered_no_inventory__type
				| v1_0_base__FGVehicleDescriptor__unfueled_with_inventory__type
				| v1_0_base__FGVehicleDescriptor__fueled_with_inventory__type
			)[],
		];
	};
