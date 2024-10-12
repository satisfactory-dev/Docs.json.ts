import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentZipline__type = FGEquipment__base__type & {
	mShouldPlayDeactivateSound: boolean__type;
	mZiplineJumpLaunchVelocity: decimal_string__type;
	mMaxZiplineAngle: decimal_string__type;
	mTraceDistance: decimal_string__type;
	mTraceStartOffset: decimal_string__type;
	mTraceRadius: decimal_string__type;
	mVisualizeTraceDistance: boolean__type;
	mActiveNoiseFrequency: decimal_string__type;
	mZiplineReattachCooldown: decimal_string__type;
};

export type FGEquipmentZipline__NativeClass =
	NativeClass__type & {
		Classes: [FGEquipmentZipline__type];
	};
