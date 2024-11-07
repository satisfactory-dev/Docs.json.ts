import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {common_base__FGResourceDescriptor__type} from '../../../common/classes/CoreUObject/FGResourceDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGResourceDescriptor__type = FGResourceDescriptor__merged__type & {
	mManualMiningAudioName: 'Metal' | 'Sam';
};

export type FGResourceDescriptor__merged__type =
	common_base__FGResourceDescriptor__type &
		FGItemDescriptor__FGResourceDescriptor__type;

export type FGResourceDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGResourceDescriptor__type, ...FGResourceDescriptor__type[]];
	};
