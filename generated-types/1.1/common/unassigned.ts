import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {FGBuildable__base__type} from '../classes/CoreUObject/FGBuildable';

import {FGBuildableDoor__automated__type} from '../classes/CoreUObject/FGBuildableDoor';

import {
	boolean__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
	integer_string__signed__type,
} from '../../common/common/scalar';

import {
	common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__type,
	common_base__FGBuildableGeneratorNuclear__mFuel__base__type,
} from '../../common/classes/CoreUObject/FGBuildableGeneratorNuclear';

import {
	InfinityExtrap__type,
	xyz__type,
	UnrealEngineString__array__type,
	empty_object__type,
	common_base__EditorCurveData__ExternalCurve__type,
	quaternion__type,
	color_decimal__type,
	xyz_array__type,
	None__type,
	ItemClass__amount_required__type,
	common_base__FGBuildableResourceExtractor__miner_mk3__type,
} from '../../common/common/unassigned';

import {
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type,
	common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type,
	common_base__FGSchematic__base__type,
	common_base__FGSchematic__mUnlocks_Class__type,
} from '../../common/classes/CoreUObject/FGSchematic';

import {
	common_base__FGItemDescriptorNuclearFuel__waste__type,
	common_base__FGItemDescriptorNuclearFuel__type,
} from '../../common/classes/CoreUObject/FGItemDescriptorNuclearFuel';

import {
	common_base__FGBuildable__base__type,
	common_base__FGBuildable__circuits_base__type,
	common_base__FGBuildable__consumes_power_base__type,
	common_base__FGBuildable__docking_station_base__type,
	common_base__FGBuildable__extractor_base__type,
	common_base__FGBuildable__extractor_base__shared__type,
	common_base__FGBuildable__occupied__type,
	common_base__FGBuildable__pipeline_accessory__type,
	common_base__FGBuildable__pipeline_accessory__base__type,
	common_base__FGBuildable__pipeline_flow_accessory__type,
	common_base__FGBuildable__power_switch__base__type,
	common_base__FGBuildable__splitter__base__type,
} from '../../common/classes/CoreUObject/FGBuildable';

import {common_base__FGBuildableAttachmentMerger__type} from '../../common/classes/CoreUObject/FGBuildableAttachmentMerger';

import {common_base__FGBuildableAttachmentSplitter__type} from '../../common/classes/CoreUObject/FGBuildableAttachmentSplitter';

import {common_base__FGBuildableBeamLightweight__type} from '../../common/classes/CoreUObject/FGBuildableBeamLightweight';

import {common_base__FGBuildableBlueprintDesigner__type} from '../../common/classes/CoreUObject/FGBuildableBlueprintDesigner';

import {common_base__FGBuildableCircuitSwitch__type} from '../../common/classes/CoreUObject/FGBuildableCircuitSwitch';

import {
	common_base__FGBuildableConveyorBelt__base__type,
	common_base__FGBuildableConveyorBelt__type,
} from '../../common/classes/CoreUObject/FGBuildableConveyorBelt';

import {common_base__FGBuildableConveyorLift__type} from '../../common/classes/CoreUObject/FGBuildableConveyorLift';

import {common_base__FGBuildableCornerWall__type} from '../../common/classes/CoreUObject/FGBuildableCornerWall';

import {common_base__FGBuildableDockingStation__type} from '../../common/classes/CoreUObject/FGBuildableDockingStation';

import {common_base__FGBuildableDoor__base__type} from '../../common/classes/CoreUObject/FGBuildableDoor';

import {common_base__FGBuildableDroneStation__type} from '../../common/classes/CoreUObject/FGBuildableDroneStation';

import {common_base__FGBuildableFactoryBuilding__type} from '../../common/classes/CoreUObject/FGBuildableFactoryBuilding';

import {common_base__FGBuildableFactorySimpleProducer__type} from '../../common/classes/CoreUObject/FGBuildableFactorySimpleProducer';

import {common_base__FGBuildableFloodlight__type} from '../../common/classes/CoreUObject/FGBuildableFloodlight';

import {
	common_base__FGBuildableFoundation__type,
	common_base__FGBuildableFoundation__base__type,
} from '../../common/classes/CoreUObject/FGBuildableFoundation';

import {common_base__FGBuildableFrackingActivator__type} from '../../common/classes/CoreUObject/FGBuildableFrackingActivator';

import {common_base__FGBuildableFrackingExtractor__type} from '../../common/classes/CoreUObject/FGBuildableFrackingExtractor';

import {common_base__FGBuildableGenerator__base__type} from '../../common/classes/CoreUObject/FGBuildableGenerator';

import {
	common_base__FGBuildableGeneratorFuel__base__type,
	common_base__FGBuildableGeneratorFuel__biogen__type,
	common_base__FGBuildableGeneratorFuel__liquid__type,
} from '../../common/classes/CoreUObject/FGBuildableGeneratorFuel';

import {common_base__FGBuildableGeneratorGeoThermal__type} from '../../common/classes/CoreUObject/FGBuildableGeneratorGeoThermal';

import {common_base__FGBuildableJumppad__type} from '../../common/classes/CoreUObject/FGBuildableJumppad';

import {common_base__FGBuildableLadder__type} from '../../common/classes/CoreUObject/FGBuildableLadder';

import {common_base__FGBuildableLightsControlPanel__type} from '../../common/classes/CoreUObject/FGBuildableLightsControlPanel';

import {
	common_base__FGBuildableLightSource__type,
	common_base__FGBuildableLightSource__base__type,
} from '../../common/classes/CoreUObject/FGBuildableLightSource';

import {common_base__FGBuildableMAM__type} from '../../common/classes/CoreUObject/FGBuildableMAM';

import {
	common_base__FGBuildableManufacturer__type,
	common_base__FGBuildableManufacturer__base__type,
	common_base__FGBuildableManufacturer__blender__type,
	common_base__FGBuildableManufacturer__constructor__type,
	common_base__FGBuildableManufacturer__packager__type,
	common_base__FGBuildableManufacturer__smelter__type,
} from '../../common/classes/CoreUObject/FGBuildableManufacturer';

import {
	common_base__FGBuildableManufacturerVariablePower__base__type,
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
} from '../../common/classes/CoreUObject/FGBuildableManufacturerVariablePower';

import {common_base__FGBuildablePassthrough__type} from '../../common/classes/CoreUObject/FGBuildablePassthrough';

import {common_base__FGBuildablePipelineJunction__type} from '../../common/classes/CoreUObject/FGBuildablePipelineJunction';

import {
	common_base__FGBuildablePipelinePump__type,
	common_base__FGBuildablePipelinePump__valve__type,
} from '../../common/classes/CoreUObject/FGBuildablePipelinePump';

import {common_base__FGBuildablePipeReservoir__type} from '../../common/classes/CoreUObject/FGBuildablePipeReservoir';

import {common_base__FGBuildablePowerPole__type} from '../../common/classes/CoreUObject/FGBuildablePowerPole';

import {common_base__FGBuildablePowerStorage__type} from '../../common/classes/CoreUObject/FGBuildablePowerStorage';

import {common_base__FGBuildablePriorityPowerSwitch__type} from '../../common/classes/CoreUObject/FGBuildablePriorityPowerSwitch';

import {common_base__FGBuildableRadarTower__type} from '../../common/classes/CoreUObject/FGBuildableRadarTower';

import {common_base__FGBuildableRailroadSignal__type} from '../../common/classes/CoreUObject/FGBuildableRailroadSignal';

import {common_base__FGBuildableRailroadStation__type} from '../../common/classes/CoreUObject/FGBuildableRailroadStation';

import {common_base__FGBuildableRamp__type} from '../../common/classes/CoreUObject/FGBuildableRamp';

import {
	common_base__FGBuildableResourceExtractor__miner__type,
	common_base__FGBuildableResourceExtractor__miner__base__type,
	common_base__FGBuildableResourceExtractor__oil_extractor__type,
} from '../../common/classes/CoreUObject/FGBuildableResourceExtractor';

import {common_base__FGBuildableResourceSink__type} from '../../common/classes/CoreUObject/FGBuildableResourceSink';

import {common_base__FGBuildableResourceSinkShop__type} from '../../common/classes/CoreUObject/FGBuildableResourceSinkShop';

import {common_base__FGBuildableSnowDispenser__type} from '../../common/classes/CoreUObject/FGBuildableSnowDispenser';

import {common_base__FGBuildableSpaceElevator__type} from '../../common/classes/CoreUObject/FGBuildableSpaceElevator';

import {common_base__FGBuildableSplitterSmart__type} from '../../common/classes/CoreUObject/FGBuildableSplitterSmart';

import {common_base__FGBuildableStorage__type} from '../../common/classes/CoreUObject/FGBuildableStorage';

import {common_base__FGBuildableTradingPost__type} from '../../common/classes/CoreUObject/FGBuildableTradingPost';

import {common_base__FGBuildableTrainPlatform__base__type} from '../../common/classes/CoreUObject/FGBuildableTrainPlatform';

import {
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type,
	common_base__FGBuildableTrainPlatformCargo__type,
} from '../../common/classes/CoreUObject/FGBuildableTrainPlatformCargo';

import {
	common_base__FGBuildableWall__base__type,
	common_base__FGBuildableWall__base__rectangle__type,
} from '../../common/classes/CoreUObject/FGBuildableWall';

import {common_base__FGBuildableWaterPump__type} from '../../common/classes/CoreUObject/FGBuildableWaterPump';

import {common_base__FGBuildableWidgetSign__type} from '../../common/classes/CoreUObject/FGBuildableWidgetSign';

import {common_base__FGBuildableWire__type} from '../../common/classes/CoreUObject/FGBuildableWire';

import {common_base__FGChainsaw__type} from '../../common/classes/CoreUObject/FGChainsaw';

import {common_base__FGChargedWeapon__type} from '../../common/classes/CoreUObject/FGChargedWeapon';

import {
	common_base__FGConsumableDescriptor__base__type,
	common_base__FGConsumableDescriptor__healing__type,
} from '../../common/classes/CoreUObject/FGConsumableDescriptor';

