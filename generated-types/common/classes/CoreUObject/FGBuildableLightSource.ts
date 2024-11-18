import {
	color_decimal__type,
	empty_object__type,
	common_base__mLightControlData__type,
} from '../../common/unassigned';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableLightSource__type =
	common_base__FGBuildableLightSource__base__type & {
		newCustomizationData?: {
			OverrideColorData: {
				PrimaryColor: color_decimal__type;
				SecondaryColor: color_decimal__type;
			};
		};
	};

export type common_base__FGBuildableLightSource__base__type =
	common_base__FGBuildable__base__type & {
		OnBuildableLightSourceStateChanged: empty_object__type;
		mIsEnabled: boolean__type;
		mLightControlData: common_base__mLightControlData__type;
		mPowerConsumption: decimal_string__type;
		mHasPower: boolean__type;
		mIsDay: boolean__type;
	};
