import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	common_base__FGBuildableManufacturer__base__type,
	common_base__FGBuildableManufacturer__blender__type,
	common_base__FGBuildableManufacturer__constructor__type,
	common_base__FGBuildableManufacturer__type,
	common_base__FGBuildableManufacturer__packager__type,
	common_base__FGBuildableManufacturer__smelter__type,
} from '../../../common/classes/CoreUObject/FGBuildableManufacturer';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableManufacturer__type =
	FGBuildableManufacturer__merged__type;

export type FGBuildableManufacturer__base__type =
	FGBuildableManufacturer__base__merged__type;

export type FGBuildableManufacturer__base__merged__type =
	common_base__FGBuildableManufacturer__base__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableManufacturer__blender__type =
	FGBuildableManufacturer__blender__merged__type;

export type FGBuildableManufacturer__blender__merged__type =
	common_base__FGBuildableManufacturer__blender__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturer__constructor__type =
	FGBuildableManufacturer__constructor__merged__type;

export type FGBuildableManufacturer__constructor__merged__type =
	common_base__FGBuildableManufacturer__constructor__type &
		FGBuildableManufacturer__base__type &
		FGBuildableManufacturer__constructor__properties__type;

export type FGBuildableManufacturer__constructor__properties__type = {
	mAOAttenuationScalingFactor: decimal_string__type;
	mAOLayerZOffset: decimal_string__type;
	RTPC_AO_VolumeDB: decimal_string__type;
	RTPC_AO_HighpassValue: decimal_string__type;
	RTPC_AO_Pitch: decimal_string__type;
};

export type FGBuildableManufacturer__merged__type =
	common_base__FGBuildableManufacturer__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturer__packager__type =
	FGBuildableManufacturer__packager__merged__type;

export type FGBuildableManufacturer__packager__merged__type =
	common_base__FGBuildableManufacturer__packager__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturer__smelter__type =
	FGBuildableManufacturer__smelter__merged__type;

export type FGBuildableManufacturer__smelter__merged__type =
	common_base__FGBuildableManufacturer__smelter__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturer__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__packager__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__type,
			FGBuildableManufacturer__blender__type,
			FGBuildableManufacturer__smelter__type,
			FGBuildableManufacturer__constructor__type,
		];
	};
