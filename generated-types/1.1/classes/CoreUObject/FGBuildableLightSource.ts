import {v1_0_base__FGBuildableLightSource__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableLightSource__type =
	v1_0_base__FGBuildableLightSource__type & FGBuildable__base__type;

export type FGBuildableLightSource__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightSource__type, FGBuildableLightSource__type];
	};
