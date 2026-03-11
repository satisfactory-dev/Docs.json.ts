/* eslint-disable @stylistic/max-len */

import type {
	FGItemDescriptorNuclearFuel_version_specific as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific,
	FGSchematic_pre_1_0 as docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_1_0,
	FGSchematic_pre_update6 as docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_update6,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	FGDescriptor as docs_json_ts_0_4_2_11_classes_base_FGDescriptor,
} from './Base.ts';

import type {
	BlueprintGeneratedClass_single_quoted as docs_json_ts_0_4_2_11_overridable_BlueprintGeneratedClass_single_quoted,
	mSchematicDependencies_item as docs_json_ts_0_4_2_11_overridable_mSchematicDependencies_item,
	mUnlocks_item as docs_json_ts_0_4_2_11_overridable_mUnlocks_item,
	Texture2D_quoted as docs_json_ts_0_4_2_11_overridable_Texture2D_quoted,
} from './../types/overridable--0.8.3.3.ts';

import type {
	Texture2D as docs_json_ts_0_4_2_11_properties_Texture2D,
	TintColor as docs_json_ts_0_4_2_11_properties_TintColor,
} from './../types/properties.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
} from './../../0.3.7.7/types/overridable--0.8.3.3.ts';

import type {
	FGSchematic_version_specific as docs_json_ts_0_3_7_7_classes_base_overridable_FGSchematic_version_specific,
} from './../../0.3.7.7/classes/Base.overridable--0.8.3.3.ts';

import type {
	empty_object as docs_json_ts_common_types_empty_object,
	XY_decimal_string as docs_json_ts_common_types_XY_decimal_string,
} from './../../common/types.ts';

type FGItemDescriptorNuclearFuel = docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific & docs_json_ts_0_4_2_11_classes_base_FGDescriptor & FGItemDescriptorNuclearFuel_pre_1_0;

type FGItemDescriptorNuclearFuel_pre_1_0 = {
	mSpentFuelClass: docs_json_ts_0_4_2_11_overridable_BlueprintGeneratedClass_single_quoted,
};

type FGSchematic_version_specific = {
	mUnlocks: [
		...docs_json_ts_0_4_2_11_overridable_mUnlocks_item[],
	],
	mSmallSchematicIcon: 'None' | docs_json_ts_0_4_2_11_properties_Texture2D,
	mRelevantShopSchematics: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
};

type FGSchematic_base = docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_1_0 & docs_json_ts_0_3_7_7_classes_base_FGSchematic_pre_update6 & docs_json_ts_0_3_7_7_classes_base_overridable_FGSchematic_version_specific & FGSchematic_has_mSchematicDependencies & FGSchematic_has_mSchematicIcon;

type FGSchematic_has_mSchematicDependencies = {
	mSchematicDependencies: [
		...docs_json_ts_0_4_2_11_overridable_mSchematicDependencies_item[],
	],
};

type FGSchematic_has_mSchematicIcon = {
	mSchematicIcon: {
		ImageSize: docs_json_ts_common_types_XY_decimal_string,
		Margin: docs_json_ts_common_types_empty_object,
		TintColor: docs_json_ts_0_4_2_11_properties_TintColor,
		ResourceObject?: docs_json_ts_0_4_2_11_overridable_Texture2D_quoted,
		UVRegion: {
			Min: docs_json_ts_common_types_XY_decimal_string,
			Max: docs_json_ts_common_types_XY_decimal_string,
			bIsValid: '0',
		},
		DrawAs: 'Image',
	},
};

export type {
	FGItemDescriptorNuclearFuel,
	FGItemDescriptorNuclearFuel_pre_1_0,
	FGSchematic_version_specific,
	FGSchematic_base,
	FGSchematic_has_mSchematicDependencies,
	FGSchematic_has_mSchematicIcon,
};
