import {FGEquipmentDescriptor__base__type} from './FGEquipmentDescriptor';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	pitch_yaw_roll__type,
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGConsumableDescriptor__type = FGConsumableDescriptor__base__type;

export type FGConsumableDescriptor__base__type =
	FGEquipmentDescriptor__base__type & {
		mCustomHandsMeshScale: decimal_string__type;
		mCustomRotation: pitch_yaw_roll__type;
		mCustomLocation: xyz__type;
	};

export type FGConsumableDescriptor__healing__type =
	FGConsumableDescriptor__base__type & {
		mHealthGain: decimal_string__type;
	};

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
