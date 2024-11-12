import {FGBuildableResourceExtractor__miner_mk3__type} from '../../common/unassigned';

import {FGBuildable__extractor_base__type} from './FGBuildable';

import {
	common_base__FGBuildableResourceExtractor__miner__base__type,
	common_base__FGBuildableResourceExtractor__miner__type,
	common_base__FGBuildableResourceExtractor__oil_extractor__type,
} from '../../../common/classes/CoreUObject/FGBuildableResourceExtractor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableResourceExtractor__miner__type =
	FGBuildableResourceExtractor__miner__merged__type;

export type FGBuildableResourceExtractor__miner__base__type =
	FGBuildableResourceExtractor__miner__base__merged__type;

export type FGBuildableResourceExtractor__miner__base__merged__type =
	common_base__FGBuildableResourceExtractor__miner__base__type &
		FGBuildable__extractor_base__type;

export type FGBuildableResourceExtractor__miner__merged__type =
	common_base__FGBuildableResourceExtractor__miner__type &
		FGBuildableResourceExtractor__miner__base__type;

export type FGBuildableResourceExtractor__oil_extractor__type =
	FGBuildableResourceExtractor__oil_extractor__merged__type;

export type FGBuildableResourceExtractor__oil_extractor__merged__type =
	common_base__FGBuildableResourceExtractor__oil_extractor__type &
		FGBuildable__extractor_base__type;

export type FGBuildableResourceExtractor__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
		];
	};
