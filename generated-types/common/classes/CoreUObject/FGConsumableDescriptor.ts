import {decimal_string__type} from '../../common/scalar.ts';

import {pitch_yaw_roll__type, xyz__type} from '../../common/unassigned.ts';

import {common_base__FGEquipmentDescriptor__base__type} from './FGEquipmentDescriptor.ts';

export type common_base__FGConsumableDescriptor__type =
	common_base__FGConsumableDescriptor__base__type;

export type common_base__FGConsumableDescriptor__base__type =
	common_base__FGEquipmentDescriptor__base__type & {
		mCustomHandsMeshScale: decimal_string__type;
		mCustomRotation: pitch_yaw_roll__type;
		mCustomLocation: xyz__type;
	};

export type common_base__FGConsumableDescriptor__healing__type =
	common_base__FGConsumableDescriptor__base__type & {
		mHealthGain: decimal_string__type;
	};
