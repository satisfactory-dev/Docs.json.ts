import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {common_base__FGJetPack__type} from '../../../common/classes/CoreUObject/FGJetPack';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGJetPack__type = FGJetPack__merged__type & {
	mThrustCooldown: decimal_string__type;
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
};

export type FGJetPack__merged__type =
	common_base__FGJetPack__type & FGEquipment__base__type;

export type FGJetPack__NativeClass = NativeClass__type & {
	Classes: [FGJetPack__type];
};
