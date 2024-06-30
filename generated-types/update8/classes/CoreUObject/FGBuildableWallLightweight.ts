import {FGBuildableWall__base__rectangle__type} from './FGBuildableWall';

import {NativeClass__type} from '../../common/unassigned';

export type FGBuildableWallLightweight__type =
	FGBuildableWall__base__rectangle__type;

export type FGBuildableWallLightweight__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWallLightweight__type,
		...FGBuildableWallLightweight__type[],
	];
};
