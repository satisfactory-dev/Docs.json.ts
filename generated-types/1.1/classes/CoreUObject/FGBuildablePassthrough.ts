import {v1_0_base__FGBuildablePassthrough__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePassthrough__type =
	v1_0_base__FGBuildablePassthrough__type & FGBuildable__base__type;

export type FGBuildablePassthrough__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePassthrough__type, FGBuildablePassthrough__type];
	};
