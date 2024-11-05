import {FGBuildableWallLightweight__type} from './FGBuildableWallLightweight';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {common_base__FGBuildableWall__base__type} from '../../../common/classes/CoreUObject/FGBuildableWall';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWall__base__type =
	common_base__FGBuildableWall__base__type &
		FGBuildable__base__type;

export type FGBuildableWall__base__rectangle__type =
	FGBuildableWall__base__type & {
		mWidth: decimal_string__type;
		mElevation: decimal_string__type;
		mAngularDepth: decimal_string__type;
		mWallType:
			| 'BWT_Normal'
			| 'BWT_Glass'
			| 'BWT_DiagonalDown'
			| 'BWT_DiagonalUp'
			| 'BWT_Frame';
		mAngledVariants:
			| ''
			| [
					UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/Buildable/Building/Fence/'>
					>,
					...UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/Buildable/Building/Fence/'>
					>[],
			];
	};

export type FGBuildableWall__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWallLightweight__type,
		...FGBuildableWallLightweight__type[],
	];
};
