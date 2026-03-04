import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGEquipmentZipline__type
} from '../../../common/classes/CoreUObject/FGEquipmentZipline.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGEquipmentZipline__type = FGEquipmentZipline__merged__type & {
	mShouldPlayDeactivateSound: boolean__type,
};

export type FGEquipmentZipline__merged__type
	= common_base__FGEquipmentZipline__type & FGEquipment__base__type;

export type FGEquipmentZipline__NativeClass
	= NativeClass__type & {
		Classes: [FGEquipmentZipline__type],
	};
