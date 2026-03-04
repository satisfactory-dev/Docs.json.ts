import {FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor.js';

import {common_base__FGPoleDescriptor__type} from '../../../common/classes/CoreUObject/FGPoleDescriptor.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGPoleDescriptor__type =
	common_base__FGPoleDescriptor__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type FGPoleDescriptor__NativeClass = NativeClass__type & {
	Classes: [FGPoleDescriptor__type, ...FGPoleDescriptor__type[]];
};