import {common_base__FGCustomizationRecipe__FGRecipe__type} from '../../common/classes/CoreUObject/FGCustomizationRecipe';

import {
	common_base__FGEquipment__base__type,
	common_base__FGEquipment__placeable__type,
} from '../../common/classes/CoreUObject/FGEquipment';

import {
	common_base__FGEquipmentDescriptor__base__type,
	common_base__FGEquipmentDescriptor__type,
} from '../../common/classes/CoreUObject/FGEquipmentDescriptor';

import {
	common_base__FGEquipmentStunSpear__base__type,
	common_base__FGEquipmentStunSpear__type,
	common_base__FGEquipmentStunSpear__xeno_zapper__type,
} from '../../common/classes/CoreUObject/FGEquipmentStunSpear';

import {common_base__FGEquipmentZipline__type} from '../../common/classes/CoreUObject/FGEquipmentZipline';

import {common_base__FGGasMask__type} from '../../common/classes/CoreUObject/FGGasMask';

import {common_base__FGGolfCartDispenser__type} from '../../common/classes/CoreUObject/FGGolfCartDispenser';

import {common_base__FGHoverPack__type} from '../../common/classes/CoreUObject/FGHoverPack';

import {
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from '../../common/classes/CoreUObject/FGItemDescriptor';

import {common_base__FGItemDescriptorBiomass__type} from '../../common/classes/CoreUObject/FGItemDescriptorBiomass';

import {common_base__FGJetPack__type} from '../../common/classes/CoreUObject/FGJetPack';

import {common_base__FGJumpingStilts__type} from '../../common/classes/CoreUObject/FGJumpingStilts';

import {common_base__FGObjectScanner__type} from '../../common/classes/CoreUObject/FGObjectScanner';

import {common_base__FGParachute__type} from '../../common/classes/CoreUObject/FGParachute';

import {common_base__FGPortableMinerDispenser__type} from '../../common/classes/CoreUObject/FGPortableMinerDispenser';

import {common_base__FGRecipe__type} from '../../common/classes/CoreUObject/FGRecipe';

import {common_base__FGResourceDescriptor__type} from '../../common/classes/CoreUObject/FGResourceDescriptor';

import {common_base__FGSuitBase__type} from '../../common/classes/CoreUObject/FGSuitBase';

import {
	common_base__FGVehicleDescriptor__fueled_with_inventory__type,
	common_base__FGVehicleDescriptor__powered_no_inventory__type,
	common_base__FGVehicleDescriptor__with_inventory__type,
} from '../../common/classes/CoreUObject/FGVehicleDescriptor';

import {common_base__FGWeapon__base__type} from '../../common/classes/CoreUObject/FGWeapon';

export type v1_0_base__CameraAnim__type = UnrealEngineString<
	'/Script/TemplateSequence.CameraAnimationSequence',
	StringStartsWith<'/Game/FactoryGame/Character/Player/CameraShake/'>
>;

export type v1_0_base__ClearanceBox__type = {
	Min: xyz__type;
	Max: xyz__type;
	IsValid: boolean__type;
};

export type v1_0_base__FGBuildable__base__type =
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
							| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x2.Recipe_Stair_Asphalt_8x2_C'
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
							| '/Game/FactoryGame/Buildable/Building/Foundation/AsphaltSet/Recipe_Stair_Asphalt_8x2.Recipe_Stair_Asphalt_8x2_C'
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
		mClearanceData: v1_0_base__mClearanceData__type;
		mTimelapseBucketId: integer_string__type;
		mTimelapseDelay: decimal_string__type;
		mAlienOverClockingZOffset: decimal_string__type;
		mAlienOverClockingAttenuationScalingFactor: decimal_string__type;
		mAlienOverClockingVolumeDB_RTPC: decimal_string__type;
		mAlienOverClockingHighpass_RTPC: decimal_string__type;
		mAlienOverClockingPitch_RTPC: decimal_string__type;
	};

export type v1_0_base__FGBuildable__circuits_base__type =
	v1_0_base__FGBuildable__circuits_base__merged__type;

export type v1_0_base__FGBuildable__circuits_base__merged__type =
	common_base__FGBuildable__circuits_base__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildable__consumes_power_base__type =
	v1_0_base__FGBuildable__consumes_power_base__version_1__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildable__consumes_power_base__version_1__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mAlienOverClockingParticleEffects: '';
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

export type v1_0_base__FGBuildable__docking_station_base__type =
	common_base__FGBuildable__docking_station_base__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildable__extractor_base__type =
	v1_0_base__FGBuildable__extractor_base__merged__type;

export type v1_0_base__FGBuildable__extractor_base__merged__type =
	common_base__FGBuildable__extractor_base__type &
		v1_0_base__FGBuildable__extractor_base__shared__type;

export type v1_0_base__FGBuildable__extractor_base__shared__type =
	v1_0_base__FGBuildable__extractor_base__shared__merged__type;

export type v1_0_base__FGBuildable__extractor_base__shared__merged__type =
	common_base__FGBuildable__extractor_base__shared__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildable__occupied__final__type =
	common_base__FGBuildable__occupied__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildable__pipeline_accessory__type =
	common_base__FGBuildable__pipeline_accessory__type &
		v1_0_base__FGBuildable__pipeline_accessory__base__type;

export type v1_0_base__FGBuildable__pipeline_accessory__base__type =
	common_base__FGBuildable__pipeline_accessory__base__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildable__pipeline_flow_accessory__type =
	v1_0_base__FGBuildable__pipeline_flow_accessory__merged__type & {
		mUpdateAudioFlowTime: decimal_string__type;
	};

export type v1_0_base__FGBuildable__pipeline_flow_accessory__merged__type =
	common_base__FGBuildable__pipeline_flow_accessory__type &
		v1_0_base__FGBuildable__pipeline_accessory__type;

export type v1_0_base__FGBuildable__power_switch__base__type =
	v1_0_base__FGBuildable__power_switch__base__merged__type;

export type v1_0_base__FGBuildable__power_switch__base__merged__type =
	common_base__FGBuildable__power_switch__base__type &
		v1_0_base__FGBuildable__circuits_base__type;

export type v1_0_base__FGBuildable__splitter__base__type =
	v1_0_base__FGBuildable__splitter__base__merged__type;

export type v1_0_base__FGBuildable__splitter__base__merged__type =
	common_base__FGBuildable__splitter__base__type &
		v1_0_base__FGBuildable__base__type &
		v1_0_base__FGBuildableAttachmentMergerSplitter__with_inventory_size__type;

export type v1_0_base__FGBuildableAttachmentMerger__type =
	common_base__FGBuildableAttachmentMerger__type &
		v1_0_base__FGBuildable__base__type &
		v1_0_base__FGBuildableAttachmentMergerSplitter__with_inventory_size__type;

export type v1_0_base__FGBuildableAttachmentMergerSplitter__with_inventory_size__type =
	{
		mInventorySize: integer_string__type;
	};

export type v1_0_base__FGBuildableAttachmentSplitter__type =
	common_base__FGBuildableAttachmentSplitter__type &
		v1_0_base__FGBuildable__splitter__base__type;

export type v1_0_base__FGBuildableBeamLightweight__type =
	common_base__FGBuildableBeamLightweight__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableBlueprintDesigner__base__type =
	v1_0_base__FGBuildableBlueprintDesigner__merged__type & {
		mCurrentRecordData: {
			IconID: {
				IconLibrary: 'None';
				IconID: integer_string__signed__type;
			};
			Color: color_decimal__type;
		};
	};

export type v1_0_base__FGBuildableBlueprintDesigner__merged__type =
	common_base__FGBuildableBlueprintDesigner__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableBlueprintDesigner__mk1__type =
	v1_0_base__FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_C';
		mDisplayName: 'Blueprint Designer Mk.1';
	};

export type v1_0_base__FGBuildableBlueprintDesigner__mk2__type =
	v1_0_base__FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_MK2_C';
		mDisplayName: 'Blueprint Designer Mk.2';
	};

export type v1_0_base__FGBuildableBlueprintDesigner__mk3__type =
	v1_0_base__FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_Mk3_C';
		mDisplayName: 'Blueprint Designer Mk.3';
	};

export type v1_0_base__FGBuildableCircuitSwitch__type =
	common_base__FGBuildableCircuitSwitch__type &
		v1_0_base__FGBuildable__power_switch__base__type;

export type v1_0_base__FGBuildableConveyorBelt__base__type =
	v1_0_base__FGBuildableConveyorBelt__base__merged__type & {
		mItems: {
			ArrayReplicationKey: integer_string__signed__type;
		};
		mChainSegmentIndex: integer_string__signed__type;
	};

export type v1_0_base__FGBuildableConveyorBelt__base__merged__type =
	common_base__FGBuildableConveyorBelt__base__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableConveyorBelt__merged__type =
	common_base__FGBuildableConveyorBelt__type &
		v1_0_base__FGBuildableConveyorBelt__base__type;

export type v1_0_base__FGBuildableConveyorBelt__pre_1_1__type =
	v1_0_base__FGBuildableConveyorBelt__merged__type;

export type v1_0_base__FGBuildableConveyorLift__type =
	common_base__FGBuildableConveyorLift__type &
		v1_0_base__FGBuildableConveyorBelt__base__type &
		v1_0_base__FGBuildableConveyorLift__properties__type;

export type v1_0_base__FGBuildableConveyorLift__properties__type = {
	mFlipMeshOnReverse: boolean__type;
	mOpposingConnectionClearance: decimal_string__type;
};

export type v1_0_base__FGBuildableCornerWall__type =
	common_base__FGBuildableCornerWall__type &
		v1_0_base__FGBuildableWall__base__type;

export type v1_0_base__FGBuildableDockingStation__type =
	common_base__FGBuildableDockingStation__type &
		v1_0_base__FGBuildable__docking_station_base__type;

export type v1_0_base__FGBuildableDoor__base__type =
	common_base__FGBuildableDoor__base__type &
		v1_0_base__FGBuildableWallLightweight__type;

