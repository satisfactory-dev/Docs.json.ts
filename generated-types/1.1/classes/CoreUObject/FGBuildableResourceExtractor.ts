import type {
	FGBuildableResourceExtractor__miner_mk1__type,
	FGBuildableResourceExtractor__miner_mk3__type,
	v1_0_base__FGBuildableResourceExtractor__miner__type,
	v1_0_base__FGBuildableResourceExtractor__oil_extractor__type,
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableResourceExtractor__miner__type
	= v1_0_base__FGBuildableResourceExtractor__miner__type
		& FGBuildable__base__type;

export type FGBuildableResourceExtractor__oil_extractor__type
	= v1_0_base__FGBuildableResourceExtractor__oil_extractor__type
		& FGBuildable__base__type;

export type FGBuildableResourceExtractor__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableResourceExtractor__oil_extractor__type,
			FGBuildableResourceExtractor__miner__type,
			FGBuildableResourceExtractor__miner_mk1__type,
			FGBuildableResourceExtractor__miner_mk3__type,
		],
	};
