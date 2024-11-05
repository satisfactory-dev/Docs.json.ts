import {
	boolean__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {common_base__FGBuildableWall__base__rectangle__type} from './FGBuildableWall';

export type common_base__FGBuildableDoor__type =
	common_base__FGBuildableDoor__base__type & {
		IsDoorOpen: boolean__type;
	};

export type common_base__FGBuildableDoor__automated__type =
	common_base__FGBuildableDoor__base__type & {
		bigOverlapList: '';
	};

export type common_base__FGBuildableDoor__base__type =
	common_base__FGBuildableWall__base__rectangle__type & {
		mCanBeLocked: boolean__type;
		mAnimationRate: decimal_string__type;
		mMovementRate: decimal_string__type;
		EasingFunction: 'ExpoInOut' | 'Linear';
		BlendExp: decimal_string__type;
		Steps: integer_string__type;
	};