export type v1_0_base__FGBuildableDroneStation__type =
	v1_0_base__FGBuildableDroneStation__version_1__type &
		v1_0_base__FGBuildable__docking_station_base__type;

export type v1_0_base__FGBuildableDroneStation__version_1__type =
	common_base__FGBuildableDroneStation__type & {
		mFuelStorageSizeX: integer_string__type;
		mFuelStorageSizeY: integer_string__type;
	};

export type v1_0_base__FGBuildableFactoryBuilding__type =
	common_base__FGBuildableFactoryBuilding__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableFactorySimpleProducer__type =
	common_base__FGBuildableFactorySimpleProducer__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableFloodlight__type =
	common_base__FGBuildableFloodlight__type &
		v1_0_base__FGBuildableLightSource__base__type;

export type v1_0_base__FGBuildableFoundation__type =
	common_base__FGBuildableFoundation__type &
		v1_0_base__FGBuildableFoundation__base__type;

export type v1_0_base__FGBuildableFoundation__base__type =
	v1_0_base__FGBuildableFoundation__base__merged__type;

export type v1_0_base__FGBuildableFoundation__base__merged__type =
	common_base__FGBuildableFoundation__base__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableFrackingActivator__type =
	common_base__FGBuildableFrackingActivator__type &
		v1_0_base__FGBuildable__extractor_base__shared__type;

export type v1_0_base__FGBuildableFrackingExtractor__type =
	common_base__FGBuildableFrackingExtractor__type &
		v1_0_base__FGBuildable__extractor_base__type;

export type v1_0_base__FGBuildableGenerator__base__type =
	common_base__FGBuildableGenerator__base__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableGeneratorFuel__base__type =
	v1_0_base__FGBuildableGeneratorFuel__base__merged__type & {
		mFuelClassesInInventory: '';
	};

export type v1_0_base__FGBuildableGeneratorFuel__base__merged__type =
	common_base__FGBuildableGeneratorFuel__base__type &
		v1_0_base__FGBuildableGenerator__base__type;

export type v1_0_base__FGBuildableGeneratorFuel__biogen__type =
	v1_0_base__FGBuildableGeneratorFuel__biogen__merged__type & {
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Leaves.Desc_Leaves_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Wood.Desc_Wood_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Mycelia.Desc_Mycelia_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_GenericBiomass.Desc_GenericBiomass_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_Biofuel.Desc_Biofuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_PackagedBiofuel.Desc_PackagedBiofuel_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Leaves.Desc_Leaves_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Wood.Desc_Wood_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Mycelia.Desc_Mycelia_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_GenericBiomass.Desc_GenericBiomass_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_Biofuel.Desc_Biofuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_PackagedBiofuel.Desc_PackagedBiofuel_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_Leaves_C'
					| 'Desc_Wood_C'
					| 'Desc_Mycelia_C'
					| 'Desc_GenericBiomass_C'
					| 'Desc_Biofuel_C'
					| 'Desc_PackagedBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_Leaves_C'
					| 'Desc_Wood_C'
					| 'Desc_Mycelia_C'
					| 'Desc_GenericBiomass_C'
					| 'Desc_Biofuel_C'
					| 'Desc_PackagedBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
	};

export type v1_0_base__FGBuildableGeneratorFuel__biogen__merged__type =
	common_base__FGBuildableGeneratorFuel__biogen__type &
		v1_0_base__FGBuildableGeneratorFuel__base__type;

export type v1_0_base__FGBuildableGeneratorFuel__liquid__type =
	v1_0_base__FGBuildableGeneratorFuel__liquid__merged__type & {
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C'
				| '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C'
				| '/Game/FactoryGame/Resource/Parts/RocketFuel/Desc_RocketFuel.Desc_RocketFuel_C'
				| '/Game/FactoryGame/Resource/Parts/IonizedFuel/Desc_IonizedFuel.Desc_IonizedFuel_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C'
				| '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C'
				| '/Game/FactoryGame/Resource/Parts/RocketFuel/Desc_RocketFuel.Desc_RocketFuel_C'
				| '/Game/FactoryGame/Resource/Parts/IonizedFuel/Desc_IonizedFuel.Desc_IonizedFuel_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C'
					| 'Desc_RocketFuel_C'
					| 'Desc_IonizedFuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C'
					| 'Desc_RocketFuel_C'
					| 'Desc_IonizedFuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
	};

export type v1_0_base__FGBuildableGeneratorFuel__liquid__merged__type =
	common_base__FGBuildableGeneratorFuel__liquid__type &
		v1_0_base__FGBuildableGeneratorFuel__base__type;

export type v1_0_base__FGBuildableGeneratorGeoThermal__type =
	common_base__FGBuildableGeneratorGeoThermal__type &
		v1_0_base__FGBuildableGenerator__base__type;

export type v1_0_base__FGBuildableGeneratorNuclear__type =
	common_base__FGBuildableGeneratorNuclear__type &
		v1_0_base__FGBuildableGeneratorFuel__base__type &
		v1_0_base__FGBuildableGeneratorNuclear__properties__type;

export type v1_0_base__FGBuildableGeneratorNuclear__mFuel__FicsoniumFuelRod__type =
	common_base__FGBuildableGeneratorNuclear__mFuel__base__type & {
		mFuelClass: 'Desc_FicsoniumFuelRod_C';
		mByproduct: '';
		mByproductAmount: '';
	};

export type v1_0_base__FGBuildableGeneratorNuclear__properties__type = {
	mDefaultFuelClasses: [
		(
			| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
			| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
			| '/Game/FactoryGame/Resource/Parts/FicsoniumFuelRod/Desc_FicsoniumFuelRod.Desc_FicsoniumFuelRod_C'
		),
		...(
			| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
			| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
			| '/Game/FactoryGame/Resource/Parts/FicsoniumFuelRod/Desc_FicsoniumFuelRod.Desc_FicsoniumFuelRod_C'
		)[],
	];
	mFuel: [
		common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
		common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
		v1_0_base__FGBuildableGeneratorNuclear__mFuel__FicsoniumFuelRod__type,
	];
};

export type v1_0_base__FGBuildableJumppad__type =
	common_base__FGBuildableJumppad__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableLadder__type =
	common_base__FGBuildableLadder__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableLightsControlPanel__type =
	common_base__FGBuildableLightsControlPanel__type &
		v1_0_base__FGBuildable__circuits_base__type;

export type v1_0_base__FGBuildableLightSource__type =
	common_base__FGBuildableLightSource__type &
		v1_0_base__FGBuildableLightSource__base__type;

export type v1_0_base__FGBuildableLightSource__base__type =
	v1_0_base__FGBuildableLightSource__base__merged__type;

export type v1_0_base__FGBuildableLightSource__base__merged__type =
	common_base__FGBuildableLightSource__base__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableMAM__type =
	v1_0_base__FGBuildableMAM__merged__type & {
		Centrifuge_NewTrack_1_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
		Centrifuge_NewTrack_0_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
		Centrifuge__Direction_BB49BD99478F0FC67F8D7E9A54C7E849: 'Forward';
		['Centrifuge Duration']: decimal_string__type;
	};

export type v1_0_base__FGBuildableMAM__merged__type =
	common_base__FGBuildableMAM__type &
		v1_0_base__FGBuildable__occupied__final__type;

export type v1_0_base__FGBuildableManufacturer__type =
	common_base__FGBuildableManufacturer__type &
		v1_0_base__FGBuildableManufacturer__base__type;

export type v1_0_base__FGBuildableManufacturer__base__type =
	v1_0_base__FGBuildableManufacturer__base__merged__type;

export type v1_0_base__FGBuildableManufacturer__base__merged__type =
	common_base__FGBuildableManufacturer__base__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableManufacturer__blender__type =
	common_base__FGBuildableManufacturer__blender__type &
		v1_0_base__FGBuildableManufacturer__base__type;

export type v1_0_base__FGBuildableManufacturer__constructor__type =
	common_base__FGBuildableManufacturer__constructor__type &
		v1_0_base__FGBuildableManufacturer__base__type &
		v1_0_base__FGBuildableManufacturer__constructor__properties__type;

export type v1_0_base__FGBuildableManufacturer__constructor__properties__type =
	{
		mAOAttenuationScalingFactor: decimal_string__type;
		mAOLayerZOffset: decimal_string__type;
		RTPC_AO_VolumeDB: decimal_string__type;
		RTPC_AO_HighpassValue: decimal_string__type;
		RTPC_AO_Pitch: decimal_string__type;
	};

export type v1_0_base__FGBuildableManufacturer__packager__type =
	common_base__FGBuildableManufacturer__packager__type &
		v1_0_base__FGBuildableManufacturer__base__type;

export type v1_0_base__FGBuildableManufacturer__smelter__type =
	common_base__FGBuildableManufacturer__smelter__type &
		v1_0_base__FGBuildableManufacturer__base__type;

export type v1_0_base__FGBuildableManufacturerVariablePower__base__type =
	v1_0_base__FGBuildableManufacturerVariablePower__base__merged__type;

export type v1_0_base__FGBuildableManufacturerVariablePower__base__merged__type =
	common_base__FGBuildableManufacturerVariablePower__base__type &
		v1_0_base__FGBuildableManufacturer__base__type;

export type v1_0_base__FGBuildableManufacturerVariablePower__HadronCollider__type =
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type &
		v1_0_base__FGBuildableManufacturerVariablePower__base__type;

export type v1_0_base__FGBuildableManufacturerVariablePower__QuantumEncoder__type =
	v1_0_base__FGBuildableManufacturerVariablePower__base__type & {
		IsAnimProducing: boolean__type;
	};

export type v1_0_base__FGBuildablePassthrough__type =
	common_base__FGBuildablePassthrough__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildablePipeline__properties__type = {
	mSoundSplineComponentEmitterInterval: decimal_string__type;
	mLastElapsedTime: decimal_string__type;
	mLastFlowForSoundUpdateThreshold: decimal_string__type;
	mUpdateSoundsTimerInterval: decimal_string__type;
};

export type v1_0_base__FGBuildablePipelineJunction__type =
	common_base__FGBuildablePipelineJunction__type &
		v1_0_base__FGBuildable__pipeline_accessory__type;

