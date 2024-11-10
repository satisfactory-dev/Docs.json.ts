import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGEquipmentZipline__type =
	common_base__FGEquipment__base__type & {
		mZiplineJumpLaunchVelocity: decimal_string__type;
		mMaxZiplineAngle: decimal_string__type;
		mTraceDistance: decimal_string__type;
		mTraceStartOffset: decimal_string__type;
		mTraceRadius: decimal_string__type;
		mVisualizeTraceDistance: boolean__type;
		mActiveNoiseFrequency: decimal_string__type;
		mZiplineReattachCooldown: decimal_string__type;
	};
