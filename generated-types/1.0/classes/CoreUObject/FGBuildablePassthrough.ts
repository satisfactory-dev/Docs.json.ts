import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildablePassthrough__type} from '../../../common/classes/CoreUObject/FGBuildablePassthrough.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePassthrough__type =
	common_base__FGBuildablePassthrough__type &
		FGBuildable__base__type;

export type FGBuildablePassthrough__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePassthrough__type, ...FGBuildablePassthrough__type[]];
	};