export type v1_0_base__FGBuildablePipelinePump__type =
	common_base__FGBuildablePipelinePump__type &
		v1_0_base__FGBuildable__pipeline_flow_accessory__type;

export type v1_0_base__FGBuildablePipelinePump__valve__type =
	common_base__FGBuildablePipelinePump__valve__type &
		v1_0_base__FGBuildable__pipeline_flow_accessory__type;

export type v1_0_base__FGBuildablePipelineSupport__properties__type = {
	mLength: decimal_string__type;
	mVerticalAngle: decimal_string__type;
};

export type v1_0_base__FGBuildablePipeReservoir__type =
	common_base__FGBuildablePipeReservoir__type &
		v1_0_base__FGBuildable__pipeline_accessory__base__type;

export type v1_0_base__FGBuildablePortal__type =
	v1_0_base__FGBuildablePortal__base__type & {
		ClassName?: 'Build_Portal_C';
		OffsetFromPortalSurface: decimal_string__type;
		LightningStartVector: xyz_array__type;
		LightningEndVector: xyz_array__type;
		['In Value']: decimal_string__type;
		mFuelSlotSize: integer_string__type;
		mMinFuelToStartProducing: integer_string__type;
		mMinFuelToStartProducingAfterAbruptStop: integer_string__type;
		mPortalDisconnectedCooldownTime?: decimal_string__type;
		mCachedInputConnections: '';
		mHeatUpComplete: boolean__type;
		mHeatUpCycleTime: decimal_string__type;
		mCurrentHeatUpProgress: decimal_string__type;
		mCurrentProductionProgress: decimal_string__type;
		mLinkedPortalDisconnectCooldownTimeLeft: decimal_string__type;
		mCurrentProductionCycleTime: decimal_string__type;
		mTrippedProductionStop: boolean__type;
		mCachedHasEnoughFuelForProduce: boolean__type;
		mPortalName?: 'Portal';
	};

export type v1_0_base__FGBuildablePortal__base__type =
	v1_0_base__FGBuildable__consumes_power_base__type & {
		['HeatingUpPlaying ID']: integer_string__type;
		LightningEndLoc: xyz__type;
		LightningStartLoc: xyz__type;
		LightningStartSocket: [
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
		];
		LightningEndSocket?: [
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
		];
		mTeleportationCompleteRepNotify: integer_string__type;
		mTeleportationBeginRepNotify?: integer_string__type;
		PortalActive: decimal_string__type;
		PortalFluctuation: decimal_string__type;
		mOnLinkedPortalChanged: empty_object__type;
		mOnPortalTraversableChanged: empty_object__type;
		mOnHeatUpStateChanged: empty_object__type;
		mMaxPortalTravelTime: decimal_string__type;
		mIsPortalTraversable: boolean__type;
		mActorRepresentationColor: color_decimal__type;
		mActorRepresentationViewDistance: 'CVD_Far';
		mActorRepresentationFogOfWarRevealRadius: decimal_string__type;
		mTeleportPowerConsumptionTimeLeft: decimal_string__type;
		mTeleportPowerConsumption: decimal_string__type;
		mCachedFactoryTickData: empty_object__type;
	};

export type v1_0_base__FGBuildablePortalSatellite__type =
	v1_0_base__FGBuildablePortal__base__type & {
		ClassName?: 'Build_PortalSatellite_C';
		mPortalName?: 'Satellite Portal';
		['Lightning End Socket']: '';
		['Lightning Start Socket']: '';
		mWasHeatingUpLastTick: boolean__type;
	};

export type v1_0_base__FGBuildablePowerBooster__type =
	v1_0_base__FGBuildable__consumes_power_base__type & {
		IsInProducingAnimState: boolean__type;
		LaserSocketNames: [
			(
				| 'LeftArmLaser01_Vfx_Socket'
				| 'LeftArmLaser02_Vfx_Socket'
				| 'RightArmLaser01_Vfx_Socket'
				| 'RightArmLaser02_Vfx_Socket'
			),
			...(
				| 'LeftArmLaser01_Vfx_Socket'
				| 'LeftArmLaser02_Vfx_Socket'
				| 'RightArmLaser01_Vfx_Socket'
				| 'RightArmLaser02_Vfx_Socket'
			)[],
		];
		mVFX_LaserSubtract: decimal_string__type;
		mVFX_SummerSloop_Loc_Offset: xyz__type;
		mVFX_SubVector: xyz__type;
		m_Beam_TargetLoc: xyz__type;
		mShrine_location: xyz__type;
		bFirstRun: boolean__type;
		mBasePowerProduction: decimal_string__type;
		mBaseBoostPercentage: decimal_string__type;
		mCurrentFuelBoostPercentage: decimal_string__type;
		mDefaultFuelClasses: [
			'/Game/FactoryGame/Resource/Parts/AlienPowerFuel/Desc_AlienPowerFuel.Desc_AlienPowerFuel_C',
			...'/Game/FactoryGame/Resource/Parts/AlienPowerFuel/Desc_AlienPowerFuel.Desc_AlienPowerFuel_C'[],
		];
		mAvailableFuelClasses: '';
		mCachedInputConnections: '';
		mCurrentFuelDuration: decimal_string__type;
		mCurrentFuelDurationLeft: decimal_string__type;
	};

export type v1_0_base__FGBuildablePowerPole__type =
	common_base__FGBuildablePowerPole__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildablePowerStorage__type =
	v1_0_base__FGBuildablePowerStorage__merged__type & {
		mStatusPrimitiveID: integer_string__type;
		mChargePrimitiveID: integer_string__type;
		mPowerInput: decimal_string__type;
	};

export type v1_0_base__FGBuildablePowerStorage__merged__type =
	common_base__FGBuildablePowerStorage__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildablePriorityPowerSwitch__type =
	common_base__FGBuildablePriorityPowerSwitch__type &
		v1_0_base__FGBuildable__power_switch__base__type;

export type v1_0_base__FGBuildableRadarTower__type =
	common_base__FGBuildableRadarTower__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableRailroadSignal__type =
	v1_0_base__FGBuildableRailroadSignal__merged__type;

export type v1_0_base__FGBuildableRailroadSignal__merged__type =
	common_base__FGBuildableRailroadSignal__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableRailroadStation__type =
	v1_0_base__FGBuildableRailroadStation__merged__type;

export type v1_0_base__FGBuildableRailroadStation__merged__type =
	common_base__FGBuildableRailroadStation__type &
		v1_0_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type;

export type v1_0_base__FGBuildableRamp__type =
	v1_0_base__FGBuildableRamp__merged__type & {
		mIsInverted: boolean__type;
	};

export type v1_0_base__FGBuildableRamp__merged__type =
	common_base__FGBuildableRamp__type &
		v1_0_base__FGBuildableFoundation__base__type;

export type v1_0_base__FGBuildableResourceExtractor__miner__type =
	common_base__FGBuildableResourceExtractor__miner__type &
		v1_0_base__FGBuildableResourceExtractor__miner__base__type;

export type v1_0_base__FGBuildableResourceExtractor__miner__base__type =
	v1_0_base__FGBuildableResourceExtractor__miner__base__merged__type & {
		SAMReference: '/Game/FactoryGame/Resource/RawResources/SAM/Desc_SAM.Desc_SAM_C';
	};

export type v1_0_base__FGBuildableResourceExtractor__miner__base__merged__type =
	common_base__FGBuildableResourceExtractor__miner__base__type &
		v1_0_base__FGBuildable__extractor_base__type;

export type v1_0_base__FGBuildableResourceExtractor__miner_mk1__type =
	v1_0_base__FGBuildableResourceExtractor__miner__base__type & {
		InternalStartUpTimer: decimal_string__type;
	};

export type v1_0_base__FGBuildableResourceExtractor__miner_mk3__type =
	common_base__FGBuildableResourceExtractor__miner_mk3__type &
		v1_0_base__FGBuildableResourceExtractor__miner__base__type;

export type v1_0_base__FGBuildableResourceExtractor__oil_extractor__type =
	common_base__FGBuildableResourceExtractor__oil_extractor__type &
		v1_0_base__FGBuildable__extractor_base__type;

export type v1_0_base__FGBuildableResourceSink__type =
	common_base__FGBuildableResourceSink__type &
		v1_0_base__FGBuildable__consumes_power_base__type &
		v1_0_base__FGBuildableResourceSink__properties__type;

export type v1_0_base__FGBuildableResourceSink__properties__type = {
	IsAnimationProducing: boolean__type;
	EnableTickGrinder: boolean__type;
	EnableTickEngine: boolean__type;
	mGrinderInterpDuration: decimal_string__type;
	mEngineInterpDuration: decimal_string__type;
	mProcessingTime: decimal_string__type;
	mProducingTimer: decimal_string__type;
};

export type v1_0_base__FGBuildableResourceSinkShop__type =
	common_base__FGBuildableResourceSinkShop__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableSnowCannon__type =
	v1_0_base__FGBuildable__base__type & {
		SFXLocation: xyz__type;
		mSignificanceRange: decimal_string__type;
		mAngleLimit?: {
			Min: integer_string__signed__type;
			Max: integer_string__type;
		};
		mAngleOffset?: integer_string__signed__type;
		mCannonAngle?: integer_string__type;
	};

export type v1_0_base__FGBuildableSnowDispenser__type =
	common_base__FGBuildableSnowDispenser__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableSpaceElevator__type =
	v1_0_base__FGBuildableSpaceElevator__merged__type & {
		mOnSpaceElevatorStateUpdated: empty_object__type;
		mSpaceElevatorState: v1_0_base__FGBuildableSpaceElevator__mSpaceElevatorState__type;
	};

export type v1_0_base__FGBuildableSpaceElevator__merged__type =
	common_base__FGBuildableSpaceElevator__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableSpaceElevator__mSpaceElevatorState__type =
	'ESES_Load';

export type v1_0_base__FGBuildableSplitterSmart__type =
	common_base__FGBuildableSplitterSmart__type &
		v1_0_base__FGBuildable__splitter__base__type;

