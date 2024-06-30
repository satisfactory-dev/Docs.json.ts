import {decimal_string__type, boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../common/unassigned';

export type FGParachute__type = FGEquipment__base__type & {
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
	DeployedVFXComponents: '';
	mUseDistanceOverride: decimal_string__type;
	mIsDeployed: boolean__type;
};

export type FGParachute__NativeClass = NativeClass__type & {
	Classes: [FGParachute__type];
};
