import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	mPoleVariations__type,
	v1_0_base__FGBuildablePipelineSupport__properties__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	quaternion__type,
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	boolean__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {common_base__FGBuildablePoleLightweight__properties__type} from '../../../common/classes/CoreUObject/FGBuildablePoleLightweight';

export type FGBuildablePolePipe__type = FGBuildablePolePipe__mergd__type & {
	mSupportMeshInstanceData: {
		StaticMesh: UnrealEngineString<
			'/Script/Engine.StaticMesh',
			StringStartsWith<'/Game/FactoryGame/Buildable/Factory/'>
		>;
		RelativeTransform: {
			Rotation: quaternion__type;
			Translation: xyz__type;
			Scale3D: xyz__type;
		};
		bUseBatchedCollision: boolean__type;
		PositionOffset: xyz__type;
		ScaleOffset: xyz__type;
		NumCustomDataFloats: integer_string__type;
		CollisionProfileName: 'BuildingMeshExceptCamera';
		bCastShadows: boolean__type;
		bCastDistanceFieldShadows: boolean__type;
		MaxDrawDistance: decimal_string__type;
		MaxWPODistance: decimal_string__type;
		bAllowLazyInstance: boolean__type;
		CollisionMeshSurfaceOverride: {
			OcclusionValue: decimal_string__type;
		};
	};
	mPoleVariations: mPoleVariations__type;
};

export type FGBuildablePolePipe__mergd__type =
	common_base__FGBuildablePoleLightweight__properties__type &
		v1_0_base__FGBuildablePipelineSupport__properties__type &
		FGBuildable__base__type;

export type FGBuildablePolePipe__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePolePipe__type, ...FGBuildablePolePipe__type[]];
	};