export type v1_0_base__FGBuildableStorage__type =
	common_base__FGBuildableStorage__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableTradingPost__version_1__type =
	common_base__FGBuildableTradingPost__type & {
		mWorkBenchOccupied: 'Crafting Bench occupied';
		mWorkBenchFree: 'Use Crafting Bench';
		Meshes?: [
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
			UnrealEngineString<
				'/Script/Engine.StaticMesh',
				'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer'
			>,
		];
		mMamFreeText?: 'Use the MAM';
		mMamOccupiedText?: 'The MAM is occupied';
		mMeshes: [
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
			'/Game/Geometry/Meshes/1M_Cube_Chamfer.1M_Cube_Chamfer',
		];
		mStages: [
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			),
			...(
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_01.SM_Hub_Stg_01'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_02.SM_Hub_Stg_02'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_03.SM_Hub_Stg_03'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_04.SM_Hub_Stg_04'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_05.SM_Hub_Stg_05'
				| '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/SM_Hub_Stg_06.SM_Hub_Stg_06'
			)[],
		];
		mLadderVisibilityLevel: integer_string__type;
		mLockerVisibilityLevel: integer_string__type;
		mMiniGameAndCalendarVisibilityLevel: integer_string__type;
	};

export type v1_0_base__FGBuildableTrainPlatform__base__type =
	v1_0_base__FGBuildableTrainPlatform__base__merged__type;

export type v1_0_base__FGBuildableTrainPlatform__base__merged__type =
	common_base__FGBuildableTrainPlatform__base__type &
		v1_0_base__FGBuildable__consumes_power_base__type;

export type v1_0_base__FGBuildableTrainPlatformCargo__type =
	v1_0_base__FGBuildableTrainPlatformCargo__merged__type;

export type v1_0_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type =
	v1_0_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__merged__type;

export type v1_0_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__merged__type =
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type &
		v1_0_base__FGBuildableTrainPlatform__base__type;

export type v1_0_base__FGBuildableTrainPlatformCargo__merged__type =
	common_base__FGBuildableTrainPlatformCargo__type &
		v1_0_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type;

export type v1_0_base__FGBuildableTrainPlatformEmpty__type =
	v1_0_base__FGBuildableTrainPlatform__base__type;

export type v1_0_base__FGBuildableWall__base__type =
	common_base__FGBuildableWall__base__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableWallLightweight__type =
	common_base__FGBuildableWall__base__rectangle__type &
		v1_0_base__FGBuildableWall__base__type;

export type v1_0_base__FGBuildableWaterPump__type =
	common_base__FGBuildableWaterPump__type &
		v1_0_base__FGBuildable__extractor_base__type;

export type v1_0_base__FGBuildableWidgetSign__type =
	v1_0_base__FGBuildableWidgetSign__merged__type & {
		mTextElementToLocDataMap: empty_object__type;
		mSoftActivePrefabLayout: 'None';
		mActivePrefabLayout: empty_object__type;
		mGlobalPrefabIconElementSaveData: '';
	};

export type v1_0_base__FGBuildableWidgetSign__merged__type =
	common_base__FGBuildableWidgetSign__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGBuildableWire__type =
	common_base__FGBuildableWire__type &
		v1_0_base__FGBuildable__base__type;

export type v1_0_base__FGCentralStorageContainer__type =
	v1_0_base__FGBuildableStorage__type & {
		TimeToExecuteCheckAfterItemAdded: decimal_string__type;
		mUploadTimer: decimal_string__type;
		mTimeToUpload: decimal_string__type;
	};

export type v1_0_base__FGChainsaw__type =
	v1_0_base__FGChainsaw__merged__type & {
		StartUpToIdleID: integer_string__type;
		mChainsawEngageMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_Equipment: v1_0_base__FGChainsaw__Montage_Equipment__type;
		};
		mChainsawSawingMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			Montage_Equipment: v1_0_base__FGChainsaw__Montage_Equipment__type;
		};
		mChainsawEquipFuelMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			Montage_Equipment: v1_0_base__FGChainsaw__Montage_Equipment__type;
		};
		mChainsawEquipNoFuelMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			Montage_Equipment: v1_0_base__FGChainsaw__Montage_Equipment__type;
		};
		mChainsawEquipStingerMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_Equipment: v1_0_base__FGChainsaw__Montage_Equipment__type;
		};
		mShowAOESelectorUITimer: empty_object__type;
		EngagePlayingID: integer_string__type;
		['IdlePlaying ID']: integer_string__type;
		['Playing ID']: integer_string__type;
		SawingPlayingID: integer_string__type;
		mIsAOEOn: boolean__type;
		mEquipMontage?: empty_object__type;
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: empty_object__type;
	};

export type v1_0_base__FGChainsaw__merged__type =
	common_base__FGChainsaw__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGChainsaw__Montage_Equipment__type =
	UnrealEngineString<
		'/Script/Engine.AnimMontage',
		StringStartsWith<'/Game/FactoryGame/Equipment/Chainsaw/Animation/'>
	>;

export type v1_0_base__FGChargedWeapon__type =
	v1_0_base__FGChargedWeapon__merged__type & {
		AmmoTypeToAkEvent: [
			[
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/'>
					>
					| UnrealEngineString<
							'/Script/AkAudio.AkAudioEvent',
							StringStartsWith<'/Game/WwiseAudio/Events/'>
					>
				),
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/'>
					>
					| UnrealEngineString<
							'/Script/AkAudio.AkAudioEvent',
							StringStartsWith<'/Game/WwiseAudio/Events/'>
					>
				),
			],
			...[
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/'>
					>
					| UnrealEngineString<
							'/Script/AkAudio.AkAudioEvent',
							StringStartsWith<'/Game/WwiseAudio/Events/'>
					>
				),
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/'>
					>
					| UnrealEngineString<
							'/Script/AkAudio.AkAudioEvent',
							StringStartsWith<'/Game/WwiseAudio/Events/'>
					>
				),
			][],
		];
		mPrimaryFireStartMontageList: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
				},
			];
		};
		mReloadMontageList: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
				},
			];
		};
		mSecondaryFireMontageList: {
			Montages: [
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__type;
					InvertFilter?: boolean__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
				},
				...{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__type;
					InvertFilter?: boolean__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
				}[],
			];
		};
		mPrimaryFireEndMontageList: {
			Montages: [
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__charged__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					CameraAnim?: v1_0_base__CameraAnim__type;
				},
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__charged__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					CameraAnim?: v1_0_base__CameraAnim__type;
				},
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__charged__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
					CameraAnim?: v1_0_base__CameraAnim__type;
				},
			];
		};
		mEquipMontage?: {
			Montages: [
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__type;
					InvertFilter?: boolean__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
				},
				{
					Filter: boolean__type;
					FilterMontageTag: v1_0_base__FilterMontageTag__type;
					InvertFilter?: boolean__type;
					Exclusive: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
				},
			];
		};
		mStingerMontage?: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
					>;
				},
			];
		};
		mUnEquipMontage?: empty_object__type;
		mReleaseCooldown: decimal_string__type;
	};

export type v1_0_base__FGChargedWeapon__merged__type =
	common_base__FGChargedWeapon__type &
		v1_0_base__FGWeapon__base__type;

export type v1_0_base__FGConsumableDescriptor__type =
	v1_0_base__FGConsumableDescriptor__base__type;

export type v1_0_base__FGConsumableDescriptor__base__type =
	v1_0_base__FGConsumableDescriptor__base__merged__type;

export type v1_0_base__FGConsumableDescriptor__base__merged__type =
	common_base__FGConsumableDescriptor__base__type &
		v1_0_base__FGEquipmentDescriptor__base__type;

export type v1_0_base__FGConsumableDescriptor__healing__type =
	v1_0_base__FGConsumableDescriptor__healing__base__type;

export type v1_0_base__FGConsumableDescriptor__healing__base__type =
	common_base__FGConsumableDescriptor__healing__type &
		v1_0_base__FGConsumableDescriptor__base__type;

export type v1_0_base__FGConsumableEquipment__base__type =
	v1_0_base__FGEquipment__base__type & {
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: empty_object__type;
	};

export type v1_0_base__FGConsumableEquipment__equipment__type =
	v1_0_base__FGConsumableEquipment__base__type & {
		mEatMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			CameraAnim: v1_0_base__CameraAnim__type;
		};
		mReEquipAfterEatMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
		};
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
				},
			];
		};
	};

export type v1_0_base__FGConsumableEquipment__medkit__type =
	v1_0_base__FGConsumableEquipment__base__type & {
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
				},
			];
		};
		mMedkitUseMontages: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
			];
		};
		mCurrentMedkitUseMontage: {
			Weight: decimal_string__type;
		};
	};

export type v1_0_base__FGCustomizationRecipe__type =
	v1_0_base__FGCustomizationRecipe__FGRecipe__type & {
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
			| 'Swatch 15'
			| 'Unpainted metal'
			| 'Copper Finish'
			| 'Chrome Finish'
			| 'Caterium Finish'
			| 'Carbon Steel Finish';
		mProducedIn: [
			'/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C',
		];
	};

export type v1_0_base__FGCustomizationRecipe__FGRecipe__type =
	common_base__FGCustomizationRecipe__FGRecipe__type & {
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
						| '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C'
						| '/Game/FactoryGame/Buildable/Factory/QuantumEncoder/Build_QuantumEncoder.Build_QuantumEncoder_C'
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
						| '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C'
						| '/Game/FactoryGame/Buildable/Factory/QuantumEncoder/Build_QuantumEncoder.Build_QuantumEncoder_C'
					)[],
			];
	};

