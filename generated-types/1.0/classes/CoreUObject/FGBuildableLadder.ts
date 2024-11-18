import {FGBuildable__base__type} from './FGBuildable';

import {common_base__FGBuildableLadder__type} from '../../../common/classes/CoreUObject/FGBuildableLadder';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableLadder__type = FGBuildableLadder__merged__type;

export type FGBuildableLadder__merged__type =
	common_base__FGBuildableLadder__type & FGBuildable__base__type;

export type FGBuildableLadder__NativeClass = NativeClass__type & {
	Classes: [FGBuildableLadder__type];
};
