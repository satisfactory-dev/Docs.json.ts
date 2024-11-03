import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

export type common_base__FGBuildingDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		ClassName: common_base__FGBuildingDescriptor__ClassName__type;
		mForm: common_base__FGBuildingDescriptor__mForm__type;
		mSubCategories: common_base__FGBuildingDescriptor__mSubCategories__type;
	};

export type common_base__FGBuildingDescriptor__ClassName__type = Exclude<
	string,
	| ''
	| 'Desc_ConveyorPole_C'
	| 'Desc_PipelineSupport_C'
	| 'Desc_PipeSupportStackable_C'
	| 'Desc_HyperPoleStackable_C'
	| 'Desc_PipeHyperSupport_C'
	| 'Desc_ConveyorPoleStackable_C'
>;

export type common_base__FGBuildingDescriptor__mForm__type = 'RF_INVALID';

export type common_base__FGBuildingDescriptor__mSubCategories__type = [
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
