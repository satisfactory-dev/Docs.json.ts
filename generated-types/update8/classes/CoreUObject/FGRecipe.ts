import {FGCustomizationRecipe__FGRecipe__type} from './FGCustomizationRecipe';

import {
	ItemClass__amount_required__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGRecipe__type} from '../../../common/classes/CoreUObject/FGRecipe';

export type FGRecipe__type = FGRecipe__merged__type & {
	mIngredients: ItemClass__amount_required__type;
};

export type FGRecipe__merged__type = common_base__FGRecipe__type &
	FGCustomizationRecipe__FGRecipe__type;

export type FGRecipe__NativeClass = NativeClass__type & {
	Classes: [FGRecipe__type, ...FGRecipe__type[]];
};
