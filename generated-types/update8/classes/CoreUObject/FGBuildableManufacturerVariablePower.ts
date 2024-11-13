import {FGBuildableManufacturer__base__type} from './FGBuildableManufacturer';

import {
	common_base__FGBuildableManufacturerVariablePower__base__type,
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
} from '../../../common/classes/CoreUObject/FGBuildableManufacturerVariablePower';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableManufacturerVariablePower__type =
	FGBuildableManufacturerVariablePower__HadronCollider__merged__type;

export type FGBuildableManufacturerVariablePower__base__type =
	FGBuildableManufacturerVariablePower__base__merged__type;

export type FGBuildableManufacturerVariablePower__base__merged__type =
	common_base__FGBuildableManufacturerVariablePower__base__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturerVariablePower__HadronCollider__merged__type =
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type &
		FGBuildableManufacturerVariablePower__base__type;

export type FGBuildableManufacturerVariablePower__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableManufacturerVariablePower__type];
	};
