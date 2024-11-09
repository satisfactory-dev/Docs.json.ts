import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGSuitBase__type} from '../../../common/classes/CoreUObject/FGSuitBase';

export type FGSuitBase__type = FGSuitBase__merged__type & {
	mSuitMeshMaterials: [
		{
			SlotName: 'Pioneer_torso' | 'Pioneer_Legs';
			Material: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
			Material3P: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
		},
		...{
			SlotName: 'Pioneer_torso' | 'Pioneer_Legs';
			Material: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
			Material3P: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
		}[],
	];
	mEquipMontage?: {
		Montages: [
			{
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HazmatSuit/'>
				>;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HazmatSuit/'>
		>;
	};
};

export type FGSuitBase__merged__type =
	common_base__FGSuitBase__type & FGEquipment__base__type;

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
