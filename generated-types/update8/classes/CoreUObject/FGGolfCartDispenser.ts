import {boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGGolfCartDispenser__type = FGEquipment__base__type & {
	mMaxSpawnDistance: decimal_string__type;
	mSpawningClearance: decimal_string__type;
	mBuildDisqualifierText: 'Vehicles cannot be built or deployed on top of existing vehicles.';
	canDisplayDisqualifier: boolean__type;
	mPlaceDistanceMax: decimal_string__type;
};

export type FGGolfCartDispenser__NativeClass =
	NativeClass__type & {
		Classes: [FGGolfCartDispenser__type, ...FGGolfCartDispenser__type[]];
	};
