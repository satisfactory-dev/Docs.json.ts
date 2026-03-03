import {
	v1_0_base__FGBuildablePortal__type,
	has__mLastEditedBy__type,
} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePortal__type = FGBuildablePortal__merged__type;

export type FGBuildablePortal__merged__type =
	v1_0_base__FGBuildablePortal__type &
		has__mLastEditedBy__type &
		FGBuildable__base__type;

export type FGBuildablePortal__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePortal__type];
};
