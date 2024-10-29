import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGBuildable__base__type} from './FGBuildable';

import {
	decimal_string__type,
	boolean__type,
	integer_string__signed__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableRailroadTrack__type = FGBuildable__base__type & {
	ClassName?: 'Build_RailroadTrack_C';
	mMeshLength: decimal_string__type;
	mConnections: [
		UnrealEngineString<
			'/Script/FactoryGame.FGRailroadTrackConnectionComponent',
			StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Track/'>
		>,
		...UnrealEngineString<
			'/Script/FactoryGame.FGRailroadTrackConnectionComponent',
			StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Track/'>
		>[],
	];
	mIsOwnedByPlatform: boolean__type;
	mTrackGraphID: integer_string__signed__type;
	mOverlappingTracks: '';
	mVehicles: empty_object__type;
	mSignalBlockID: integer_string__type;
	mBlockVisualizationColorDataStartIndex: integer_string__type;
};

export type FGBuildableRailroadTrack__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRailroadTrack__type];
	};
