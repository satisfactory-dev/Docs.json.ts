import {xyz__type, NativeClass__type} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

export type FGBuildablePillarLightweight__type = FGBuildable__base__type & {
	mSize: xyz__type;
	mIsSupport: boolean__type;
};

export type FGBuildablePillarLightweight__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildablePillarLightweight__type,
		...FGBuildablePillarLightweight__type[],
	];
};
