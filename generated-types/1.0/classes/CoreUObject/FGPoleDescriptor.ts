import {FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor';

import {common_base__FGPoleDescriptor__type} from '../../../common/classes/CoreUObject/FGPoleDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGPoleDescriptor__type = FGPoleDescriptor__merged__type;

export type FGPoleDescriptor__merged__type =
	common_base__FGPoleDescriptor__type &
		FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type FGPoleDescriptor__NativeClass = NativeClass__type & {
	Classes: [FGPoleDescriptor__type, ...FGPoleDescriptor__type[]];
};
