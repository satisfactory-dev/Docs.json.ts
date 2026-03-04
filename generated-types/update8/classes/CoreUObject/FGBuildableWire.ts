import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildableWire__type} from '../../../common/classes/CoreUObject/FGBuildableWire.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableWire__type =
	common_base__FGBuildableWire__type & FGBuildable__base__type;

export type FGBuildableWire__NativeClass = NativeClass__type & {
	Classes: [FGBuildableWire__type, FGBuildableWire__type];
};
