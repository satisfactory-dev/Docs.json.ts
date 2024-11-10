import {
	FGItemDescriptor__FGResourceDescriptor__type,
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from './FGItemDescriptor';

import {
	common_base__FGEquipmentDescriptor__base__type,
	common_base__FGEquipmentDescriptor__type,
} from '../../../common/classes/CoreUObject/FGEquipmentDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentDescriptor__type = FGEquipmentDescriptor__merged__type;

export type FGEquipmentDescriptor__base__type =
	FGEquipmentDescriptor__base__merged__type;

export type FGEquipmentDescriptor__base__merged__type =
	common_base__FGEquipmentDescriptor__base__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type FGEquipmentDescriptor__merged__type =
	common_base__FGEquipmentDescriptor__type &
		FGEquipmentDescriptor__base__type;

export type FGEquipmentDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			FGItemDescriptor__FGResourceDescriptor__type,
			...FGItemDescriptor__FGResourceDescriptor__type[],
		];
	};
