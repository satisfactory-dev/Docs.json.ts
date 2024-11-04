import {ItemClass__amount_required__type} from '../../common/unassigned';

import {common_base__FGCustomizationRecipe__FGRecipe__type} from './FGCustomizationRecipe';

export type common_base__FGRecipe__type =
	common_base__FGCustomizationRecipe__FGRecipe__type & {
		mProduct: ItemClass__amount_required__type;
	};
