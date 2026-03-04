import {v1_0_base__FGBuildablePassthrough__type} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildablePassthrough__type =
	v1_0_base__FGBuildablePassthrough__type & FGBuildable__base__type;

export type FGBuildablePassthrough__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePassthrough__type, FGBuildablePassthrough__type];
	};
