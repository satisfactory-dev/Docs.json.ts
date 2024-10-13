import {boolean__type} from '../../common/scalar';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	xyz_array__type,
	xyz__type,
	empty_object__type,
	color_decimal__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePortal__type = FGBuildablePortal__base__type & {
	ClassName?: 'Build_Portal_C';
	OffsetFromPortalSurface: decimal_string__type;
	LightningStartVector: xyz_array__type;
	LightningEndVector: xyz_array__type;
	['In Value']: decimal_string__type;
	mFuelSlotSize: integer_string__type;
	mMinFuelToStartProducing: integer_string__type;
	mMinFuelToStartProducingAfterAbruptStop: integer_string__type;
	mPortalDisconnectedCooldownTime?: decimal_string__type;
	mCachedInputConnections: '';
	mHeatUpComplete: boolean__type;
	mHeatUpCycleTime: decimal_string__type;
	mCurrentHeatUpProgress: decimal_string__type;
	mCurrentProductionProgress: decimal_string__type;
	mLinkedPortalDisconnectCooldownTimeLeft: decimal_string__type;
	mCurrentProductionCycleTime: decimal_string__type;
	mTrippedProductionStop: boolean__type;
	mCachedHasEnoughFuelForProduce: boolean__type;
	mPortalName?: 'Portal';
};

export type FGBuildablePortal__base__type =
	FGBuildable__consumes_power_base__type & {
		['HeatingUpPlaying ID']: integer_string__type;
		LightningEndLoc: xyz__type;
		LightningStartLoc: xyz__type;
		LightningStartSocket: [
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
			(
				| 'LightningStartLocSocket'
				| 'LightningStartLocSocketL'
				| 'LightningStartLocSocketR'
				| 'LightningStartLocSocketA'
				| 'LightningStartLocSocketB'
			),
		];
		LightningEndSocket?: [
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
			(
				| 'LightningEndLocSocket'
				| 'LightningEndLocSocketL'
				| 'LightningEndLocSocketR'
				| 'LightningEndLocSocketA'
				| 'LightningEndLocSocketB'
			),
		];
		mTeleportationCompleteRepNotify: integer_string__type;
		mTeleportationBeginRepNotify?: integer_string__type;
		PortalActive: decimal_string__type;
		PortalFluctuation: decimal_string__type;
		mOnLinkedPortalChanged: empty_object__type;
		mOnPortalTraversableChanged: empty_object__type;
		mOnHeatUpStateChanged: empty_object__type;
		mMaxPortalTravelTime: decimal_string__type;
		mIsPortalTraversable: boolean__type;
		mActorRepresentationColor: color_decimal__type;
		mActorRepresentationViewDistance: 'CVD_Far';
		mActorRepresentationFogOfWarRevealRadius: decimal_string__type;
		mTeleportPowerConsumptionTimeLeft: decimal_string__type;
		mTeleportPowerConsumption: decimal_string__type;
		mCachedFactoryTickData: empty_object__type;
	};

export type FGBuildablePortal__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePortal__type];
};
