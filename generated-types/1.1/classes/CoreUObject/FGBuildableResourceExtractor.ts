import {
	FGBuildableResourceExtractor__miner_mk1__type,
	FGBuildableResourceExtractor__miner_mk3__type,
	v1_0_base__FGBuildableResourceExtractor__miner__type,
	v1_0_base__FGBuildableResourceExtractor__oil_extractor__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableResourceExtractor__miner__type =
	v1_0_base__FGBuildableResourceExtractor__miner__type &
		FGBuildable__base__type;

export type FGBuildableResourceExtractor__oil_extractor__type =
	v1_0_base__FGBuildableResourceExtractor__oil_extractor__type &
		FGBuildable__base__type;

export type FGBuildableResourceExtractor__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableResourceExtractor__oil_extractor__type,
			FGBuildableResourceExtractor__miner__type,
			FGBuildableResourceExtractor__miner_mk1__type,
			FGBuildableResourceExtractor__miner_mk3__type,
		];
	};
