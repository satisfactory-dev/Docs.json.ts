import {decimal_string__type} from '../../common/scalar';

import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGPowerShardDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__type & {
		mPowerShardType: 'PST_Overclock' | 'PST_ProductionBoost';
		mExtraPotential: decimal_string__type;
		mExtraProductionBoost: decimal_string__type;
	};

export type FGPowerShardDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGPowerShardDescriptor__type, FGPowerShardDescriptor__type];
	};
