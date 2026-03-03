import {integer_string__type} from '../../common/scalar.ts';

import {common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor.ts';

export type common_base__FGEquipmentDescriptor__type =
	common_base__FGEquipmentDescriptor__base__type;

export type common_base__FGEquipmentDescriptor__base__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};
