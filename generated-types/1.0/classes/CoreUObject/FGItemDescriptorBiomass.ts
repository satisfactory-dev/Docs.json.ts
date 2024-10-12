import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGItemDescriptorBiomass__type =
	FGItemDescriptor__FGResourceDescriptor__type;

export type FGItemDescriptorBiomass__NativeClass =
	NativeClass__type & {
		Classes: [
			FGItemDescriptor__FGResourceDescriptor__type,
			...FGItemDescriptor__FGResourceDescriptor__type[],
		];
	};
