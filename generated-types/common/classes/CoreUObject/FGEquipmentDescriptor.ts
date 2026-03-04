import {integer_string__type} from '../../common/scalar.js';

import {common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor.js';

export type common_base__FGEquipmentDescriptor__type =
	common_base__FGEquipmentDescriptor__base__type;

export type common_base__FGEquipmentDescriptor__base__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};
