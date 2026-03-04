import type {
	UnrealEngineString, StringStartsWith
} from '../../utils/validators.js';

import type {
	decimal_string__type,
	boolean__type,
	integer_string__signed__type,
	integer_string__type,
} from '../../common/scalar.js';

import type {
	empty_object__type, class__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__base__type
} from './FGBuildable.js';

export type common_base__FGBuildableRailroadTrack__type
	= common_base__FGBuildable__base__type
		& common_base__FGBuildableRailroadTrack__properties__type;

export type common_base__FGBuildableRailroadTrack__properties__type
	= class__type & {
		ClassName: 'Build_RailroadTrack_C',
		mMeshLength: decimal_string__type,
		mConnections: [
			UnrealEngineString<
				'/Script/FactoryGame.FGRailroadTrackConnectionComponent',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Track/'>
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGRailroadTrackConnectionComponent',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Track/'>
			>[],
		],
		mIsOwnedByPlatform: boolean__type,
		mTrackGraphID: integer_string__signed__type,
		mOverlappingTracks: '',
		mVehicles: empty_object__type,
		mSignalBlockID: integer_string__type,
		mBlockVisualizationColorDataStartIndex: integer_string__type,
	};
