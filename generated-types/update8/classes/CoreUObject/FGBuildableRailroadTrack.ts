import {FGBuildable__base__type} from './FGBuildable';

import {
	integer_string__type,
	integer_string__signed__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {common_base__FGBuildableRailroadTrack__type} from '../../../common/classes/CoreUObject/FGBuildableRailroadTrack';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRailroadTrack__type =
	FGBuildableRailroadTrack__merged__type & {
		mBlockVisualizationMeshLength: decimal_string__type;
		mBlockVisualizationNumPrimitiveDataFloats: integer_string__type;
		mBlockVisualizationNumPerInstancePrimitiveDataCountOffset: integer_string__type;
		mBlockVisualizationSplineDataSettings: {
			StartTangentPrimitiveDataStartIndex: integer_string__type;
			EndPositionPrimitiveDataStartIndex: integer_string__type;
			EndTangentPrimitiveDataStartIndex: integer_string__type;
			InstanceScaleIndex: integer_string__signed__type;
		};
	};

export type FGBuildableRailroadTrack__merged__type =
	common_base__FGBuildableRailroadTrack__type &
		FGBuildable__base__type;

export type FGBuildableRailroadTrack__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRailroadTrack__type];
	};
