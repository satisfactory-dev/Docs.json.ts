import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGBuildableFoundation__base__type,
	common_base__FGBuildableFoundation__type,
} from '../../../common/classes/CoreUObject/FGBuildableFoundation';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFoundation__type = FGBuildableFoundation__merged__type;

export type FGBuildableFoundation__base__type =
	FGBuildableFoundation__base__merged__type;

export type FGBuildableFoundation__base__merged__type =
	common_base__FGBuildableFoundation__base__type &
		FGBuildable__base__type;

export type FGBuildableFoundation__merged__type =
	common_base__FGBuildableFoundation__type &
		FGBuildableFoundation__base__type;

export type FGBuildableFoundation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFoundation__type, ...FGBuildableFoundation__type[]];
	};
