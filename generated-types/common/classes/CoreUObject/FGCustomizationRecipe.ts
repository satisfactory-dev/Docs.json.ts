import {StringPassedRegExp} from '../../utils/validators';

import {decimal_string__type} from '../../common/scalar';

import {
	mEventType__optional_csv__type,
	ItemClass__type,
	class__no_description__type,
} from '../../common/unassigned';

export type common_base__FGCustomizationRecipe__FGRecipe__type =
	class__no_description__type & {
		FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(?:-?[A-Z][A-Za-z0-9_]+/)*(Recipe_[A-Za-z0-9_]+)\\.\\1_C$'>;
		mDisplayName: Exclude<string, ''>;
		mIngredients: '' | ItemClass__type;
		mProduct: '' | ItemClass__type;
		mManufacturingMenuPriority: decimal_string__type;
		mManufactoringDuration: decimal_string__type;
		mManualManufacturingMultiplier: decimal_string__type;
		mRelevantEvents: mEventType__optional_csv__type;
		mVariablePowerConsumptionConstant: decimal_string__type;
		mVariablePowerConsumptionFactor: decimal_string__type;
	};
