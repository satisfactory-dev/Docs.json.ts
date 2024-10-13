import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type} from '../../common/scalar';

import {FilterMontageTag__type, xyz__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGHoverPack__type = FGEquipment__base__type & {
	mCurrentPlayerVelocity_SFX: decimal_string__type;
	mCurrentMouseDelta_SFX: decimal_string__type;
	mLowBatteryWarningActive_SFX: boolean__type;
	mPropellerVFX: '';
	ConnectionLocationUpdatedDelegate: empty_object__type;
	ConnectionStatusUpdatedDelegate: empty_object__type;
	HoverModeChangedDelegate: empty_object__type;
	RangeWarningToggleDelegate: empty_object__type;
	mHoverSpeed: decimal_string__type;
	mHoverAccelerationSpeed: decimal_string__type;
	mHoverSprintMultiplier: decimal_string__type;
	mHoverFriction: decimal_string__type;
	mJumpKeyHoldActivationTime: decimal_string__type;
	mFallSpeedLimitWhenPowered: decimal_string__type;
	mPowerConnectionSearchRadius: decimal_string__type;
	mPowerConnectionSearchTickRate: decimal_string__type;
	mPowerConnectionDisconnectionTime: decimal_string__type;
	mPowerCapacity: decimal_string__type;
	mPowerDrainRate: decimal_string__type;
	mPowerConsumption: decimal_string__type;
	mCurrentPowerLevel: decimal_string__type;
	mRangeWarningNormalizedDistanceThreshold: decimal_string__type;
	mDisplayRangeWarning: boolean__type;
	mCurrentHoverMode: 'HPM_Inactive';
	mHasConnection: boolean__type;
	mShouldAutomaticallyHoverWhenConnected: boolean__type;
	mCrouchHoverCancelTime: decimal_string__type;
	mCharacterUseDistanceWhenActive: decimal_string__type;
	mActiveNoiseFrequency: decimal_string__type;
	mCurrentConnectionLocation: xyz__type;
	mEquipMontage?: {
		Montages: [
			{
				Filter?: boolean__type;
				FilterMontageTag?: FilterMontageTag__type;
				Exclusive?: boolean__type;
				AudioEvent: FGHoverPack__AudioEvent__type;
			},
			{
				Filter?: boolean__type;
				FilterMontageTag?: FilterMontageTag__type;
				Exclusive?: boolean__type;
				AudioEvent: FGHoverPack__AudioEvent__type;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: FGHoverPack__AudioEvent__type;
	};
};

export type FGHoverPack__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
>;

export type FGHoverPack__NativeClass = NativeClass__type & {
	Classes: [FGHoverPack__type];
};
