import {FGEquipment__base__type} from './FGEquipment';

import {common_base__FGParachute__type} from '../../../common/classes/CoreUObject/FGParachute';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGParachute__type = FGParachute__merged__type & {
	ArmEquipmentsToSkipAnim: [
		(
			| 'AE_ChainSaw'
			| 'AE_PortableMiner'
			| 'AE_Generic2Hand'
			| 'AE_Nobelisk'
			| 'AE_Rifle'
		),
		...(
			| 'AE_ChainSaw'
			| 'AE_PortableMiner'
			| 'AE_Generic2Hand'
			| 'AE_Nobelisk'
			| 'AE_Rifle'
		)[],
	];
};

export type FGParachute__merged__type =
	common_base__FGParachute__type & FGEquipment__base__type;

export type FGParachute__NativeClass = NativeClass__type & {
	Classes: [FGParachute__type];
};
