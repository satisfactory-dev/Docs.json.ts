import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor.js';

import {common_base__FGItemDescriptorBiomass__type} from '../../../common/classes/CoreUObject/FGItemDescriptorBiomass.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGItemDescriptorBiomass__type =
	FGItemDescriptorBiomass__merged__type;

export type FGItemDescriptorBiomass__merged__type =
	common_base__FGItemDescriptorBiomass__type &
		FGItemDescriptor__FGResourceDescriptor__type;

export type FGItemDescriptorBiomass__NativeClass =
	NativeClass__type & {
		Classes: [
			FGItemDescriptor__FGResourceDescriptor__type,
			...FGItemDescriptor__FGResourceDescriptor__type[],
		];
	};
