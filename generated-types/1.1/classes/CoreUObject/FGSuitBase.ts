import {
	v1_0_base__FGSuitBase__1_0__mEquipMontage__Montages__AudioEvent__type,
	v1_0_base__FGEquipment__base__type,
	v1_0_base__FGSuitBase__1_0__pre_1_1__type,
} from '../../common/unassigned';

import {boolean__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGSuitBase__type = v1_0_base__FGEquipment__base__type &
	v1_0_base__FGSuitBase__1_0__pre_1_1__type &
	FGSuitBase__mEquipMontage__type;

export type FGSuitBase__mEquipMontage__type =
	v1_0_base__FGSuitBase__1_0__pre_1_1__type & {
		mEquipMontage: {
			Montages: [
				{
					AudioEvent: v1_0_base__FGSuitBase__1_0__mEquipMontage__Montages__AudioEvent__type;
					bSeparate3PAudioEvent: boolean__type;
				},
			];
		};
	};

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
