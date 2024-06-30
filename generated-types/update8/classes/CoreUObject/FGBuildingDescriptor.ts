import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../common/unassigned';

export type FGBuildingDescriptor__type =
	FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		ClassName: Exclude<
			string,
			| ''
			| 'Desc_ConveyorPole_C'
			| 'Desc_PipelineSupport_C'
			| 'Desc_PipeSupportStackable_C'
			| 'Desc_HyperPoleStackable_C'
			| 'Desc_PipeHyperSupport_C'
			| 'Desc_ConveyorPoleStackable_C'
		>;
		mForm: 'RF_INVALID';
		mSubCategories: [
			UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				StringStartsWith<
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Special/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Walls/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Power/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Production/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Organisation/'
				>
			>,
			...UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				StringStartsWith<
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Special/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Walls/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Power/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Production/'
					| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Organisation/'
				>
			>[],
		];
	};

export type FGBuildingDescriptor__NativeClass = NativeClass__type & {
	Classes: [FGBuildingDescriptor__type, ...FGBuildingDescriptor__type[]];
};
