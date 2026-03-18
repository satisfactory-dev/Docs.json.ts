/* eslint-disable @stylistic/max-len */

import type {
	BlueprintGeneratedClass_non_quoted as docs_json_ts_common_properties_BlueprintGeneratedClass_non_quoted,
	mDisplayName as docs_json_ts_common_properties_mDisplayName,
	mRelevantEvents as docs_json_ts_common_properties_mRelevantEvents,
} from './../properties.ts';

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

type instructive = {
	FullName: docs_json_ts_common_properties_BlueprintGeneratedClass_non_quoted,
	mRelevantEvents: null | docs_json_ts_common_properties_mRelevantEvents,
};

type isDescribed = {
	mDescription: string,
};

type isNamed = {
	mDisplayName: docs_json_ts_common_properties_mDisplayName,
};

type Equipment = hasClassName;

type ItemDescriptor = hasClassName & isDescribed & isNamed;

type Weapon = hasClassName;

export type {
	hasClassName,
	instructive,
	isDescribed,
	isNamed,
	Equipment,
	ItemDescriptor,
	Weapon,
};
