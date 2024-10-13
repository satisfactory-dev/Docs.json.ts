import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	boolean__type,
	integer_string__type,
} from '../../../common/common/scalar';

export type FGJetPack__type = FGEquipment__base__type & {
	FuelTypeDescriptos: '';
	mOnFuelAmountChanged: empty_object__type;
	mOnBurnPercentChanged: empty_object__type;
	mOnFuelTypeChanged: empty_object__type;
	mDefaultAirControl: decimal_string__type;
	mRTPCInterval: decimal_string__type;
	mThrustCooldown: decimal_string__type;
	mCurrentFuel: decimal_string__type;
	mIsThrusting: boolean__type;
	mFuelTypes: [
		UnrealEngineString<
			'/Script/Engine.BlueprintGeneratedClass',
			StringStartsWith<'/Game/FactoryGame/Testing/JetPack/'>
		>,
		...UnrealEngineString<
			'/Script/Engine.BlueprintGeneratedClass',
			StringStartsWith<'/Game/FactoryGame/Testing/JetPack/'>
		>[],
	];
	mSelectedFuelType: integer_string__type;
	mCurrentFuelType: integer_string__type;
	mActiveNoiseFrequency: decimal_string__type;
};

export type FGJetPack__NativeClass = NativeClass__type & {
	Classes: [FGJetPack__type];
};
