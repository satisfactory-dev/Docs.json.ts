import {
	decimal_string__signed__type,
	boolean__type,
	decimal_string__type,
	integer_string__type,
	integer_string__signed__type,
} from '../../common/scalar';

import {
	mClearanceData__type,
	empty_object__type,
	xyz__type,
	None__type,
} from '../../common/unassigned';

import {StringPassedRegExp} from '../../utils/validators';

import {
	UnrealEngineString__array__type,
	class__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildable__base__type = class__type & {
	MaxRenderDistance: decimal_string__signed__type;
	mAlternativeMaterialRecipes:
		| ''
		| [
				{
					mMaterial:
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Asphalt.MaterialDesc_Foundation_Asphalt_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Concrete.MaterialDesc_Foundation_Concrete_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Default.MaterialDesc_Foundation_Default_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_GripMetal.MaterialDesc_Foundation_GripMetal_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_PolishedConcrete.MaterialDesc_Foundation_PolishedConcrete_C';
					mRecipe:
						| '/Game/FactoryGame/Recipes/Buildings/Foundations/Recipe_QuarterPipeCorner_01.Recipe_QuarterPipeCorner_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x1.Recipe_QuarterPipeMiddle_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x2.Recipe_QuarterPipeMiddle_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x4.Recipe_QuarterPipeMiddle_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeInCorner_Asphalt_8x4.Recipe_QuarterPipeInCorner_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x1.Recipe_QuarterPipeMiddle_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x2.Recipe_QuarterPipeMiddle_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x4.Recipe_QuarterPipeMiddle_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x1.Recipe_QuarterPipeMiddleInCorner_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x2.Recipe_QuarterPipeMiddleInCorner_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x4.Recipe_QuarterPipeMiddleInCorner_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x1.Recipe_QuarterPipeMiddle_Ficsit_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x2.Recipe_QuarterPipeMiddle_Ficsit_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x4.Recipe_QuarterPipeMiddle_Ficsit_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x1.Recipe_QuarterPipeMiddle_Grip_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x2.Recipe_QuarterPipeMiddle_Grip_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x4.Recipe_QuarterPipeMiddle_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x1.Recipe_QuarterPipeMiddleInCorner_Grip_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x2.Recipe_QuarterPipeMiddleInCorner_Grip_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x4.Recipe_QuarterPipeMiddleInCorner_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x1.Recipe_QuarterPipeMiddleOutCorner_Grip_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x2.Recipe_QuarterPipeMiddleOutCorner_Grip_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x4.Recipe_QuarterPipeMiddleOutCorner_Grip_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeInCorner_Grip_8x4.Recipe_QuarterPipeInCorner_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x1.Recipe_QuarterPipeMiddle_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x2.Recipe_QuarterPipeMiddle_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x4.Recipe_QuarterPipeMiddle_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeInCorner_ConcretePolished_8x4.Recipe_QuarterPipeInCorner_ConcretePolished_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x1.Recipe_Stair_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x1_01.Recipe_Stair_FicsitSet_8x1_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x1.Recipe_Stair_GripMetal_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x1.Recipe_Stair_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x2.Recipe_Stair_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x2_01.Recipe_Stair_FicsitSet_8x2_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x2.Recipe_Stair_GripMetal_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x2.Recipe_Stair_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x4.Recipe_Stair_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x4_01.Recipe_Stair_FicsitSet_8x4_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x4.Recipe_Stair_GripMetal_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x4.Recipe_Stair_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x1.Recipe_Stair_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x1_01.Recipe_Stair_FicsitSet_8x1_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x1.Recipe_Stair_GripMetal_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x1.Recipe_Stair_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x2.Recipe_Stair_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x2_01.Recipe_Stair_FicsitSet_8x2_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x2.Recipe_Stair_GripMetal_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x2.Recipe_Stair_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x4.Recipe_Stair_Asphalt_8x4_C';
				},
				...{
					mMaterial:
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Asphalt.MaterialDesc_Foundation_Asphalt_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Concrete.MaterialDesc_Foundation_Concrete_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_Default.MaterialDesc_Foundation_Default_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_GripMetal.MaterialDesc_Foundation_GripMetal_C'
						| '/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_PolishedConcrete.MaterialDesc_Foundation_PolishedConcrete_C';
					mRecipe:
						| '/Game/FactoryGame/Recipes/Buildings/Foundations/Recipe_QuarterPipeCorner_01.Recipe_QuarterPipeCorner_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x1.Recipe_QuarterPipeMiddle_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x2.Recipe_QuarterPipeMiddle_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddle_Asphalt_8x4.Recipe_QuarterPipeMiddle_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4.Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4.Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_QuarterPipeInCorner_Asphalt_8x4.Recipe_QuarterPipeInCorner_Asphalt_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x1.Recipe_QuarterPipeMiddle_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x2.Recipe_QuarterPipeMiddle_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddle_Concrete_8x4.Recipe_QuarterPipeMiddle_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x1.Recipe_QuarterPipeMiddleInCorner_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x2.Recipe_QuarterPipeMiddleInCorner_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleInCorner_Concrete_8x4.Recipe_QuarterPipeMiddleInCorner_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4.Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x1.Recipe_QuarterPipeMiddle_Ficsit_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x2.Recipe_QuarterPipeMiddle_Ficsit_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddle_Ficsit_4x4.Recipe_QuarterPipeMiddle_Ficsit_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4.Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4.Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x1.Recipe_QuarterPipeMiddle_Grip_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x2.Recipe_QuarterPipeMiddle_Grip_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddle_Grip_8x4.Recipe_QuarterPipeMiddle_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x1.Recipe_QuarterPipeMiddleInCorner_Grip_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x2.Recipe_QuarterPipeMiddleInCorner_Grip_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleInCorner_Grip_8x4.Recipe_QuarterPipeMiddleInCorner_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x1.Recipe_QuarterPipeMiddleOutCorner_Grip_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x2.Recipe_QuarterPipeMiddleOutCorner_Grip_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeMiddleOutCorner_Grip_4x4.Recipe_QuarterPipeMiddleOutCorner_Grip_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_QuarterPipeInCorner_Grip_8x4.Recipe_QuarterPipeInCorner_Grip_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x1.Recipe_QuarterPipeMiddle_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x2.Recipe_QuarterPipeMiddle_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddle_PolishedConcrete_8x4.Recipe_QuarterPipeMiddle_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4.Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4.Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_QuarterPipeInCorner_ConcretePolished_8x4.Recipe_QuarterPipeInCorner_ConcretePolished_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x1.Recipe_Stair_Concrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x1_01.Recipe_Stair_FicsitSet_8x1_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x1.Recipe_Stair_GripMetal_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x1.Recipe_Stair_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x2.Recipe_Stair_Concrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x2_01.Recipe_Stair_FicsitSet_8x2_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x2.Recipe_Stair_GripMetal_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x2.Recipe_Stair_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/ConcreteSet/Recipe_Stair_Concrete_8x4.Recipe_Stair_Concrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x4_01.Recipe_Stair_FicsitSet_8x4_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x4.Recipe_Stair_GripMetal_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x4.Recipe_Stair_PolishedConcrete_8x4_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x1.Recipe_Stair_Asphalt_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x1_01.Recipe_Stair_FicsitSet_8x1_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x1.Recipe_Stair_GripMetal_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x1.Recipe_Stair_PolishedConcrete_8x1_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x2.Recipe_Stair_Asphalt_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/FicsitSet/Recipe_Stair_FicsitSet_8x2_01.Recipe_Stair_FicsitSet_8x2_01_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/GripMetal/Recipe_Stair_GripMetal_8x2.Recipe_Stair_GripMetal_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/PolishedConcreteSet/Recipe_Stair_PolishedConcrete_8x2.Recipe_Stair_PolishedConcrete_8x2_C'
						| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x4.Recipe_Stair_Asphalt_8x4_C';
				}[],
		];
	mContainsComponents: boolean__type;
	mIsConsideredForBaseWeightValue: decimal_string__type;
	bForceLegacyBuildEffect: boolean__type;
	bForceBuildEffectSolo: boolean__type;
	mBuildEffectSpeed: decimal_string__type;
	mAllowColoring: boolean__type;
	mAllowPatterning: boolean__type;
	mInteractionRegisterPlayerWithCircuit: boolean__type;
	mSkipBuildEffect: boolean__type;
	mForceNetUpdateOnRegisterPlayer: boolean__type;
	mToggleDormancyOnInteraction: boolean__type;
	mIsMultiSpawnedBuildable: boolean__type;
	mShouldShowAttachmentPointVisuals: boolean__type;
	mCanContainLightweightInstances: boolean__type;
	mManagedByLightweightBuildableSubsystem: boolean__type;
	mRemoveBuildableFromSubsystemOnDismantle: boolean__type;
	mHasBeenRemovedFromSubsystem: boolean__type;
	mAffectsOcclusion: boolean__type;
	mOcclusionShape:
		| 'ROCS_Box'
		| 'ROCS_Ramp'
		| 'ROCS_Box_Special'
		| 'ROCS_CornerRamp';
	mScaleCustomOffset: decimal_string__type;
	mCustomScaleType: 'ROCSS_Center' | 'ROCSS_Top' | 'ROCSS_Bot';
	mOcclusionBoxInfo:
		| ''
		| [
				{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				},
				...{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				}[],
		];
	mAttachmentPoints: '';
	mReplicatedBuiltInsideBlueprintDesigner: boolean__type;
	mInteractingPlayers: '';
	mIsUseable: boolean__type;
	mClearanceData: mClearanceData__type;
	mHideOnBuildEffectStart: boolean__type;
	mShouldModifyWorldGrid: boolean__type;
	mTimelapseBucketId: integer_string__type;
	mTimelapseDelay: decimal_string__type;
	mAlienOverClockingZOffset: decimal_string__type;
	mAlienOverClockingAttenuationScalingFactor: decimal_string__type;
	mAlienOverClockingVolumeDB_RTPC: decimal_string__type;
	mAlienOverClockingHighpass_RTPC: decimal_string__type;
	mAlienOverClockingPitch_RTPC: decimal_string__type;
	mBlueprintBuildEffectID: integer_string__signed__type;
};

export type FGBuildable__circuits_base__type = FGBuildable__base__type & {
	mOnCircuitsChanged: empty_object__type;
	mIsBridgeConnected: boolean__type;
	mConnections: '';
};

export type FGBuildable__consumes_power_base__type =
	FGBuildable__base__type & {
		mPowerConsumption: decimal_string__type;
		mPowerConsumptionExponent: decimal_string__type;
		mDoesHaveShutdownAnimation: boolean__type;
		mOnHasPowerChanged: empty_object__type;
		mOnHasProductionChanged: empty_object__type;
		mOnHasStandbyChanged: empty_object__type;
		mMinimumProducingTime: decimal_string__type;
		mMinimumStoppedTime: decimal_string__type;
		mCanEverMonitorProductivity: boolean__type;
		mCanChangePotential: boolean__type;
		mMinPotential: decimal_string__type;
		mMaxPotential: decimal_string__type;
		mFluidStackSizeDefault: 'SS_FLUID';
		mFluidStackSizeMultiplier: integer_string__type;
		mEffectUpdateInterval: decimal_string__type;
		mDefaultProductivityMeasurementDuration: decimal_string__type;
		mLastProductivityMeasurementProduceDuration: decimal_string__type;
		mLastProductivityMeasurementDuration: decimal_string__type;
		mCurrentProductivityMeasurementProduceDuration: decimal_string__type;
		mCurrentProductivityMeasurementDuration: decimal_string__type;
		mProductivityMonitorEnabled: boolean__type;
		mCachedSkeletalMeshes: '';
		mAddToSignificanceManager: boolean__type;
		mAlienOverClockingParticleEffects: '';
		mSignificanceRange: decimal_string__type;
		mTickExponent: decimal_string__type;
		mProductionBoostPowerConsumptionExponent: decimal_string__type;
		mOnPendingPotentialChanged: empty_object__type;
		mOnPendingProductionBoostChanged: empty_object__type;
		mOnCurrentProductivityChanged: empty_object__type;
		mCanChangeProductionBoost: boolean__type;
		mBaseProductionBoost: decimal_string__type;
		mPotentialShardSlots: integer_string__type;
		mProductionShardSlotSize: integer_string__type;
		mProductionShardBoostMultiplier: decimal_string__type;
		mHasInventoryPotential: boolean__type;
		mIsTickRateManaged: boolean__type;
		mOverridePotentialShardSlots: boolean__type;
		mOverrideProductionShardSlotSize: boolean__type;
	};

export type FGBuildable__docking_station_base__type =
	FGBuildable__consumes_power_base__type & {
		mStorageSizeX: integer_string__type;
		mStorageSizeY: integer_string__type;
		mTransferSpeed: decimal_string__type;
		mStackTransferSize: decimal_string__type;
	};

export type FGBuildable__extractor_base__type =
	FGBuildable__extractor_base__shared__type & {
		mPipeOutputConnections: '';
		mExtractStartupTime: decimal_string__signed__type;
		mExtractStartupTimer: decimal_string__type;
		mExtractCycleTime: decimal_string__type;
		mItemsPerCycle: integer_string__type;
	};

export type FGBuildable__extractor_base__shared__type =
	FGBuildable__consumes_power_base__type & {
		mAllowedResourceForms: [
			'RF_LIQUID' | 'RF_SOLID' | 'RF_GAS' | 'RF_HEAT',
			...('RF_LIQUID' | 'RF_SOLID' | 'RF_GAS' | 'RF_HEAT')[],
		];
		mOnlyAllowCertainResources: boolean__type;
		mAllowedResources: '' | UnrealEngineString__array__type;
		mExtractorTypeName: None__type | 'Miner';
		mTryFindMissingResource: boolean__type;
	};

export type FGBuildable__occupied__type = FGBuildable__base__type & {
	mOccupiedText: StringPassedRegExp<' occupied!?$'>;
};

export type FGBuildable__pipeline_accessory__type =
	FGBuildable__pipeline_accessory__base__type & {
		mRadius: decimal_string__type;
		mFluidBoxVolume: decimal_string__type;
		mFluidBox: empty_object__type;
		mPipeConnections: '';
	};

export type FGBuildable__pipeline_accessory__base__type =
	FGBuildable__consumes_power_base__type & {
		mFluidBox: empty_object__type;
		mPipeConnections: '';
	};

export type FGBuildable__pipeline_flow_accessory__type =
	FGBuildable__pipeline_accessory__type & {
		mLastFlowUpdate: decimal_string__type;
		mUpdateFlowTime: decimal_string__type;
		mAnimSpeed: decimal_string__type;
		mLastFlowValue: decimal_string__type;
		mTimeScaleOffset: decimal_string__type;
		mMaxPressure: decimal_string__type;
		mDesignPressure: decimal_string__type;
		mDefaultFlowLimit: decimal_string__type;
		mUserFlowLimit: decimal_string__signed__type;
		mMinimumFlowPercentForStandby: decimal_string__type;
		mIndicatorData: empty_object__type;
		mPistonAudioTimer?: empty_object__type;
		mUpdateAudioFlowTime: decimal_string__type;
	};

export type FGBuildable__pole__base__type =
	FGBuildable__pole__base__no_static__type & {
		mUseStaticHeight: boolean__type;
	};

export type FGBuildable__pole__base__no_static__type =
	FGBuildable__base__type & {
		mCanStack: boolean__type;
		mStackHeight: decimal_string__type;
	};

export type FGBuildable__power_switch__base__type =
	FGBuildable__circuits_base__type & {
		mTextRenderers: '';
		bIsSignificant: boolean__type;
		mMaxCharacters: integer_string__type;
		mOnIsSwitchOnChanged: empty_object__type;
		mOnIsConnectedChanged: empty_object__type;
		mOnBuildingTagChanged: empty_object__type;
		mIsSwitchOn: boolean__type;
		mHasBuildingTag: boolean__type;
		mBuildingTag: '';
	};

export type FGBuildable__splitter__base__type = FGBuildable__base__type & {
	mCurrentOutputIndex: integer_string__signed__type;
	mInventorySize: integer_string__type;
};

export type FGBuildable__tiered__type = FGBuildable__base__type & {
	Tier: integer_string__type;
};

export type FGBuildable__NativeClass = NativeClass__type & {
	Classes: [
		(
			| FGBuildable__base__type
			| FGBuildable__occupied__type
			| FGBuildable__tiered__type
		),
		...(
			| FGBuildable__base__type
			| FGBuildable__occupied__type
			| FGBuildable__tiered__type
		)[],
	];
};
