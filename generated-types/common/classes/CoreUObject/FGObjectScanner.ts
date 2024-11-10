import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGObjectScanner__type =
	common_base__FGEquipment__base__type & {
		mBeepDelayMax: decimal_string__type;
		mBeepDelayMin: decimal_string__type;
		mDetectionRange: decimal_string__type;
		mUpdateClosestObjectTime: decimal_string__type;
		mClosestObjectInScanRange: boolean__type;
		mNormalizedDistanceToClosestObject: decimal_string__type;
		mAngleToClosestObject: decimal_string__type;
	};
