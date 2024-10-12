import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	color_decimal__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGResourceDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__type & {
		mDecalSize: decimal_string__type;
		mPingColor: color_decimal__type;
		mCollectSpeedMultiplier: decimal_string__type;
		mManualMiningAudioName: 'Metal';
	};

export type FGResourceDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGResourceDescriptor__type, ...FGResourceDescriptor__type[]];
	};
