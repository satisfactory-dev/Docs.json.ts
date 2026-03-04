import type {
	v1_0_base__FGChargedWeapon__type
} from '../../common/unassigned.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGChargedWeapon__type = v1_0_base__FGChargedWeapon__type & {
	bHasDispensedProjectiles: boolean__type,
};

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type],
};
