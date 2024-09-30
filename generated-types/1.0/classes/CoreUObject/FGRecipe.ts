import {
	ItemClass__amount_required__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGCustomizationRecipe__FGRecipe__type} from './FGCustomizationRecipe';

export type FGRecipe__type = FGCustomizationRecipe__FGRecipe__type & {
	mIngredients: ItemClass__amount_required__type | '';
	mProduct: ItemClass__amount_required__type;
};

export type FGRecipe__NativeClass = NativeClass__type & {
	Classes: [FGRecipe__type, ...FGRecipe__type[]];
};