export type v1_0_base__FGEquipment__base__type =
	common_base__FGEquipment__base__type & {
		mAttachSocket:
			| 'hand_lSocket'
			| 'hand_rSocket'
			| 'root'
			| 'None'
			| 'helmetSocket'
			| 'jumpingStilt_lSocket'
			| 'backpack';
		mComponentNameToFirstPersonMaterials:
			| empty_object__type
			| [
					[
						(
							| 'PortableMiner'
							| 'Chainsaw_skl'
							| 'NobeliskDetonator_Skl_01'
							| 'RebarGun_skl'
							| 'Rifle'
							| 'ScannerSkeletalMesh'
							| 'ShockShank_skl'
							| 'SK_1pHoverPack_01'
							| 'SK_Medkit'
							| 'SK_JumpingStiltLeft_02'
							| 'SkeletalMesh'
							| 'SM_Gasmask_01'
							| 'SM_GolfcartEquipment_01'
							| 'StunSpear_skl'
						),
						{
							FirstPersonMaterials: [
								UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>,
								...UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>[],
							];
						},
					],
					...[
						(
							| 'PortableMiner'
							| 'Chainsaw_skl'
							| 'NobeliskDetonator_Skl_01'
							| 'RebarGun_skl'
							| 'Rifle'
							| 'ScannerSkeletalMesh'
							| 'ShockShank_skl'
							| 'SK_1pHoverPack_01'
							| 'SK_Medkit'
							| 'SK_JumpingStiltLeft_02'
							| 'SkeletalMesh'
							| 'SM_Gasmask_01'
							| 'SM_GolfcartEquipment_01'
							| 'StunSpear_skl'
						),
						{
							FirstPersonMaterials: [
								UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>,
								...UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>[],
							];
						},
					][],
			];
		mHasStingerMontage: boolean__type;
		mMontageBlendOutTime: decimal_string__type;
		mEquipmentLookAtDescOverride: string;
	};

export type v1_0_base__FGEquipment__placeable__type =
	v1_0_base__FGEquipment__placeable__merged__type;

export type v1_0_base__FGEquipment__placeable__merged__type =
	common_base__FGEquipment__placeable__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGEquipmentDescriptor__type =
	v1_0_base__FGEquipmentDescriptor__merged__type;

export type v1_0_base__FGEquipmentDescriptor__base__type =
	v1_0_base__FGEquipmentDescriptor__base__merged__type;

export type v1_0_base__FGEquipmentDescriptor__base__merged__type =
	common_base__FGEquipmentDescriptor__base__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type v1_0_base__FGEquipmentDescriptor__merged__type =
	common_base__FGEquipmentDescriptor__type &
		v1_0_base__FGEquipmentDescriptor__base__type;

export type v1_0_base__FGEquipmentStunSpear__type =
	v1_0_base__FGEquipmentStunSpear__merged__type & {
		mSecondSwingMontageList: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
			];
		};
		mFirstSwingMontageList: {
			Montages: [
				{
					Weight?: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment?: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				...{
					Weight?: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment?: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				}[],
			];
		};
		mEquipMontage: {
			Montages: [
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
				},
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
				},
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
				},
			];
		};
		mStingerMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
			>;
		};
	};

export type v1_0_base__FGEquipmentStunSpear__base__type =
	v1_0_base__FGEquipmentStunSpear__base__merged__type & {
		mSecondSwingMinDelay: decimal_string__type;
		mSecondSwingMaxDelay: decimal_string__type;
		mSecondSwingUseCoolDown: decimal_string__type;
	};

export type v1_0_base__FGEquipmentStunSpear__base__merged__type =
	common_base__FGEquipmentStunSpear__base__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGEquipmentStunSpear__candy_cane_basher__type =
	v1_0_base__FGEquipmentStunSpear__merged__type & {
		mSecondSwingMontageList: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
			];
		};
		mEquipMontage: {
			Montages: [
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
				},
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
				},
				{
					Weight?: decimal_string__type;
					Filter?: boolean__type;
					Exclusive?: boolean__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
				},
			];
		};
		mStingerMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
			>;
		};
		mFirstSwingMontageList: {
			Montages: [
				{
					Weight?: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment?: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				...{
					Weight?: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment?: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				}[],
			];
		};
	};

export type v1_0_base__FGEquipmentStunSpear__merged__type =
	common_base__FGEquipmentStunSpear__type &
		v1_0_base__FGEquipmentStunSpear__base__type;

export type v1_0_base__FGEquipmentStunSpear__xeno_zapper__type =
	v1_0_base__FGEquipmentStunSpear__xeno_zapper__merged__type & {
		mFirstSwingMontageList: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				...{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				}[],
			];
		};
		mSecondSwingMontageList: {
			Montages: [
				{
					Weight: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				},
				...{
					Weight: decimal_string__type;
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: v1_0_base__CameraAnim__type;
				}[],
			];
		};
		mEquipMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				},
			];
		};
		mStingerMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				},
				...{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				}[],
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
			>;
		};
	};

export type v1_0_base__FGEquipmentStunSpear__xeno_zapper__merged__type =
	common_base__FGEquipmentStunSpear__xeno_zapper__type &
		v1_0_base__FGEquipmentStunSpear__base__type;

export type v1_0_base__FGEquipmentZipline__type =
	v1_0_base__FGEquipmentZipline__merged__type & {
		mZiplineAttachMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			CameraAnim: v1_0_base__CameraAnim__type;
		};
		mZiplineDetachMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_Equipment: UnrealEngineString<
				'/Script/Engine.AnimMontage',
				StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
			>;
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
			>;
			CameraAnim: v1_0_base__CameraAnim__type;
		};
		mZiplineTryAttachMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_3P: v1_0_base__Montage_3P__type;
			Montage_Equipment: UnrealEngineString<
				'/Script/Engine.AnimMontage',
				StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
			>;
		};
		mWantToGrab: boolean__type;
		mEquipMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/Zipline/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
					>;
				},
			];
		};
		mStingerMontage: empty_object__type;
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Zipline/'>
			>;
		};
	};

export type v1_0_base__FGEquipmentZipline__merged__type =
	common_base__FGEquipmentZipline__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGGasMask__type = v1_0_base__FGGasMask__merged__type & {
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/GasMask/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/GasMask/'>
				>;
				CameraAnim: v1_0_base__CameraAnim__type;
			},
		];
	};
	mStingerMontage: empty_object__type;
	mUnEquipMontage: v1_0_base__FGGasMask__mUnEquipMontage__type;
};

export type v1_0_base__FGGasMask__merged__type =
	common_base__FGGasMask__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGGasMask__mUnEquipMontage__type = {
	AudioEvent: UnrealEngineString<
		'/Script/AkAudio.AkAudioEvent',
		StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Equipment_Gear/GasMask/'>
	>;
};

export type v1_0_base__FGGolfCartDispenser__type =
	v1_0_base__FGGolfCartDispenser__merged__type & {
		mBuildDisqualifierText: 'Vehicles cannot be built or deployed on top of existing vehicles!';
		mChristmasMaterial:
			| 'None'
			| '/Game/FactoryGame/Buildable/Vehicle/Golfcart/Material/MI_ChrismasCart_Inst.MI_ChrismasCart_Inst';
		mChristmasMaterial1P:
			| 'None'
			| '/Game/FactoryGame/Buildable/Vehicle/Golfcart/Material/MI_ChrismasCart_Inst_1p.MI_ChrismasCart_Inst_1p';
		mCartPlacementClearance: xyz__type;
		mCartPlacementDistance: decimal_string__type;
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
				},
			];
		};
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
			>;
		};
	};

export type v1_0_base__FGGolfCartDispenser__merged__type =
	common_base__FGGolfCartDispenser__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGHoverPack__type =
	v1_0_base__FGHoverPack__merged__type & {
		mCurrentPlayerVelocity_SFX: decimal_string__type;
		mCurrentMouseDelta_SFX: decimal_string__type;
		mLowBatteryWarningActive_SFX: boolean__type;
		mPropellerVFX: '';
		mDisplayRangeWarning: boolean__type;
		mEquipMontage?: {
			Montages: [
				{
					Filter?: boolean__type;
					FilterMontageTag?: v1_0_base__FilterMontageTag__type;
					Exclusive?: boolean__type;
					AudioEvent: v1_0_base__FGHoverPack__AudioEvent__type;
				},
				{
					Filter?: boolean__type;
					FilterMontageTag?: v1_0_base__FilterMontageTag__type;
					Exclusive?: boolean__type;
					AudioEvent: v1_0_base__FGHoverPack__AudioEvent__type;
				},
			];
		};
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: {
			AudioEvent: v1_0_base__FGHoverPack__AudioEvent__type;
		};
	};

export type v1_0_base__FGHoverPack__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
>;

export type v1_0_base__FGHoverPack__merged__type =
	common_base__FGHoverPack__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mGasType: v1_0_base__mGasType__type;
		mClassToScanFor: v1_0_base__mClassToScanFor__type;
		mIsAlienItem: boolean__type;
		mNeedsPickUpMarker: boolean__type;
	};

export type v1_0_base__FGItemDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type v1_0_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type &
		v1_0_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type v1_0_base__FGItemDescriptorBiomass__type =
	v1_0_base__FGItemDescriptorBiomass__merged__type;

export type v1_0_base__FGItemDescriptorBiomass__merged__type =
	common_base__FGItemDescriptorBiomass__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__type;

export type v1_0_base__FGItemDescriptorNuclearFuel__type =
	v1_0_base__FGItemDescriptorNuclearFuel__merged__type & {
		mSpentFuelClass:
			| common_base__FGItemDescriptorNuclearFuel__waste__type
			| None__type;
	};

export type v1_0_base__FGItemDescriptorNuclearFuel__merged__type =
	common_base__FGItemDescriptorNuclearFuel__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__type;

export type v1_0_base__FGItemDescriptorPowerBoosterFuel__type =
	v1_0_base__FGItemDescriptor__FGResourceDescriptor__type & {
		mBoostPercentage: decimal_string__type;
		mBoostDuration: decimal_string__type;
	};

