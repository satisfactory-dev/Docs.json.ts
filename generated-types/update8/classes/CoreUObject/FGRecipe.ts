import type {
	FGCustomizationRecipe__FGRecipe__type
} from './FGCustomizationRecipe.js';

import type {
	ItemClass__amount_required__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	common_base__FGRecipe__type
} from '../../../common/classes/CoreUObject/FGRecipe.js';

export type FGRecipe__type = FGRecipe__merged__type & {
	mIngredients: ItemClass__amount_required__type,
};

export type FGRecipe__merged__type = common_base__FGRecipe__type
	& FGCustomizationRecipe__FGRecipe__type;

export type FGRecipe__NativeClass = NativeClass__type & {
	Classes: [FGRecipe__type, ...FGRecipe__type[]],
};
