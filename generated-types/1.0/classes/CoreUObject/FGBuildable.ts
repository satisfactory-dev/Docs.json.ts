import {
	mClearanceData__type,
	FGBuildable__consumes_power_base__version_1__type,
} from '../../common/unassigned';

import {FGBuildableAttachmentMergerSplitter__with_inventory_size__type} from './FGBuildableAttachmentMergerSplitter';

import {
	boolean__type,
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	common_base__FGBuildable__base__type,
	common_base__FGBuildable__circuits_base__type,
	common_base__FGBuildable__docking_station_base__type,
	common_base__FGBuildable__extractor_base__type,
	common_base__FGBuildable__extractor_base__shared__type,
	common_base__FGBuildable__occupied__type,
	common_base__FGBuildable__pipeline_accessory__type,
	common_base__FGBuildable__pipeline_accessory__base__type,
	common_base__FGBuildable__pipeline_flow_accessory__type,
	common_base__FGBuildable__pole__base__no_static__type,
	common_base__FGBuildable__pole__base__with_static__type,
	common_base__FGBuildable__power_switch__base__type,
	common_base__FGBuildable__splitter__base__type,
	common_base__FGBuildable__tiered__type,
} from '../../../common/classes/CoreUObject/FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildable__base__type =
	common_base__FGBuildable__base__type & {
		mAlternativeMaterialRecipes?:
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
		bForceLegacyBuildEffect: boolean__type;
		bForceBuildEffectSolo: boolean__type;
		mInteractionRegisterPlayerWithCircuit: boolean__type;
		mSkipBuildEffect?: boolean__type;
		mForceNetUpdateOnRegisterPlayer?: boolean__type;
		mToggleDormancyOnInteraction?: boolean__type;
		mIsMultiSpawnedBuildable?: boolean__type;
		mShouldShowAttachmentPointVisuals?: boolean__type;
		mManagedByLightweightBuildableSubsystem: boolean__type;
		mRemoveBuildableFromSubsystemOnDismantle: boolean__type;
		mHasBeenRemovedFromSubsystem: boolean__type;
		mReplicatedBuiltInsideBlueprintDesigner: boolean__type;
		mClearanceData: mClearanceData__type;
		mTimelapseBucketId: integer_string__type;
		mTimelapseDelay: decimal_string__type;
		mAlienOverClockingZOffset: decimal_string__type;
		mAlienOverClockingAttenuationScalingFactor: decimal_string__type;
		mAlienOverClockingVolumeDB_RTPC: decimal_string__type;
		mAlienOverClockingHighpass_RTPC: decimal_string__type;
		mAlienOverClockingPitch_RTPC: decimal_string__type;
	};

export type FGBuildable__circuits_base__type =
	FGBuildable__circuits_base__merged__type;

export type FGBuildable__circuits_base__merged__type =
	common_base__FGBuildable__circuits_base__type &
		FGBuildable__base__type;

export type FGBuildable__consumes_power_base__type =
	FGBuildable__consumes_power_base__version_1__type & FGBuildable__base__type;

export type FGBuildable__docking_station_base__type =
	common_base__FGBuildable__docking_station_base__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildable__extractor_base__type =
	FGBuildable__extractor_base__merged__type;

export type FGBuildable__extractor_base__merged__type =
	common_base__FGBuildable__extractor_base__type &
		FGBuildable__extractor_base__shared__type;

export type FGBuildable__extractor_base__shared__type =
	FGBuildable__extractor_base__shared__merged__type;

export type FGBuildable__extractor_base__shared__merged__type =
	common_base__FGBuildable__extractor_base__shared__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildable__occupied__final__type =
	FGBuildable__occupied__merged__type;

export type FGBuildable__occupied__merged__type =
	common_base__FGBuildable__occupied__type &
		FGBuildable__base__type;

export type FGBuildable__pipeline_accessory__type =
	common_base__FGBuildable__pipeline_accessory__type &
		FGBuildable__pipeline_accessory__base__type;

export type FGBuildable__pipeline_accessory__base__type =
	common_base__FGBuildable__pipeline_accessory__base__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildable__pipeline_flow_accessory__type =
	FGBuildable__pipeline_flow_accessory__merged__type & {
		mUpdateAudioFlowTime: decimal_string__type;
	};

export type FGBuildable__pipeline_flow_accessory__merged__type =
	common_base__FGBuildable__pipeline_flow_accessory__type &
		FGBuildable__pipeline_accessory__type;

export type FGBuildable__pole__base__no_static__type =
	FGBuildable__pole__base__no_static__merged__type;

export type FGBuildable__pole__base__no_static__merged__type =
	common_base__FGBuildable__pole__base__no_static__type &
		FGBuildable__base__type;

export type FGBuildable__pole__base__with_static__merged__type =
	common_base__FGBuildable__pole__base__with_static__type &
		FGBuildable__pole__base__no_static__merged__type;

export type FGBuildable__power_switch__base__type =
	FGBuildable__power_switch__base__merged__type;

export type FGBuildable__power_switch__base__merged__type =
	common_base__FGBuildable__power_switch__base__type &
		FGBuildable__circuits_base__type;

export type FGBuildable__splitter__base__type =
	FGBuildable__splitter__base__merged__type;

export type FGBuildable__splitter__base__merged__type =
	common_base__FGBuildable__splitter__base__type &
		FGBuildable__base__type &
		FGBuildableAttachmentMergerSplitter__with_inventory_size__type;

export type FGBuildable__tiered__type = FGBuildable__tiered__merged__type;

export type FGBuildable__tiered__merged__type =
	common_base__FGBuildable__tiered__type &
		FGBuildable__base__type;

export type FGBuildable__NativeClass = NativeClass__type & {
	Classes: [
		(
			| FGBuildable__base__type
			| FGBuildable__occupied__final__type
			| FGBuildable__tiered__type
		),
		...(
			| FGBuildable__base__type
			| FGBuildable__occupied__final__type
			| FGBuildable__tiered__type
		)[],
	];
};
