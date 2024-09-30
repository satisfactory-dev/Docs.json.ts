import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

export type FGSuitBase__type = FGEquipment__base__type & {
	mImmunity: decimal_string__type;
	mIsWorking: boolean__type;
	mHasNegatedDamage: boolean__type;
	mDamageNegated: decimal_string__type;
	mFilterDuration: decimal_string__type;
	mCountdown: decimal_string__type;
	mDisableEffectTimer: decimal_string__type;
	mIsBurningFuel: boolean__type;
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

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
