import {FGBuildable__base__type} from './FGBuildable';

import {common_base__FGBuildableAttachmentMerger__type} from '../../../common/classes/CoreUObject/FGBuildableAttachmentMerger';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableAttachmentMerger__type =
	FGBuildableAttachmentMerger__merged__type;

export type FGBuildableAttachmentMerger__merged__type =
	common_base__FGBuildableAttachmentMerger__type &
		FGBuildable__base__type;

export type FGBuildableAttachmentMerger__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentMerger__type];
	};
