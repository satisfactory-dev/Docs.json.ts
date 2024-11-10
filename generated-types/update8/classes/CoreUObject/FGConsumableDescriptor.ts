import {FGEquipmentDescriptor__base__type} from './FGEquipmentDescriptor';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	common_base__FGConsumableDescriptor__base__type,
	common_base__FGConsumableDescriptor__type,
} from '../../../common/classes/CoreUObject/FGConsumableDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGConsumableDescriptor__type =
	FGConsumableDescriptor__merged__type;

export type FGConsumableDescriptor__base__type =
	FGConsumableDescriptor__base__merged__type;

export type FGConsumableDescriptor__base__merged__type =
	common_base__FGConsumableDescriptor__base__type &
		FGEquipmentDescriptor__base__type;

export type FGConsumableDescriptor__healing__type =
	FGConsumableDescriptor__base__type & {
		mHealthGain: decimal_string__type;
	};

export type FGConsumableDescriptor__merged__type =
	common_base__FGConsumableDescriptor__type &
		FGConsumableDescriptor__base__type;

export type FGConsumableDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			FGConsumableDescriptor__type | FGConsumableDescriptor__healing__type,
			...(
				| FGConsumableDescriptor__type
				| FGConsumableDescriptor__healing__type
			)[],
		];
	};
