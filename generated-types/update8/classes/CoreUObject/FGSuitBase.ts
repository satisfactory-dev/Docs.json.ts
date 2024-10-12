import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGSuitBase__type = FGEquipment__base__type & {
	mImmunity: decimal_string__type;
	mIsWorking: boolean__type;
	mHasNegatedDamage: boolean__type;
	mDamageNegated: decimal_string__type;
	mFilterDuration: decimal_string__type;
	mCountdown: decimal_string__type;
	mDisableEffectTimer: decimal_string__type;
	mIsBurningFuel: boolean__type;
	mSuit1PMeshMaterials: [
		{
			SlotName:
				| 'Body_Details'
				| 'Body_01'
				| 'Body_02'
				| 'Body_Hands'
				| 'Body_Backpack';
			Material: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
		},
		...{
			SlotName:
				| 'Body_Details'
				| 'Body_01'
				| 'Body_02'
				| 'Body_Hands'
				| 'Body_Backpack';
			Material: UnrealEngineString<
				'/Script/Engine.MaterialInstanceConstant',
				StringStartsWith<'/Game/FactoryGame/Character/Player/Material/'>
			>;
		}[],
	];
};

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