export type v1_0_base__FGJetPack__type = v1_0_base__FGJetPack__merged__type & {
	mAllowedFuelTypes: [
		UnrealEngineString<
			'/Script/FactoryGame.FGJetPackFuelParameters',
			StringStartsWith<'/Game/FactoryGame/Equipment/JetPack/FuelTypes/'>
		>,
		...UnrealEngineString<
			'/Script/FactoryGame.FGJetPackFuelParameters',
			StringStartsWith<'/Game/FactoryGame/Equipment/JetPack/FuelTypes/'>
		>[],
	];
	mUnlockedFuelTypes: '';
	mAvailableFuelTypes: '';
	mEquipMontage?: {
		Montages: [
			{
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
				>;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
		>;
	};
};

export type v1_0_base__FGJetPack__merged__type =
	common_base__FGJetPack__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGJumpingStilts__type =
	v1_0_base__FGJumpingStilts__merged__type & {
		mEquipMontage: {
			Montages: [v1_0_base__FGJumpingStilts__Montage__type];
		};
		mStingerMontage: empty_object__type;
		mUnEquipMontage: v1_0_base__FGJumpingStilts__Montage__type;
	};

export type v1_0_base__FGJumpingStilts__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<
		| '/Game/WwiseAudio/Events/Equipment/BladeRunners/'
		| '/Game/WwiseAudio/Events/Equipment/Equipment_Gear/BladeRunners/'
	>
>;

export type v1_0_base__FGJumpingStilts__merged__type =
	common_base__FGJumpingStilts__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGJumpingStilts__Montage__type = {
	AudioEvent: v1_0_base__FGJumpingStilts__AudioEvent__type;
	bSeparate3PAudioEvent: boolean__type;
	AudioEvent3P: v1_0_base__FGJumpingStilts__AudioEvent__type;
};

export type v1_0_base__FGObjectScanner__type =
	v1_0_base__FGObjectScanner__merged__type & {
		mScannerCycleLeftMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_Equipment: UnrealEngineString<
				'/Script/Engine.AnimMontage',
				StringStartsWith<'/Game/FactoryGame/Equipment/ObjectScanner/Animation/'>
			>;
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
			>;
		};
		mScannerCycleRightMontage: {
			Montage_1P: v1_0_base__Montage_1P__type;
			Montage_Equipment: UnrealEngineString<
				'/Script/Engine.AnimMontage',
				StringStartsWith<'/Game/FactoryGame/Equipment/ObjectScanner/Animation/'>
			>;
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
			>;
		};
		mClosestObject: {
			ActorLocation: xyz__type;
		};
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
					>;
				},
			];
		};
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ObjectScanner/'>
			>;
		};
	};

export type v1_0_base__FGObjectScanner__merged__type =
	common_base__FGObjectScanner__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGParachute__type =
	v1_0_base__FGParachute__merged__type & {
		mParachuteDeployMontageList: {
			Montages: [
				(
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
				),
				(
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
				),
				(
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							Exclusive: boolean__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
					| {
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
							CameraAnim: v1_0_base__CameraAnim__type;
					}
				),
			];
		};
		mParachuteDetachMontageList: {
			Montages: [
				(
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							InvertFilter: boolean__type;
							Exclusive: boolean__type;
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
					}
					| {
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
					}
				),
				(
					| {
							Filter: boolean__type;
							FilterMontageTag: v1_0_base__FilterMontageTag__type;
							InvertFilter: boolean__type;
							Exclusive: boolean__type;
							Montage_1P: v1_0_base__Montage_1P__type;
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
					}
					| {
							Montage_3P: v1_0_base__Montage_3P__type;
							AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
					}
				),
			];
		};
		mEquipMontage: v1_0_base__FGParachute__mEquipMontage__type;
		mStingerMontage: empty_object__type;
		mUnEquipMontage: v1_0_base__FGParachute__mUnEquipMontage__type;
	};

export type v1_0_base__FGParachute__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<
		| '/Game/WwiseAudio/Events/Equipment/Parachute/'
		| '/Game/WwiseAudio/Events/Equipment/Equipment_Gear/Parachute/'
	>
>;

export type v1_0_base__FGParachute__mEquipMontage__type = {
	Montages: [
		{
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Equipment_Gear/Parachute/'>
			>;
		},
	];
};

export type v1_0_base__FGParachute__merged__type =
	common_base__FGParachute__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGParachute__mUnEquipMontage__type = {
	AudioEvent: v1_0_base__FGParachute__AudioEvent__type;
};

export type v1_0_base__FGPortableMinerDispenser__type =
	v1_0_base__FGPortableMinerDispenser__merged__type & {
		mEquipMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/PortableMiner/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/PortableMiner/'>
					>;
				},
			];
		};
		mStingerMontage: {
			Montages: [
				{
					Montage_1P: v1_0_base__Montage_1P__type;
					Montage_3P: v1_0_base__Montage_3P__type;
					Montage_Equipment: v1_0_base__Montage_1P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/PortableMiner/'>
					>;
				},
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Character/Player/ResourcePickUp/'>
			>;
		};
	};

export type v1_0_base__FGPortableMinerDispenser__merged__type =
	common_base__FGPortableMinerDispenser__type &
		v1_0_base__FGEquipment__placeable__type;

export type v1_0_base__FGPowerShardDescriptor__type =
	v1_0_base__FGItemDescriptor__FGResourceDescriptor__type & {
		mPowerShardType: 'PST_Overclock' | 'PST_ProductionBoost';
		mExtraPotential: decimal_string__type;
		mExtraProductionBoost: decimal_string__type;
	};

export type v1_0_base__FGRecipe__type = v1_0_base__FGRecipe__merged__type & {
	mIngredients: ItemClass__amount_required__type | '';
};

export type v1_0_base__FGRecipe__merged__type =
	common_base__FGRecipe__type &
		v1_0_base__FGCustomizationRecipe__FGRecipe__type;

export type v1_0_base__FGResourceDescriptor__type =
	v1_0_base__FGResourceDescriptor__merged__type & {
		mManualMiningAudioName: 'Metal' | 'Sam';
	};

export type v1_0_base__FGResourceDescriptor__merged__type =
	common_base__FGResourceDescriptor__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__type;

export type v1_0_base__FGSchematic__base__properties__type =
	common_base__FGSchematic__base__type & {
		mType:
			| 'EST_Custom'
			| 'EST_Customization'
			| 'EST_ResourceSink'
			| 'EST_Milestone'
			| 'EST_Alternate'
			| 'EST_MAM'
			| 'EST_HardDrive'
			| 'EST_Tutorial';
		mSchematicUnlockTag:
			| empty_object__type
			| {
					TagName: 'Stats.Gameplay.UnlockedGoldenNut';
			};
		mUnlocks: [
			...(
				| v1_0_base__FGSchematic__mUnlocks_Class__type
				| common_base__FGSchematic__mUnlocks__type
				| v1_0_base__FGSchematic__mUnlocks_mCustomizationUnlocks__type
				| v1_0_base__FGSchematic__mUploadSpeedPercentageDecrease__type
				| v1_0_base__FGSchematic__mItemStackLimitIncrease__type
				| v1_0_base__FGSchematic__mNumSlotsToUnlock__type
			)[],
		];
		mSchematicDependencies: [
			...(
				| common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type
				| (common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type & {
						mGamePhase: 'EGP_Victory';
						mOnlyAllowInSelectedPhase: boolean__type;
				})
			)[],
		];
	};

export type v1_0_base__FGSchematic__mItemStackLimitIncrease__type = {
	Class: 'BP_UnlockCentralStorageItemLimit_C';
	mItemStackLimitIncrease: integer_string__type;
};

export type v1_0_base__FGSchematic__mNumSlotsToUnlock__type = {
	Class: 'BP_UnlockCentralStorageUploadSlots_C';
	mNumSlotsToUnlock: integer_string__type;
};

export type v1_0_base__FGSchematic__mUnlocks_Class__type =
	common_base__FGSchematic__mUnlocks_Class__type & {
		Class:
			| 'BP_UnlockInfoOnly_C'
			| 'BP_UnlockCheckmark_C'
			| 'BP_UnlockCustomizer_C'
			| 'BP_UnlockMap_C'
			| 'BP_UnlockBuildEfficiency_C'
			| 'BP_UnlockBuildOverclock_C'
			| 'BP_UnlockBuildProductionBoost_C';
	};

export type v1_0_base__FGSchematic__mUnlocks_mCustomizationUnlocks__type = {
	Class: 'FGUnlockCustomization';
	mCustomizationUnlocks: UnrealEngineString__array__type;
};

export type v1_0_base__FGSchematic__mUploadSpeedPercentageDecrease__type = {
	Class: 'BP_UnlockCentralStorageUploadSpeed_C';
	mUploadSpeedPercentageDecrease: decimal_string__type;
};

export type v1_0_base__FGSuitBase__1_0__mEquipMontage__Montages__AudioEvent__type =
	UnrealEngineString<
		'/Script/AkAudio.AkAudioEvent',
		StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HazmatSuit/'>
	>;

export type v1_0_base__FGSuitBase__1_0__pre_1_1__type =
	common_base__FGSuitBase__type & {
		mSuitMeshMaterials: [
			{
				SlotName: 'Pioneer_torso' | 'Pioneer_Legs';
				Material: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant',
					StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
				>;
				Material3P: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant',
					StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
				>;
			},
			...{
				SlotName: 'Pioneer_torso' | 'Pioneer_Legs';
				Material: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant',
					StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
				>;
				Material3P: UnrealEngineString<
					'/Script/Engine.MaterialInstanceConstant',
					StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
				>;
			}[],
		];
		mStingerMontage?: empty_object__type;
		mUnEquipMontage?: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HazmatSuit/'>
			>;
		};
	};

export type v1_0_base__FGVehicleDescriptor__fueled_with_inventory__type =
	v1_0_base__FGVehicleDescriptor__fueled_with_inventory__merged__type;

export type v1_0_base__FGVehicleDescriptor__fueled_with_inventory__merged__type =
	common_base__FGVehicleDescriptor__fueled_with_inventory__type &
		v1_0_base__FGVehicleDescriptor__with_inventory__type;

export type v1_0_base__FGVehicleDescriptor__powered_no_inventory__type =
	v1_0_base__FGVehicleDescriptor__powered_no_inventory__merged__type;

export type v1_0_base__FGVehicleDescriptor__powered_no_inventory__merged__type =
	common_base__FGVehicleDescriptor__powered_no_inventory__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type v1_0_base__FGVehicleDescriptor__unfueled_with_inventory__type =
	v1_0_base__FGVehicleDescriptor__with_inventory__type;

