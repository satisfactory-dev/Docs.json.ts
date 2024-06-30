import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {integer_string__type} from '../../common/scalar';

import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../common/unassigned';

export type FGItemDescriptorNuclearFuel__type =
	FGItemDescriptor__FGResourceDescriptor__type & {
		mSpentFuelClass: UnrealEngineString<
			'/Script/Engine.BlueprintGeneratedClass',
			StringStartsWith<'/Game/FactoryGame/Resource/Parts/NuclearWaste/'>
		>;
		mAmountOfWaste: integer_string__type;
	};

export type FGItemDescriptorNuclearFuel__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptorNuclearFuel__type,
		FGItemDescriptorNuclearFuel__type,
	];
};
