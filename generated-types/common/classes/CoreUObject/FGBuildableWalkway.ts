import {boolean__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableWalkway__type =
	common_base__FGBuildableWalkway__base__type & {
		mDisableSnapOn: {
			Right: boolean__type;
			Left: boolean__type;
			Top: boolean__type;
			Bottom: boolean__type;
		};
	};

export type common_base__FGBuildableWalkway__base__type =
	common_base__FGBuildable__base__type & {
		mSize: decimal_string__type;
		mElevation: decimal_string__type;
	};
