import {FGBuildableManufacturer__base__type} from './FGBuildableManufacturer.js';

import {
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
	common_base__FGBuildableManufacturerVariablePower__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableManufacturerVariablePower.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableManufacturerVariablePower__type =
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type &
		FGBuildableManufacturerVariablePower__base__type;

export type FGBuildableManufacturerVariablePower__base__type =
	FGBuildableManufacturerVariablePower__base__merged__type;

export type FGBuildableManufacturerVariablePower__base__merged__type =
	common_base__FGBuildableManufacturerVariablePower__base__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturerVariablePower__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableManufacturerVariablePower__type];
	};
