import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableWall__base__type =
	common_base__FGBuildable__base__type & {
		mHeight: decimal_string__type;
	};

export type common_base__FGBuildableWall__base__rectangle__type =
	common_base__FGBuildableWall__base__type & {
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
