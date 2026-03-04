import type {
	FGBuildableManufacturer__base__type
} from './FGBuildableManufacturer.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildableManufacturerVariablePower__base__type,
	common_base__FGBuildableManufacturerVariablePower__HadronCollider__type,
} from '../../../common/classes/CoreUObject/FGBuildableManufacturerVariablePower.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableManufacturerVariablePower__base__type
	= FGBuildableManufacturerVariablePower__base__merged__type;

export type FGBuildableManufacturerVariablePower__base__merged__type
	= common_base__FGBuildableManufacturerVariablePower__base__type
		& FGBuildableManufacturer__base__type;

export type FGBuildableManufacturerVariablePower__HadronCollider__type
	= common_base__FGBuildableManufacturerVariablePower__HadronCollider__type
		& FGBuildableManufacturerVariablePower__base__type;

export type FGBuildableManufacturerVariablePower__QuantumEncoder__type
	= FGBuildableManufacturerVariablePower__base__type & {
		IsAnimProducing: boolean__type,
	};

export type FGBuildableManufacturerVariablePower__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableManufacturerVariablePower__QuantumEncoder__type,
			FGBuildableManufacturerVariablePower__base__type,
			FGBuildableManufacturerVariablePower__HadronCollider__type,
		],
	};
