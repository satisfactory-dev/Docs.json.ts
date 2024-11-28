import {
	boolean__type,
	decimal_string__type,
	boolean_extended__type,
	integer_string__type,
} from '../../common/scalar';

import {
	empty_object__type,
	color_decimal__type,
} from '../../common/unassigned';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildableManufacturer__type =
	common_base__FGBuildableManufacturer__base__type;

export type common_base__FGBuildableManufacturer__base__type =
	common_base__FGBuildable__consumes_power_base__type & {
		IsPowered?: boolean__type;
		bIsPendingToKillVfx?: boolean__type;
		mProductionEffectsRunning?: boolean__type;
		mCurrentRecipeChanged: empty_object__type;
		mManufacturingSpeed: decimal_string__type;
		mFactoryInputConnections: '';
		mPipeInputConnections: '';
		mFactoryOutputConnections: '';
		mPipeOutputConnections: '';
		mStoppedProducingAnimationSounds?: boolean__type;
		mStoppedAkComponents?: boolean_extended__type;
		mSocketStoppedAkComponents?: '';
	};

export type common_base__FGBuildableManufacturer__blender__type =
	common_base__FGBuildableManufacturer__base__type & {
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

export type common_base__FGBuildableManufacturer__constructor__type =
	common_base__FGBuildableManufacturer__base__type;

export type common_base__FGBuildableManufacturer__packager__type =
	common_base__FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_Packager_C';
		mCurrentColor_VFX: color_decimal__type;
		CurrentPackagingMode: '';
	};

export type common_base__FGBuildableManufacturer__smelter__type =
	common_base__FGBuildableManufacturer__base__type & {
		ClassName?: 'Build_SmelterMk1_C';
		mIsPendingToKillVFX: boolean__type;
		mCachedCurrentPotential: integer_string__type;
	};
