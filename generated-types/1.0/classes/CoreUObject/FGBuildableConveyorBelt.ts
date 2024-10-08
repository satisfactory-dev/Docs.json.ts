import {
	integer_string__signed__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

export type FGBuildableConveyorBelt__type =
	FGBuildableConveyorBelt__base__type & {
		mMeshLength: decimal_string__type;
		mSplineData: '';
		mCustomSkins: [
			'/Game/FactoryGame/Buildable/-Shared/Customization/Skins/SkinDesc_Test1.SkinDesc_Test1_C',
			...'/Game/FactoryGame/Buildable/-Shared/Customization/Skins/SkinDesc_Test1.SkinDesc_Test1_C'[],
		];
	};

export type FGBuildableConveyorBelt__base__type = FGBuildable__base__type & {
	mItemMeshMap: empty_object__type;
	mSpeed: decimal_string__type;
	mItems: {
		ArrayReplicationKey: integer_string__signed__type;
	};
	mConveyorChainFlags: integer_string__type;
	mChainSegmentIndex: integer_string__signed__type;
};

export type FGBuildableConveyorBelt__NativeClass = NativeClass__type & {
	Classes: [FGBuildableConveyorBelt__type, ...FGBuildableConveyorBelt__type[]];
};
