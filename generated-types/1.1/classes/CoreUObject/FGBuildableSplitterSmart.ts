import {UnrealEngineString} from '../../utils/validators';

import {
	v1_0_base__FGBuildableSplitterSmart__type,
	has__mSavedDirections__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableSplitterSmart__type =
	FGBuildableSplitterSmart__merged__type & {
		mHologramOverrides: [
			UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				| '/Game/FactoryGame/Buildable/Factory/CA_SplitterProgrammable/Build_ConveyorAttachmentSplitterProgrammable.Default__Build_ConveyorAttachmentSplitterProgrammable_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
				| '/Game/FactoryGame/Buildable/Factory/CA_SplitterSmart/Build_ConveyorAttachmentSplitterSmart.Default__Build_ConveyorAttachmentSplitterSmart_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				| '/Game/FactoryGame/Buildable/Factory/CA_SplitterProgrammable/Build_ConveyorAttachmentSplitterProgrammable.Default__Build_ConveyorAttachmentSplitterProgrammable_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
				| '/Game/FactoryGame/Buildable/Factory/CA_SplitterSmart/Build_ConveyorAttachmentSplitterSmart.Default__Build_ConveyorAttachmentSplitterSmart_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>[],
		];
	};

export type FGBuildableSplitterSmart__merged__type =
	v1_0_base__FGBuildableSplitterSmart__type &
		FGBuildable__base__type &
		has__mSavedDirections__type;

export type FGBuildableSplitterSmart__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableSplitterSmart__type,
			...FGBuildableSplitterSmart__type[],
		];
	};
