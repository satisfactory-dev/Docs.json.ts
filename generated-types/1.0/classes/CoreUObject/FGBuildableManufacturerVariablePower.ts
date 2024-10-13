import {FGBuildableManufacturer__base__type} from './FGBuildableManufacturer';

import {
	decimal_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	xyz_array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableManufacturerVariablePower__base__type =
	FGBuildableManufacturer__base__type & {
		mEstimatedMininumPowerConsumption: decimal_string__type;
		mEstimatedMaximumPowerConsumption: decimal_string__type;
	};

export type FGBuildableManufacturerVariablePower__HadronCollider__type =
	FGBuildableManufacturerVariablePower__base__type & {
		mSequenceDuration: decimal_string__type;
		mLightningTimer: empty_object__type;
		mGameTimeAtProducing: decimal_string__type;
		mCurrentProducingSeekTime: decimal_string__type;
		mStartVector_VFX_Small_Start: xyz_array__type;
		mStartVector_VFX_Small_End: xyz_array__type;
		mStartVector_VFX_Medium_Start: xyz_array__type;
		mStartVector_VFX_Medium_End: xyz_array__type;
		mStartVector_VFX_Large_Start: xyz_array__type;
		mStartVector_VFX_Large_End: xyz_array__type;
		mEstimatedMininumPowerConsumption: decimal_string__type;
		mEstimatedMaximumPowerConsumption: decimal_string__type;
	};

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
