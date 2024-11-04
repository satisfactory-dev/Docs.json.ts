import {decimal_string__type, boolean__type} from '../../common/scalar';

import {xyz__integer__type, empty_object__type} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableBlueprintDesigner__type =
	common_base__FGBuildable__base__type & {
		mTerminalDistanceFromEdge: decimal_string__type;
		mTerminalHalfDepth: decimal_string__type;
		mDimensions: xyz__integer__type;
		OnRecordDataChanged: empty_object__type;
		OnBlueprintCostChanged: empty_object__type;
		mCurrentCost: '';
		mBuildables: '';
		mIsDismantlingAll: boolean__type;
	};
