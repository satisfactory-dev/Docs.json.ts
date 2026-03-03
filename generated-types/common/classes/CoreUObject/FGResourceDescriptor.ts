import {decimal_string__type} from '../../common/scalar.ts';

import {color_decimal__type} from '../../common/unassigned.ts';

import {common_base__FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor.ts';

export type common_base__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__type & {
		mDecalSize: decimal_string__type;
		mPingColor: color_decimal__type;
		mCollectSpeedMultiplier: decimal_string__type;
		mManualMiningAudioName: Exclude<string, ''>;
	};
