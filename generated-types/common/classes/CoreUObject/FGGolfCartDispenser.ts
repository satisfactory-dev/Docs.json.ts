import {boolean__type} from '../../common/scalar.js';

import {common_base__FGEquipment__base__type} from './FGEquipment.js';

export type common_base__FGGolfCartDispenser__type =
	common_base__FGEquipment__base__type & {
		mBuildDisqualifierText: Exclude<string, ''>;
		canDisplayDisqualifier: boolean__type;
	};
