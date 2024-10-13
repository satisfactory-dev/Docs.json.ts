import {xy__integer__type, xy__type, xyz__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	color_decimal__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableWidgetSign__type = FGBuildable__base__type & {
	mGainSignificanceDistance: decimal_string__type;
	mTextElementToDataMap: empty_object__type;
	mIconElementToDataMap: empty_object__type;
	mSignDrawSize: xy__integer__type;
	mPrefabTextElementSaveData: '';
	mPrefabIconElementSaveData: '';
	mForegroundColor: color_decimal__type;
	mBackgroundColor: color_decimal__type;
	mAuxilaryColor: color_decimal__type;
	mEmissive: decimal_string__type;
	mGlossiness: decimal_string__type;
	mDataVersion: integer_string__type;
	mSignPoles: '';
	mWorldDimensions: xy__type;
	mPoleOffset: xyz__type;
	mPoleScale: xy__type;
	mSignToSignOffset: decimal_string__type;
};

export type FGBuildableWidgetSign__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableWidgetSign__type, ...FGBuildableWidgetSign__type[]];
	};
