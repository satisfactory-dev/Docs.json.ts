import {
	FGItemDescriptor__FGResourceDescriptor__type,
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from './FGItemDescriptor';

import {integer_string__type} from '../../common/scalar';

import {NativeClass__type} from '../../common/unassigned';

export type FGEquipmentDescriptor__type = FGEquipmentDescriptor__base__type;

export type FGEquipmentDescriptor__base__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};

export type FGEquipmentDescriptor__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptor__FGResourceDescriptor__type,
		...FGItemDescriptor__FGResourceDescriptor__type[],
	];
};
