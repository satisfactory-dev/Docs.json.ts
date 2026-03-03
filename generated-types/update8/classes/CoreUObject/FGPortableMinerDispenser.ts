import {FGEquipment__placeable__type} from './FGEquipment.ts';

import {common_base__FGPortableMinerDispenser__type} from '../../../common/classes/CoreUObject/FGPortableMinerDispenser.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGPortableMinerDispenser__type =
	FGPortableMinerDispenser__merged__type;

export type FGPortableMinerDispenser__merged__type =
	common_base__FGPortableMinerDispenser__type &
		FGEquipment__placeable__type;

export type FGPortableMinerDispenser__NativeClass =
	NativeClass__type & {
		Classes: [FGPortableMinerDispenser__type];
	};
