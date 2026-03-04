import type {
	FGItemDescriptor__FGResourceDescriptor__type
} from './FGItemDescriptor.js';

import type {
	common_base__FGResourceDescriptor__type
} from '../../../common/classes/CoreUObject/FGResourceDescriptor.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGResourceDescriptor__type = FGResourceDescriptor__merged__type & {
	mManualMiningAudioName: 'Metal' | 'Sam',
};

export type FGResourceDescriptor__merged__type
	= common_base__FGResourceDescriptor__type
		& FGItemDescriptor__FGResourceDescriptor__type;

export type FGResourceDescriptor__NativeClass
	= NativeClass__type & {
		Classes: [FGResourceDescriptor__type, ...FGResourceDescriptor__type[]],
	};
