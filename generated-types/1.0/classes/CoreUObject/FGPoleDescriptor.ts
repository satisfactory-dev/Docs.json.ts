import {UnrealEngineString} from '../../utils/validators';

import {FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../common/unassigned';

export type FGPoleDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mForm: 'RF_INVALID';
		mSubCategories: [
			UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_ConverPole.SC_ConverPole_C'
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_PipeSupport.SC_PipeSupport_C'
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_HyperTubes.SC_HyperTubes_C'
			>,
			...UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_ConverPole.SC_ConverPole_C'
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_PipeSupport.SC_PipeSupport_C'
				| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/SC_HyperTubes.SC_HyperTubes_C'
			>[],
		];
	};

export type FGPoleDescriptor__NativeClass = NativeClass__type & {
	Classes: [FGPoleDescriptor__type, ...FGPoleDescriptor__type[]];
};
