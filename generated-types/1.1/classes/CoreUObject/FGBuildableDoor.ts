import {
	FGBuildableDoor__automated__with__bigOverlapList_0__type,
	v1_0_base__FGBuildableDoor__base__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {boolean__type} from '../../../common/common/scalar';

import {
	common_base__FGBuildableDoor__base__type,
	common_base__FGBuildableDoor__automated__type,
} from '../../../common/classes/CoreUObject/FGBuildableDoor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableDoor__type =
	common_base__FGBuildableDoor__base__type &
		v1_0_base__FGBuildableDoor__base__type &
		FGBuildableDoor__properties__type &
		FGBuildable__base__type;

export type FGBuildableDoor__automated__type =
	common_base__FGBuildableDoor__automated__type &
		v1_0_base__FGBuildableDoor__base__type &
		FGBuildable__base__type;

export type FGBuildableDoor__properties__type = {
	IsDoorOpen: boolean__type;
};

export type FGBuildableDoor__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableDoor__automated__type,
		FGBuildableDoor__automated__with__bigOverlapList_0__type,
		FGBuildableDoor__automated__with__bigOverlapList_0__type,
		FGBuildableDoor__type,
		FGBuildableDoor__type,
		FGBuildableDoor__type,
		FGBuildableDoor__type,
		FGBuildableDoor__type,
		FGBuildableDoor__type,
		FGBuildableDoor__automated__type,
	];
};
