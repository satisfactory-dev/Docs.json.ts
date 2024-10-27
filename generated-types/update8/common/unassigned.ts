import {UnrealEngineString} from '../utils/validators';

import {FGBuildableResourceExtractor__miner__base__type} from '../classes/CoreUObject/FGBuildableResourceExtractor';

import {
	decimal_string__type,
	boolean__type,
} from '../../common/common/scalar';

import {
	InfinityExtrap__type,
	None__type,
	empty_object__type,
} from '../../common/common/unassigned';

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

export type FGBuildableResourceExtractor__miner_mk3__type =
	FGBuildableResourceExtractor__miner__base__type & {
		mInternalMiningState_0: 'NewEnumerator0';
		mToggleMiningStateHandle_0: empty_object__type;
		mMinimumDrillTime_0: decimal_string__type;
		mMaximumDrillTime_0: decimal_string__type;
	};

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

export type mChainsawState__type = None__type;

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

export type mLightControlData__type = {
	Intensity: decimal_string__type;
};

export type mOutputInventoryHandlerData__type =
	empty_object__type;

export type mSnappedPassthroughs__type = '';

export type weaponState__type = 'EWS_Unequipped';
