import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {common_base__FGSuitBase__type} from '../../../common/classes/CoreUObject/FGSuitBase';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGSuitBase__type = FGSuitBase__merged__type & {
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

export type FGSuitBase__merged__type =
	common_base__FGSuitBase__type & FGEquipment__base__type;

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
