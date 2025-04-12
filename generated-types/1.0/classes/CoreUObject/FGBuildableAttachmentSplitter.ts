import {FGBuildable__splitter__base__type} from './FGBuildable';

import {common_base__FGBuildableAttachmentSplitter__type} from '../../../common/classes/CoreUObject/FGBuildableAttachmentSplitter';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableAttachmentSplitter__type =
	common_base__FGBuildableAttachmentSplitter__type &
		FGBuildable__splitter__base__type;

export type FGBuildableAttachmentSplitter__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentSplitter__type];
	};
