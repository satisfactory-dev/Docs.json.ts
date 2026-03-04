import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	FGBuildableAttachmentMergerSplitter__with_inventory_size__type
} from './FGBuildableAttachmentMergerSplitter.js';

import type {
	common_base__FGBuildableAttachmentMerger__type
} from '../../../common/classes/CoreUObject/FGBuildableAttachmentMerger.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableAttachmentMerger__type
	= common_base__FGBuildableAttachmentMerger__type
		& FGBuildable__base__type
		& FGBuildableAttachmentMergerSplitter__with_inventory_size__type;

export type FGBuildableAttachmentMerger__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableAttachmentMerger__type],
	};
