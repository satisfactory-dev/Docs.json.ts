import {boolean__type} from '../../common/scalar.ts';

import {common_base__FGEquipment__base__type} from './FGEquipment.ts';

export type common_base__FGGolfCartDispenser__type =
	common_base__FGEquipment__base__type & {
		mBuildDisqualifierText: Exclude<string, ''>;
		canDisplayDisqualifier: boolean__type;
	};
