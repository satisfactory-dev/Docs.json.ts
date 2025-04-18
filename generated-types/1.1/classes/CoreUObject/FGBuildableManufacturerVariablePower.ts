import {
	v1_0_base__FGBuildableManufacturerVariablePower__base__merged__type,
	v1_0_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
	v1_0_base__FGBuildableManufacturerVariablePower__QuantumEncoder__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableManufacturerVariablePower__base__type =
	FGBuildableManufacturerVariablePower__base__merged__type;

export type FGBuildableManufacturerVariablePower__base__merged__type =
	v1_0_base__FGBuildableManufacturerVariablePower__base__merged__type &
		FGBuildable__base__type;

export type FGBuildableManufacturerVariablePower__HadronCollider__type =
	v1_0_base__FGBuildableManufacturerVariablePower__HadronCollider__type &
		FGBuildable__base__type;

export type FGBuildableManufacturerVariablePower__QuantumEncoder__type =
	FGBuildableManufacturerVariablePower__QuantumEncoder__merged__type;

export type FGBuildableManufacturerVariablePower__QuantumEncoder__merged__type =
	v1_0_base__FGBuildableManufacturerVariablePower__QuantumEncoder__type &
		FGBuildable__base__type;

export type FGBuildableManufacturerVariablePower__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableManufacturerVariablePower__QuantumEncoder__type,
			FGBuildableManufacturerVariablePower__base__type,
			FGBuildableManufacturerVariablePower__HadronCollider__type,
		];
	};
