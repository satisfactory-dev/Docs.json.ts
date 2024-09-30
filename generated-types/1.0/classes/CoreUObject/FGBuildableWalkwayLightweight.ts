import {
	mDisableSnapOn__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildableWalkway__base__type} from './FGBuildableWalkway';

export type FGBuildableWalkwayLightweight__type =
	FGBuildableWalkway__base__type & {
		mDisableSnapOn: mDisableSnapOn__type;
	};

export type FGBuildableWalkwayLightweight__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWalkwayLightweight__type,
		...FGBuildableWalkwayLightweight__type[],
	];
};
