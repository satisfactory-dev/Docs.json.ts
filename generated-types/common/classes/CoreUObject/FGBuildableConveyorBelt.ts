import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {empty_object__type} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableConveyorBelt__type =
	common_base__FGBuildableConveyorBelt__base__type & {
		mMeshLength: decimal_string__type;
		mSplineData: '';
		mCustomSkins: [
			'/Game/FactoryGame/Buildable/-Shared/Customization/Skins/SkinDesc_Test1.SkinDesc_Test1_C',
			...'/Game/FactoryGame/Buildable/-Shared/Customization/Skins/SkinDesc_Test1.SkinDesc_Test1_C'[],
		];
	};

export type common_base__FGBuildableConveyorBelt__base__type =
	common_base__FGBuildable__base__type & {
		mItemMeshMap: empty_object__type;
		mSpeed: decimal_string__type;
		mConveyorChainFlags: integer_string__type;
	};
