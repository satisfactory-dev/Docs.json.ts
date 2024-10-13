import {mLightControlData__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	color_decimal__type,
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

export type FGBuildableLightSource__type =
	FGBuildableLightSource__base__type & {
		newCustomizationData?: {
			OverrideColorData: {
				PrimaryColor: color_decimal__type;
				SecondaryColor: color_decimal__type;
			};
		};
	};

export type FGBuildableLightSource__base__type = FGBuildable__base__type & {
	OnBuildableLightSourceStateChanged: empty_object__type;
	mIsEnabled: boolean__type;
	mLightControlData: mLightControlData__type;
	mPowerConsumption: decimal_string__type;
	mHasPower: boolean__type;
	mIsDay: boolean__type;
};

export type FGBuildableLightSource__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightSource__type, ...FGBuildableLightSource__type[]];
	};
