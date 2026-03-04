import {UnrealEngineString, StringStartsWith} from '../../utils/validators.js';

import {integer_string__type} from '../../common/scalar.js';

import {common_base__FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor.js';

export type common_base__FGItemDescriptorNuclearFuel__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__type & {
		mAmountOfWaste: integer_string__type;
	};

export type common_base__FGItemDescriptorNuclearFuel__waste__type =
	UnrealEngineString<
		'/Script/Engine.BlueprintGeneratedClass',
		StringStartsWith<'/Game/FactoryGame/Resource/Parts/NuclearWaste/'>
	>;
