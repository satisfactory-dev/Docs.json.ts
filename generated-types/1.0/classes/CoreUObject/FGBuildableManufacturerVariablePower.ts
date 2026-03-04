import {FGBuildableManufacturer__base__type} from './FGBuildableManufacturer.js';

import {boolean__type} from '../../../common/common/scalar.ts';

import {
	common_base__FGBuildableManufacturerVariablePower__base__type,
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
} from '../../../common/classes/CoreUObject/FGBuildableManufacturerVariablePower.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableManufacturerVariablePower__base__type =
	FGBuildableManufacturerVariablePower__base__merged__type;

export type FGBuildableManufacturerVariablePower__base__merged__type =
	common_base__FGBuildableManufacturerVariablePower__base__type &
		FGBuildableManufacturer__base__type;

export type FGBuildableManufacturerVariablePower__HadronCollider__type =
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type &
		FGBuildableManufacturerVariablePower__base__type;

export type FGBuildableManufacturerVariablePower__QuantumEncoder__type =
	FGBuildableManufacturerVariablePower__base__type & {
		IsAnimProducing: boolean__type;
	};

export type FGBuildableManufacturerVariablePower__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableManufacturerVariablePower__QuantumEncoder__type,
			FGBuildableManufacturerVariablePower__base__type,
			FGBuildableManufacturerVariablePower__HadronCollider__type,
		];
	};
