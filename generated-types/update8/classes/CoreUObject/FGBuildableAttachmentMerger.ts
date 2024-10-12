import {integer_string__signed__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableAttachmentMerger__type = FGBuildable__base__type & {
	mCurrentInputIndex: integer_string__signed__type;
};

export type FGBuildableAttachmentMerger__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableAttachmentMerger__type];
	};
