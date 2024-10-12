import {boolean__type} from '../../common/scalar';

import {FGBuildableWall__base__rectangle__type} from './FGBuildableWall';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableDoor__type = FGBuildableDoor__base__type & {
	IsDoorOpen: boolean__type;
};

export type FGBuildableDoor__automated__type = FGBuildableDoor__base__type & {
	bigOverlapList: '';
};

export type FGBuildableDoor__base__type =
	FGBuildableWall__base__rectangle__type & {
		mCanBeLocked: boolean__type;
		mAnimationRate: decimal_string__type;
		mMovementRate: decimal_string__type;
		EasingFunction: 'ExpoInOut' | 'Linear';
		BlendExp: decimal_string__type;
		Steps: integer_string__type;
	};

export type FGBuildableDoor__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableDoor__type | FGBuildableDoor__automated__type,
		...(FGBuildableDoor__type | FGBuildableDoor__automated__type)[],
	];
};
