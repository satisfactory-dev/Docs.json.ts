import {mPoleVariations__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {common_base__FGBuildablePoleLightweight__properties__type} from '../../../common/classes/CoreUObject/FGBuildablePoleLightweight';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePoleConveyor__type =
	FGBuildablePoleConveyor__merged__type & {
		mLength: decimal_string__type;
		mPoleVariations: mPoleVariations__type;
	};

export type FGBuildablePoleConveyor__merged__type =
	common_base__FGBuildablePoleLightweight__properties__type &
		FGBuildable__base__type;

export type FGBuildablePoleConveyor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePoleConveyor__type];
	};
