import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildableLadder__type} from '../../../common/classes/CoreUObject/FGBuildableLadder.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableLadder__type =
	common_base__FGBuildableLadder__type & FGBuildable__base__type;

export type FGBuildableLadder__NativeClass = NativeClass__type & {
	Classes: [FGBuildableLadder__type];
};
