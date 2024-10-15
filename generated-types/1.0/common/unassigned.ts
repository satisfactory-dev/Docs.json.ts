import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {FGBuildableBlueprintDesigner__base__type} from '../classes/CoreUObject/FGBuildableBlueprintDesigner';

import {FGBuildableResourceExtractor__miner__base__type} from '../classes/CoreUObject/FGBuildableResourceExtractor';

import {
	integer_string__type,
	decimal_string__type,
	boolean__type,
} from '../../common/common/scalar';

import {
	color_decimal__type,
	quaternion__type,
	xyz__type,
	None__type,
	empty_object__type,
} from '../../common/common/unassigned';

export type CameraAnim__type = UnrealEngineString<
	'/Script/TemplateSequence.CameraAnimationSequence',
	StringStartsWith<'/Game/FactoryGame/Character/Player/CameraShake/'>
>;

export type EditorCurveData__type = {
	EditorCurveData: {
		DefaultValue: decimal_string__type;
		PreInfinityExtrap: InfinityExtrap__type;
		PostInfinityExtrap: InfinityExtrap__type;
	};
	ExternalCurve?: UnrealEngineString<
		'/Script/Engine.CurveFloat',
		| '/Game/FactoryGame/Resource/Parts/SpikedRebar/SpikedRebar_Falloff.SpikedRebar_Falloff'
		| '/Game/FactoryGame/Resource/Parts/CartridgeStandard/LinearDamageFalloff.LinearDamageFalloff'
	>;
};

export type FGBuildableBlueprintDesigner__mk1__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_C';
		mDisplayName: 'Blueprint Designer Mk.1';
	};

export type FGBuildableBlueprintDesigner__mk2__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_MK2_C';
		mDisplayName: 'Blueprint Designer Mk.2';
	};

export type FGBuildableBlueprintDesigner__mk3__type =
	FGBuildableBlueprintDesigner__base__type & {
		ClassName: 'Build_BlueprintDesigner_Mk3_C';
		mDisplayName: 'Blueprint Designer Mk.3';
	};

export type FGBuildableResourceExtractor__miner_mk1__type =
	FGBuildableResourceExtractor__miner__base__type & {
		InternalStartUpTimer: decimal_string__type;
	};

export type FGBuildableResourceExtractor__miner_mk3__type =
	FGBuildableResourceExtractor__miner__base__type & {
		mInternalMiningState_0: 'NewEnumerator0';
		mToggleMiningStateHandle_0: empty_object__type;
		mMinimumDrillTime_0: decimal_string__type;
		mMaximumDrillTime_0: decimal_string__type;
	};

export type FilterMontageTag__type =
	| 'HasAmmunition'
	| 'EquipmentInHand_None'
	| 'EquipmentInHand_TwoHanded';

export type FilterMontageTag__charged__type =
	| 'LowCharged'
	| 'MediumCharged'
	| 'FullyCharged';

export type InfinityExtrap__type = 'RCCE_Constant';

export type ItemClass__type = [
	{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	}[],
];

export type ItemClass__amount_required__type = [
	{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	}[],
];

export type mAspect__type = 'RSA_None';

export type MaterialSlotName__type =
	| 'lambert1'
	| 'lambert10'
	| 'lambert9_001'
	| 'lambert2'
	| 'Material_002'
	| 'Material_003'
	| 'Rocket1'
	| 'Rocket2'
	| 'Rifle'
	| '01 - Default';

export type mBatteryStatus__type = 'BS_Idle';

export type mChainsawState__type = None__type;

export type mClearanceData__type =
	| ''
	| [
			{
				Type?: 'CT_Soft';
				ClearanceBox: {
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				};
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			},
			...{
				Type?: 'CT_Soft';
				ClearanceBox: {
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				};
				RelativeTransform?: {
					Rotation?: quaternion__type;
					Translation?: xyz__type;
					Scale3D?: xyz__type;
				};
				ExcludeForSnapping?: boolean__type;
			}[],
	];

export type mDamageTypes__type = [
	UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>,
	...UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>[],
];

export type mDisableSnapOn__type =
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Bottom: boolean__type;
	}
	| {
			Top: boolean__type;
	}
	| {
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Left: boolean__type;
	}
	| {
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Right: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
	}
	| {
			Right: boolean__type;
			Top: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
	}
	| {
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
	}
	| {
			Front: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
	}
	| {
			Front: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Top: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Bottom: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
	}
	| {
			Front: boolean__type;
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
	};

export type mDockingRuleSet__type = {
	DockForDuration: decimal_string__type;
};

export type mEventType__type = 'EV_Christmas';

export type mEventType__optional_csv__type =
	| ''
	| [mEventType__type, ...mEventType__type[]];

export type mForm__type = 'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_INVALID';

export type mGasType__type = 'GT_NORMAL' | 'GT_ENERGY';

export type mLightControlData__type = {
	Intensity: decimal_string__type;
};

export type Montage_1P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/FirstPerson/'>
>;

export type Montage_3P__type = UnrealEngineString<
	'/Script/Engine.AnimMontage',
	StringStartsWith<'/Game/FactoryGame/Character/Player/Animation/ThirdPerson/'>
>;

export type mPlatformDockingStatus__type = 'ETPDS_None';

export type mSnappedPassthroughs__type = '';

export type SpecifiedColor__type = {
	SpecifiedColor: color_decimal__type;
};

export type transformation__type = {
	Rotation: quaternion__type;
	Translation: xyz__type;
	Scale3D: xyz__type;
};

export type weaponState__type = 'EWS_Unequipped';
