import {empty_object__type} from '../../common/unassigned.ts';

import {
	decimal_string__type,
	boolean__type,
	integer_string__type,
} from '../../common/scalar.ts';

import {common_base__FGEquipment__base__type} from './FGEquipment.ts';

export type common_base__FGJetPack__type =
	common_base__FGEquipment__base__type & {
		FuelTypeDescriptos: '';
		mOnFuelAmountChanged: empty_object__type;
		mOnBurnPercentChanged: empty_object__type;
		mOnFuelTypeChanged: empty_object__type;
		mDefaultAirControl: decimal_string__type;
		mRTPCInterval: decimal_string__type;
		mCurrentFuel: decimal_string__type;
		mIsThrusting: boolean__type;
		mSelectedFuelType: integer_string__type;
		mCurrentFuelType: integer_string__type;
		mActiveNoiseFrequency: decimal_string__type;
	};
