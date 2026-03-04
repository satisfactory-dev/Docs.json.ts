import {FGEquipment__base__type} from './FGEquipment.js';

import {boolean__type} from '../../../common/common/scalar.js';

import {common_base__FGEquipmentZipline__type} from '../../../common/classes/CoreUObject/FGEquipmentZipline.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGEquipmentZipline__type = FGEquipmentZipline__merged__type & {
	mShouldPlayDeactivateSound: boolean__type;
};

export type FGEquipmentZipline__merged__type =
	common_base__FGEquipmentZipline__type & FGEquipment__base__type;

export type FGEquipmentZipline__NativeClass =
	NativeClass__type & {
		Classes: [FGEquipmentZipline__type];
	};
