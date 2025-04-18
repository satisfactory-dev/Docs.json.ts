import {UnrealEngineString} from '../../utils/validators';

import {FGBuildable__base__type} from './FGBuildable';

import {
	v1_0_base__FGBuildableAttachmentMergerSplitter__with_inventory_size__type,
	has__mSavedDirections__type,
} from '../../common/unassigned';

import {
	boolean__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableMergerPriority__type = FGBuildable__base__type &
	v1_0_base__FGBuildableAttachmentMergerSplitter__with_inventory_size__type &
	has__mSavedDirections__type &
	FGBuildableMergerPriority__properties__type;

export type FGBuildableMergerPriority__properties__type = {
	mLocalCustomizationData: boolean__type;
	OnInputPrioritiesChanged: empty_object__type;
	mInputPriorities: '';
	mCurrentInputIndices: '';
	mCurrentInputPriorityGroupIndex: integer_string__type;
	mHologramOverrides: [
		UnrealEngineString<
			'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
			'/Game/FactoryGame/Buildable/Factory/CA_MergerPriority/Build_ConveyorAttachmentMergerPriority.Default__Build_ConveyorAttachmentMergerPriority_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
		>,
		...UnrealEngineString<
			'/Script/FactoryGame.FGHologramOverride_ConveyorAttachment_FloorToLift',
			'/Game/FactoryGame/Buildable/Factory/CA_MergerPriority/Build_ConveyorAttachmentMergerPriority.Default__Build_ConveyorAttachmentMergerPriority_C:FGHologramOverride_ConveyorAttachment_FloorToLift_0'
		>[],
	];
};

export type FGBuildableMergerPriority__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableMergerPriority__type];
	};
