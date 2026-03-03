import {v1_0_base__FGChargedWeapon__type} from '../../common/unassigned.ts';

import {boolean__type} from '../../../common/common/scalar.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGChargedWeapon__type = v1_0_base__FGChargedWeapon__type & {
	bHasDispensedProjectiles: boolean__type;
};

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
