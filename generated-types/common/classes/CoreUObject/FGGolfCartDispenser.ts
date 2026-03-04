import type {
	boolean__type
} from '../../common/scalar.js';

import type {
	common_base__FGEquipment__base__type
} from './FGEquipment.js';

export type common_base__FGGolfCartDispenser__type
	= common_base__FGEquipment__base__type & {
		mBuildDisqualifierText: Exclude<string, ''>,
		canDisplayDisqualifier: boolean__type,
	};
