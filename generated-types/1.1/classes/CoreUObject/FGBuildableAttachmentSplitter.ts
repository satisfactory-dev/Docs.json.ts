import {UnrealEngineString} from '../../utils/validators.js';

import {
	v1_0_base__FGBuildableAttachmentSplitter__type,
	has__mSavedDirections__type,
} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableAttachmentSplitter__type =
	FGBuildableAttachmentSplitter__merged__type & {
		mHologramOverrides: [
			UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				'/Game/FactoryGame/Buildable/Factory/CA_Splitter/Build_ConveyorAttachmentSplitter.Default__Build_ConveyorAttachmentSplitter_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
				'/Game/FactoryGame/Buildable/Factory/CA_Splitter/Build_ConveyorAttachmentSplitter.Default__Build_ConveyorAttachmentSplitter_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
			>[],
		];
	};

export type FGBuildableAttachmentSplitter__merged__type =
	v1_0_base__FGBuildableAttachmentSplitter__type &
		FGBuildable__base__type &
		has__mSavedDirections__type;

export type FGBuildableAttachmentSplitter__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentSplitter__type];
	};
