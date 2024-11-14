import {FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor';

import {
	common_base__FGVehicleDescriptor__fueled_with_inventory__type,
	common_base__FGVehicleDescriptor__powered_no_inventory__type,
	common_base__FGVehicleDescriptor__with_inventory__type,
} from '../../../common/classes/CoreUObject/FGVehicleDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGVehicleDescriptor__fueled_with_inventory__type =
	FGVehicleDescriptor__fueled_with_inventory__merged__type;

export type FGVehicleDescriptor__fueled_with_inventory__merged__type =
	common_base__FGVehicleDescriptor__fueled_with_inventory__type &
		FGVehicleDescriptor__with_inventory__type;

export type FGVehicleDescriptor__powered_no_inventory__type =
	FGVehicleDescriptor__powered_no_inventory__merged__type;

export type FGVehicleDescriptor__powered_no_inventory__merged__type =
	common_base__FGVehicleDescriptor__powered_no_inventory__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type FGVehicleDescriptor__unfueled_with_inventory__type =
	FGVehicleDescriptor__with_inventory__type;

export type FGVehicleDescriptor__with_inventory__type =
	FGVehicleDescriptor__with_inventory__merged__type;

export type FGVehicleDescriptor__with_inventory__merged__type =
	common_base__FGVehicleDescriptor__with_inventory__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

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
