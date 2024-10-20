import {StringPassedRegExp} from '../../utils/validators';

import {mEventType__optional_csv__type} from '../../common/unassigned';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	ItemClass__type,
	class__no_description__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGCustomizationRecipe__FGRecipe__type =
	class__no_description__type & {
		FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(?:-?[A-Z][A-Za-z0-9_]+/)*(Recipe_[A-Za-z0-9_]+)\\.\\1_C$'>;
		mDisplayName: Exclude<string, ''>;
		mIngredients: '' | ItemClass__type;
		mProduct: '' | ItemClass__type;
		mManufacturingMenuPriority: decimal_string__type;
		mManufactoringDuration: decimal_string__type;
		mManualManufacturingMultiplier: decimal_string__type;
		mProducedIn:
			| ''
			| [
					(
						| '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C'
						| '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C'
						| '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C'
						| '/Game/FactoryGame/Buildable/Factory/Blender/Build_Blender.Build_Blender_C'
						| '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/HadronCollider/Build_HadronCollider.Build_HadronCollider_C'
						| '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C'
						| '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C'
						| '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C'
						| '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C'
						| '/Script/FactoryGame.FGBuildGun'
						| '/Script/FactoryGame.FGBuildableAutomatedWorkBench'
					),
					...(
						| '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C'
						| '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C'
						| '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C'
						| '/Game/FactoryGame/Buildable/Factory/Blender/Build_Blender.Build_Blender_C'
						| '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/HadronCollider/Build_HadronCollider.Build_HadronCollider_C'
						| '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C'
						| '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C'
						| '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C'
						| '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C'
						| '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C'
						| '/Script/FactoryGame.FGBuildGun'
						| '/Script/FactoryGame.FGBuildableAutomatedWorkBench'
					)[],
			];
		mRelevantEvents: mEventType__optional_csv__type;
		mVariablePowerConsumptionConstant: decimal_string__type;
		mVariablePowerConsumptionFactor: decimal_string__type;
	};

export type FGCustomizationRecipe__NativeClass =
	NativeClass__type & {
		Classes: [
			FGCustomizationRecipe__FGRecipe__type & {
				mDisplayName:
					| 'N/A'
					| 'Custom Slot'
					| 'Swatch 1'
					| 'Swatch 2'
					| 'Swatch 3'
					| 'Swatch 4'
					| 'Swatch 5'
					| 'Swatch 6'
					| 'Swatch 7'
					| 'Swatch 8'
					| 'Swatch 9'
					| 'Swatch 10'
					| 'Swatch 11'
					| 'Swatch 12'
					| 'Swatch 13'
					| 'Swatch 14'
					| 'Swatch 15';
				mProducedIn: [
					'/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C',
				];
			},
			...(FGCustomizationRecipe__FGRecipe__type & {
				mDisplayName:
					| 'N/A'
					| 'Custom Slot'
					| 'Swatch 1'
					| 'Swatch 2'
					| 'Swatch 3'
					| 'Swatch 4'
					| 'Swatch 5'
					| 'Swatch 6'
					| 'Swatch 7'
					| 'Swatch 8'
					| 'Swatch 9'
					| 'Swatch 10'
					| 'Swatch 11'
					| 'Swatch 12'
					| 'Swatch 13'
					| 'Swatch 14'
					| 'Swatch 15';
				mProducedIn: [
					'/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C',
				];
			})[],
		];
	};
