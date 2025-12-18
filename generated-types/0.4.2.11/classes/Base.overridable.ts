/* eslint-disable @stylistic/max-len */

import type {
	FGItemDescriptorNuclearFuel_base as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base,
	FGSchematic_pre_update6 as docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_update6,
	instructive as docs_json_ts_0_3_7_7_classes_base_instructive,
	isDescribed as docs_json_ts_0_3_7_7_classes_base_isDescribed,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	FGDescriptor as docs_json_ts_0_4_2_11_classes_base_FGDescriptor,
	FGSchematic_base as docs_json_ts_0_4_2_11_classes_base_FGSchematic_base,
} from './Base.ts';

import type {
	BlueprintGeneratedClass_single_quoted as docs_json_ts_0_4_2_11_overridable_BlueprintGeneratedClass_single_quoted,
	mUnlocks_item as docs_json_ts_0_4_2_11_overridable_mUnlocks_item,
} from './../types/overridable.ts';

import type {
	mSchematicDependencies_item as docs_json_ts_0_4_2_11_properties_mSchematicDependencies_item,
	Texture2D as docs_json_ts_0_4_2_11_properties_Texture2D,
} from './../types/properties.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mSchematicDependencies_item as docs_json_ts_0_3_7_7_overridable_mSchematicDependencies_item,
} from './../../0.3.7.7/types/overridable.ts';

import type {
	FGSchematic_version_specific as docs_json_ts_0_3_7_7_classes_base_overridable_FGSchematic_version_specific,
} from './../../0.3.7.7/classes/Base.overridable.ts';

type FGItemDescriptorNuclearFuel = docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor & FGItemDescriptorNuclearFuel_base;

type FGItemDescriptorNuclearFuel_base = {
	mSpentFuelClass: docs_json_ts_0_4_2_11_overridable_BlueprintGeneratedClass_single_quoted,
};

type FGSchematic = FGSchematic_base & {
	mUnlocks: [
		...docs_json_ts_0_4_2_11_overridable_mUnlocks_item[],
	],
	mSmallSchematicIcon: 'None' | docs_json_ts_0_4_2_11_properties_Texture2D,
	mRelevantShopSchematics: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
};

type FGSchematic_base = docs_json_ts_0_3_7_7_classes_base_isDescribed & docs_json_ts_0_3_7_7_classes_base_instructive & docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_update6 & docs_json_ts_0_3_7_7_classes_base_overridable_FGSchematic_version_specific & FGSchematic_has_mSchematicDependencies & docs_json_ts_0_4_2_11_classes_base_FGSchematic_base;

type FGSchematic_has_mSchematicDependencies = {
	mSchematicDependencies: [
		...(docs_json_ts_0_3_7_7_overridable_mSchematicDependencies_item | docs_json_ts_0_4_2_11_properties_mSchematicDependencies_item)[],
	],
};

export type {
	FGItemDescriptorNuclearFuel,
	FGItemDescriptorNuclearFuel_base,
	FGSchematic,
	FGSchematic_base,
	FGSchematic_has_mSchematicDependencies,
};
