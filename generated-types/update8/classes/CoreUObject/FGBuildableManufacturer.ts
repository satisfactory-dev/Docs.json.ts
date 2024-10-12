import {boolean__type, boolean_extended__type} from '../../common/scalar';

import {
	empty_object__type,
	mOutputInventoryHandlerData__type,
} from '../../common/unassigned';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	color_decimal__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableManufacturer__type =
	FGBuildableManufacturer__base__type;

export type FGBuildableManufacturer__base__type =
	FGBuildable__consumes_power_base__type & {
		IsPowered?: boolean__type;
		bIsPendingToKillVfx?: boolean__type;
		mProductionEffectsRunning?: boolean__type;
		mCurrentRecipeChanged: empty_object__type;
		mManufacturingSpeed: decimal_string__type;
		mFactoryInputConnections: '';
		mPipeInputConnections: '';
		mFactoryOutputConnections: '';
		mPipeOutputConnections: '';
		mInputInventoryHandlerData: empty_object__type;
		mOutputInventoryHandlerData: mOutputInventoryHandlerData__type;
		mStoppedProducingAnimationSounds?: boolean__type;
		mStoppedAkComponents?: boolean_extended__type;
		mSocketStoppedAkComponents?: '';
	};

export type FGBuildableManufacturer__blender__type =
	FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_Blender_C';
		mCurrentColorVFX: color_decimal__type;
		m_NotifyNameREferences: [
			'Arm_04_ClawBase' | 'Arm_02_SFXSocket',
			'Arm_04_ClawBase' | 'Arm_02_SFXSocket',
			...('Arm_04_ClawBase' | 'Arm_02_SFXSocket')[],
		];
		mColor: '';
		mIsRadioActive: boolean__type;
	};

export type FGBuildableManufacturer__constructor__type =
	FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_ConstructorMk1_C';
		mCurrentRecipeCheck: '';
		mPreviousRecipeCheck: '';
		CurrentPotentialConvert: [
			[integer_string__type, decimal_string__type],
			...[
				integer_string__type,
				decimal_string__type,
			][],
		];
	};

export type FGBuildableManufacturer__packager__type =
	FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_Packager_C';
		mCurrentColor_VFX: color_decimal__type;
		CurrentPackagingMode: '';
	};

export type FGBuildableManufacturer__smelter__type =
	FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_SmelterMk1_C';
		mIsPendingToKillVFX: boolean__type;
		mCachedCurrentPotential: integer_string__type;
	};

export type FGBuildableManufacturer__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildableManufacturer__type
				| FGBuildableManufacturer__packager__type
				| FGBuildableManufacturer__blender__type
				| FGBuildableManufacturer__smelter__type
				| FGBuildableManufacturer__constructor__type
			),
			...(
				| FGBuildableManufacturer__type
				| FGBuildableManufacturer__packager__type
				| FGBuildableManufacturer__blender__type
				| FGBuildableManufacturer__smelter__type
				| FGBuildableManufacturer__constructor__type
			)[],
		];
	};
