import {
	v1_0_base__mStatisticGameplayTag__type,
	mStatisticGameplayTag__type,
	v1_0_base__FGSchematic__base__properties__type,
} from '../../common/unassigned';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGSchematic__with_unlocks__type} from '../../../common/classes/CoreUObject/FGSchematic';

export type FGSchematic__type =
	v1_0_base__FGSchematic__base__properties__type & {
		mStatisticGameplayTag:
			| empty_object__type
			| v1_0_base__mStatisticGameplayTag__type
			| mStatisticGameplayTag__type;
	};

export type FGSchematic__with_unlocks__type =
	common_base__FGSchematic__with_unlocks__type &
		FGSchematic__type;

export type FGSchematic__NativeClass = NativeClass__type & {
	Classes: [
		FGSchematic__type | FGSchematic__with_unlocks__type,
		...(FGSchematic__type | FGSchematic__with_unlocks__type)[],
	];
};
