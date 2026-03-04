import type {
	mPoleVariations__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	decimal_string__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildablePoleLightweight__properties__type
} from '../../../common/classes/CoreUObject/FGBuildablePoleLightweight.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePoleConveyor__type
	= FGBuildablePoleConveyor__merged__type & {
		mLength: decimal_string__type,
		mPoleVariations: mPoleVariations__type,
	};

export type FGBuildablePoleConveyor__merged__type
	= common_base__FGBuildablePoleLightweight__properties__type
		& FGBuildable__base__type;

export type FGBuildablePoleConveyor__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePoleConveyor__type],
	};
