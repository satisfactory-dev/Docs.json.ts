import {UnrealEngineString} from '../../utils/validators.ts';

import {
	v1_0_base__FGBuildableAttachmentMerger__type,
	has__mSavedDirections__type,
} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableAttachmentMerger__type =
	FGBuildableAttachmentMerger__merged__type & {
		mHologramOverrides: [
			UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				'/Game/FactoryGame/Buildable/Factory/CA_Merger/Build_ConveyorAttachmentMerger.Default__Build_ConveyorAttachmentMerger_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				'/Game/FactoryGame/Buildable/Factory/CA_Merger/Build_ConveyorAttachmentMerger.Default__Build_ConveyorAttachmentMerger_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>[],
		];
	};

export type FGBuildableAttachmentMerger__merged__type =
	v1_0_base__FGBuildableAttachmentMerger__type &
		FGBuildable__base__type &
		has__mSavedDirections__type;

export type FGBuildableAttachmentMerger__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentMerger__type];
	};
