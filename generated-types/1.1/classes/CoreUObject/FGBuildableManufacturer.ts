import {
	v1_0_base__FGBuildableManufacturer__type,
	v1_0_base__FGBuildableManufacturer__blender__type,
	v1_0_base__FGBuildableManufacturer__constructor__type,
	v1_0_base__FGBuildableManufacturer__packager__type,
	v1_0_base__FGBuildableManufacturer__smelter__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableManufacturer__type =
	v1_0_base__FGBuildableManufacturer__type & FGBuildable__base__type;

export type FGBuildableManufacturer__blender__type =
	v1_0_base__FGBuildableManufacturer__blender__type & FGBuildable__base__type;

export type FGBuildableManufacturer__constructor__type =
	v1_0_base__FGBuildableManufacturer__constructor__type &
		FGBuildable__base__type;

export type FGBuildableManufacturer__packager__type =
	v1_0_base__FGBuildableManufacturer__packager__type & FGBuildable__base__type;

export type FGBuildableManufacturer__smelter__type =
	v1_0_base__FGBuildableManufacturer__smelter__type & FGBuildable__base__type;

export type FGBuildableManufacturer__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__packager__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__blender__type,
			FGBuildableManufacturer__constructor__type,
			FGBuildableManufacturer__smelter__type,
		];
	};