export type v1_0_base__FGVehicleDescriptor__with_inventory__type =
	v1_0_base__FGVehicleDescriptor__with_inventory__merged__type;

export type v1_0_base__FGVehicleDescriptor__with_inventory__merged__type =
	common_base__FGVehicleDescriptor__with_inventory__type &
		v1_0_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;

export type v1_0_base__FGWeapon__base__type =
	v1_0_base__FGWeapon__base__merged__type;

export type v1_0_base__FGWeapon__base__merged__type =
	common_base__FGWeapon__base__type &
		v1_0_base__FGEquipment__base__type;

export type v1_0_base__FGWeapon__gun_base__properties__type = {
	mFireMontage: {
		Montage_1P: v1_0_base__Montage_1P__type;
		Montage_3P: v1_0_base__Montage_3P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/'>
		>;
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
		>;
		CameraAnim: v1_0_base__CameraAnim__type;
	};
	mSupressDryFireMontage: boolean__type;
};

export type v1_0_base__FGWeapon__rebar_gun__properties__type = {
	mReloadMontageList: {
		Montages: [
			{
				Weight?: decimal_string__type;
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: v1_0_base__CameraAnim__type;
			},
			{
				Weight?: decimal_string__type;
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: v1_0_base__CameraAnim__type;
			},
		];
	};
	mAmmoSwapMontageList: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: v1_0_base__CameraAnim__type;
			},
		];
	};
	mFailedToFireMontageList: {
		Montages: [
			{
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
				>;
			},
		];
	};
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
				>;
			},
		];
	};
	mStingerMontage: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
				>;
			},
		];
	};
	mUnEquipMontage: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
		>;
	};
};

export type v1_0_base__FGWeapon__rifle__properties__type = {
	mReloadMontageList: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mAmmoSwapMontageList: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mFailedToFireMontageList: empty_object__type;
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mStingerMontage: {
		Montages: [
			{
				Montage_1P: v1_0_base__Montage_1P__type;
				Montage_3P: v1_0_base__Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mUnEquipMontage: empty_object__type;
};

export type v1_0_base__FilterMontageTag__type =
	| 'HasAmmunition'
	| 'EquipmentInHand_None'
	| 'EquipmentInHand_TwoHanded';

export type v1_0_base__FilterMontageTag__charged__type =
	| 'LowCharged'
	| 'MediumCharged'
	| 'FullyCharged';

export type v1_0_base__mClassToScanFor__type =
	| None__type
	| StringStartsWith<'/Game/FactoryGame/Resource/Environment/'>
	| StringStartsWith<'/Game/FactoryGame/World/Benefit/'>
	| StringStartsWith<'/Game/FactoryGame/Prototype/WAT/'>;

export type v1_0_base__mClearanceData__type =
	| ''
	| [
			{
				Type?: 'CT_Soft';
				ClearanceBox: v1_0_base__ClearanceBox__type;
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			},
			...{
				Type?: 'CT_Soft';
				ClearanceBox: v1_0_base__ClearanceBox__type;
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			}[],
	];

export type v1_0_base__mGasType__type = 'GT_NORMAL' | 'GT_ENERGY';

export type v1_0_base__Montage_1P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/FirstPerson/'>
>;

export type v1_0_base__Montage_3P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/ThirdPerson/'>
>;

export type v1_0_base__mStatisticGameplayTag__type = {
	TagName:
		| 'Stats.Gameplay.Schematics.Schematic2-5'
		| 'Stats.Gameplay.Schematics.Schematic3-1'
		| 'Stats.Gameplay.Schematics.Schematic9-2'
		| 'Stats.Gameplay.Schematics.Schematic9-1'
		| 'Stats.Gameplay.Schematics.Schematic5-1'
		| 'Stats.Gameplay.Schematics.Schematic3-4'
		| 'Stats.Gameplay.Schematics.Schematic5-4'
		| 'Stats.Gameplay.Schematics.Schematic7-1'
		| 'Stats.Gameplay.Schematics.Schematic4-1'
		| 'Stats.Gameplay.Schematics.Schematic5-2'
		| 'Stats.Gameplay.Schematics.Schematic2-1'
		| 'Stats.Gameplay.Schematics.Schematic8-5'
		| 'Stats.Gameplay.Schematics.Schematic7-5'
		| 'Stats.Gameplay.Schematics.Schematic8-1'
		| 'Stats.Gameplay.Schematics.Schematic8-2'
		| 'Stats.Gameplay.Schematics.Schematic7-4'
		| 'Stats.Gameplay.Schematics.Schematic7-2'
		| 'Stats.Gameplay.Schematics.Schematic8-4'
		| 'Stats.Gameplay.Schematics.Schematic9-5'
		| 'Stats.Gameplay.Schematics.Schematic9-4'
		| 'Stats.Gameplay.Schematics.Schematic9-3'
		| 'Stats.Gameplay.Schematics.Schematic8-3'
		| 'Stats.Gameplay.Schematics.Schematic7-3'
		| 'Stats.Gameplay.Schematics.Schematic6-7'
		| 'Stats.Gameplay.Schematics.Schematic6-6'
		| 'Stats.Gameplay.Schematics.Schematic6-5'
		| 'Stats.Gameplay.Schematics.Schematic6-3'
		| 'Stats.Gameplay.Schematics.Schematic6-2'
		| 'Stats.Gameplay.Schematics.Schematic6-1'
		| 'Stats.Gameplay.Schematics.Schematic5-5'
		| 'Stats.Gameplay.Schematics.Schematic5-3'
		| 'Stats.Gameplay.Schematics.Schematic4-5'
		| 'Stats.Gameplay.Schematics.Schematic4-4'
		| 'Stats.Gameplay.Schematics.Schematic4-3'
		| 'Stats.Gameplay.Schematics.Schematic4-2'
		| 'Stats.Gameplay.Schematics.Schematic3-3'
		| 'Stats.Gameplay.Schematics.Schematic3-2'
		| 'Stats.Gameplay.Schematics.Schematic2-3'
		| 'Stats.Gameplay.Schematics.Schematic2-2'
		| 'Stats.Gameplay.Schematics.Schematic1-3'
		| 'Stats.Gameplay.Schematics.Schematic1-2'
		| 'Stats.Gameplay.Schematics.Schematic1-1';
};

export type EditorCurveData__type = {
	EditorCurveData: {
		Keys?: [
			{
				InterpMode: 'RCIM_Cubic';
				TangentMode: 'RCTM_User';
				Time: decimal_string__signed__type;
				Value: decimal_string__type;
				ArriveTangent: decimal_string__signed__type;
				LeaveTangent: decimal_string__signed__type;
			},
			...{
				InterpMode: 'RCIM_Cubic';
				TangentMode: 'RCTM_User';
				Time: decimal_string__signed__type;
				Value: decimal_string__type;
				ArriveTangent: decimal_string__signed__type;
				LeaveTangent: decimal_string__signed__type;
			}[],
		];
		DefaultValue: decimal_string__type;
		PreInfinityExtrap: InfinityExtrap__type;
		PostInfinityExtrap: InfinityExtrap__type;
	};
	ExternalCurve?: common_base__EditorCurveData__ExternalCurve__type;
};

export type FGBuildableBlueprintDesigner__mk1__type =
	FGBuildableBlueprintDesigner__mk1__merged__type;

export type FGBuildableBlueprintDesigner__mk1__merged__type =
	v1_0_base__FGBuildableBlueprintDesigner__mk1__type & FGBuildable__base__type;

export type FGBuildableBlueprintDesigner__mk2__type =
	FGBuildableBlueprintDesigner__mk2__merged__type;

export type FGBuildableBlueprintDesigner__mk2__merged__type =
	v1_0_base__FGBuildableBlueprintDesigner__mk2__type & FGBuildable__base__type;

export type FGBuildableBlueprintDesigner__mk3__type =
	FGBuildableBlueprintDesigner__mk3__merged__type;

export type FGBuildableBlueprintDesigner__mk3__merged__type =
	v1_0_base__FGBuildableBlueprintDesigner__mk3__type & FGBuildable__base__type;

export type FGBuildableDoor__automated__with__bigOverlapList_0__type =
	FGBuildableDoor__automated__type & {
		bigOverlapList_0: '';
	};

export type FGBuildableResourceExtractor__miner_mk1__type =
	v1_0_base__FGBuildableResourceExtractor__miner_mk1__type &
		FGBuildable__base__type;

export type FGBuildableResourceExtractor__miner_mk3__type =
	v1_0_base__FGBuildableResourceExtractor__miner_mk3__type &
		FGBuildable__base__type;

export type has__mAttachedThroughputMonitors__type = {
	mAttachedThroughputMonitors: '';
};

export type has__mFGTextRenderers__type = {
	mFGTextRenderers: '';
};

export type has__mLastEditedBy__type = {
	mLastEditedBy: '';
};

export type has__mOnLastEditedByChanged__type = has__mLastEditedBy__type & {
	mOnLastEditedByChanged: empty_object__type;
};

export type has__mSavedDirections__type = {
	mSavedDirections: '';
};

export type mElevatorState__type = 'EES_NONE';

export type mInputOutputMeshDisplayMode__type = 'MDM_Auto';

export type mPoleVariations__type = [
	{
		StaticMesh: UnrealEngineString<'/Script/Engine.StaticMesh'>;
		Height: decimal_string__type;
		Clearance: {
			Type: 'CT_Soft';
			ClearanceBox: v1_0_base__ClearanceBox__type;
			ExcludeForSnapping: boolean__type;
		};
	},
	...{
		StaticMesh: UnrealEngineString<'/Script/Engine.StaticMesh'>;
		Height: decimal_string__type;
		Clearance: {
			Type: 'CT_Soft';
			ClearanceBox: v1_0_base__ClearanceBox__type;
			ExcludeForSnapping: boolean__type;
		};
	}[],
];

export type mStatisticGameplayTag__type = {
	TagName:
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial1'
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial1_5'
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial2'
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial3'
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial4'
		| 'Stats.Gameplay.Schematics.Schematic_Tutorial5';
};
