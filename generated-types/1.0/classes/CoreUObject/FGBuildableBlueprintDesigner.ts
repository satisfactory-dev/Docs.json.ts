import {
	FGBuildableBlueprintDesigner__mk3__type,
	FGBuildableBlueprintDesigner__mk2__type,
	FGBuildableBlueprintDesigner__mk1__type,
	color_decimal__type,
	xyz__integer__type,
	empty_object__type,
	NativeClass__type,
} from '../../common/unassigned';

import {
	integer_string__signed__type,
	decimal_string__type,
	boolean__type,
} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

export type FGBuildableBlueprintDesigner__base__type =
	FGBuildable__base__type & {
		mTerminalDistanceFromEdge: decimal_string__type;
		mTerminalHalfDepth: decimal_string__type;
		mDimensions: xyz__integer__type;
		OnRecordDataChanged: empty_object__type;
		OnBlueprintCostChanged: empty_object__type;
		mCurrentCost: '';
		mBuildables: '';
		mCurrentRecordData: {
			IconID: {
				IconLibrary: 'None';
				IconID: integer_string__signed__type;
			};
			Color: color_decimal__type;
		};
		mIsDismantlingAll: boolean__type;
	};

export type FGBuildableBlueprintDesigner__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableBlueprintDesigner__mk3__type,
		FGBuildableBlueprintDesigner__mk2__type,
		FGBuildableBlueprintDesigner__mk1__type,
	];
};
