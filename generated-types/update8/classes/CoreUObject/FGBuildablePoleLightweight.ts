import type {
	FGBuildable__pole__base__with_static__merged__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildablePoleLightweight__type
} from '../../../common/classes/CoreUObject/FGBuildablePoleLightweight.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePoleLightweight__type
	= common_base__FGBuildablePoleLightweight__type
		& FGBuildable__pole__base__with_static__merged__type;

export type FGBuildablePoleLightweight__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePoleLightweight__type],
	};
