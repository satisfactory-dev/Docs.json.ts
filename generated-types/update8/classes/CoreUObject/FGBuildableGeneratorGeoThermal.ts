import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {common_base__FGBuildableGeneratorGeoThermal__type} from '../../../common/classes/CoreUObject/FGBuildableGeneratorGeoThermal';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorGeoThermal__type =
	FGBuildableGeneratorGeoThermal__merged__type;

export type FGBuildableGeneratorGeoThermal__merged__type =
	common_base__FGBuildableGeneratorGeoThermal__type &
		FGBuildableGenerator__base__type;

export type FGBuildableGeneratorGeoThermal__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableGeneratorGeoThermal__type];
	};
