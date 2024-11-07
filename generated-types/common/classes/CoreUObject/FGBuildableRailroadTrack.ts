import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	decimal_string__type,
	boolean__type,
	integer_string__signed__type,
	integer_string__type,
} from '../../common/scalar';

import {empty_object__type} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableRailroadTrack__type =
	common_base__FGBuildable__base__type & {
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
