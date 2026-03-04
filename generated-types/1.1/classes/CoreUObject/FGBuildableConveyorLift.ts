import {
	mInputOutputMeshDisplayMode__type,
	v1_0_base__FGBuildableConveyorLift__type,
	has__mAttachedThroughputMonitors__type,
} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {boolean__type} from '../../../common/common/scalar.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableConveyorLift__type =
	v1_0_base__FGBuildableConveyorLift__type &
		FGBuildableConveyorLift__properties__type &
		has__mAttachedThroughputMonitors__type &
		FGBuildable__base__type;

export type FGBuildableConveyorLift__properties__type = {
	mOutputMeshDisplayMode: mInputOutputMeshDisplayMode__type;
	mInputMeshDisplayMode: mInputOutputMeshDisplayMode__type;
	mIsBeltUsingInputRotation: boolean__type;
};

export type FGBuildableConveyorLift__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableConveyorLift__type,
			...FGBuildableConveyorLift__type[],
		];
	};
