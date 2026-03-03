import {FGBuildable__base__type} from './FGBuildable.ts';

import {FGBuildableAttachmentMergerSplitter__with_inventory_size__type} from './FGBuildableAttachmentMergerSplitter.ts';

import {common_base__FGBuildableAttachmentMerger__type} from '../../../common/classes/CoreUObject/FGBuildableAttachmentMerger.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableAttachmentMerger__type =
	common_base__FGBuildableAttachmentMerger__type &
		FGBuildable__base__type &
		FGBuildableAttachmentMergerSplitter__with_inventory_size__type;

export type FGBuildableAttachmentMerger__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentMerger__type];
	};
