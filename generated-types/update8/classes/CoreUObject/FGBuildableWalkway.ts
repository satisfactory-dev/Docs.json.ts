import {FGBuildableWalkwayLightweight__type} from './FGBuildableWalkwayLightweight';

import {boolean__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWalkway__type = FGBuildableWalkway__base__type & {
	mDisableSnapOn: {
		Right: boolean__type;
		Left: boolean__type;
		Top: boolean__type;
		Bottom: boolean__type;
	};
};

export type FGBuildableWalkway__base__type = FGBuildable__base__type & {
	mSize: decimal_string__type;
	mElevation: decimal_string__type;
};

export type FGBuildableWalkway__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		];
	};
