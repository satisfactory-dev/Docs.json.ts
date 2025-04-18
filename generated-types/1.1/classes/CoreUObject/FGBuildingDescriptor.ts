import {v1_0_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type} from '../../common/unassigned';

import {boolean__type} from '../../../common/common/scalar';

import {common_base__FGBuildingDescriptor__base__type} from '../../../common/classes/CoreUObject/FGBuildingDescriptor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildingDescriptor__type = FGBuildingDescriptor__merged__type & {
	mUsesDistanceForZooping: boolean__type;
};

export type FGBuildingDescriptor__merged__type =
	common_base__FGBuildingDescriptor__base__type &
		v1_0_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type;

export type FGBuildingDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildingDescriptor__type, ...FGBuildingDescriptor__type[]];
	};
