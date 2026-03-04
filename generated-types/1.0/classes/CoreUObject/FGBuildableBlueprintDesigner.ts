import type {
	FGBuildableBlueprintDesigner__mk3__type,
	FGBuildableBlueprintDesigner__mk2__type,
	FGBuildableBlueprintDesigner__mk1__type,
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	integer_string__signed__type
} from '../../../common/common/scalar.js';

import type {
	color_decimal__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	common_base__FGBuildableBlueprintDesigner__type
} from '../../../common/classes/CoreUObject/FGBuildableBlueprintDesigner.js';

export type FGBuildableBlueprintDesigner__base__type
	= FGBuildableBlueprintDesigner__merged__type & {
		mCurrentRecordData: {
			IconID: {
				IconLibrary: 'None',
				IconID: integer_string__signed__type,
			},
			Color: color_decimal__type,
		},
	};

export type FGBuildableBlueprintDesigner__merged__type
	= common_base__FGBuildableBlueprintDesigner__type
		& FGBuildable__base__type;

export type FGBuildableBlueprintDesigner__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableBlueprintDesigner__mk3__type,
			FGBuildableBlueprintDesigner__mk2__type,
			FGBuildableBlueprintDesigner__mk1__type,
		],
	};
