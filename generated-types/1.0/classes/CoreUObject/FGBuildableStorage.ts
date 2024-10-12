import {integer_string__type} from '../../common/scalar';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableStorage__type =
	FGBuildable__consumes_power_base__type & {
		mStackingHeight: decimal_string__type;
		mInventorySizeX: integer_string__type;
		mInventorySizeY: integer_string__type;
	};

export type FGBuildableStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableStorage__type, ...FGBuildableStorage__type[]];
	};
