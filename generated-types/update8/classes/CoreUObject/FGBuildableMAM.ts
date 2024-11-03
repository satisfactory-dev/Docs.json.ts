import {FGBuildable__occupied__type} from './FGBuildable';

import {common_base__FGBuildableMAM__type} from '../../../common/classes/CoreUObject/FGBuildableMAM';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableMAM__type = FGBuildableMAM__merged__type;

export type FGBuildableMAM__merged__type =
	common_base__FGBuildableMAM__type & FGBuildable__occupied__type;

export type FGBuildableMAM__NativeClass = NativeClass__type & {
	Classes: [FGBuildableMAM__type];
};
