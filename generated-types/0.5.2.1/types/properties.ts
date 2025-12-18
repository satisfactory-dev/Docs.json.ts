/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	integer_string as docs_json_ts_common_types_integer_string,
} from './../../common/types.ts';

type mDisableSnapOn_bottom = {
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_top = {
	Top: docs_json_ts_common_types_bool_string,
};

type mDockingRuleSet = {
	DockForDuration: docs_json_ts_common_types_decimal_string,
};

type FalloffCurve_EditorCurveData_only = {
	EditorCurveData: {
		DefaultValue: docs_json_ts_common_types_decimal_string,
		PreInfinityExtrap: 'RCCE_Constant',
		PostInfinityExtrap: 'RCCE_Constant',
	},
};

type FGBuildableManufacturer_Build_ConstructorMk1_C_CurrentPotentialConvert_item = [
	[
		docs_json_ts_common_types_integer_string,
		docs_json_ts_common_types_decimal_string,
	],
	[
		docs_json_ts_common_types_integer_string,
		docs_json_ts_common_types_decimal_string,
	],
	[
		docs_json_ts_common_types_integer_string,
		docs_json_ts_common_types_decimal_string,
	],
	...[
		docs_json_ts_common_types_integer_string,
		docs_json_ts_common_types_decimal_string,
	][],
];

export type {
	mDisableSnapOn_bottom,
	mDisableSnapOn_top,
	mDockingRuleSet,
	FalloffCurve_EditorCurveData_only,
	FGBuildableManufacturer_Build_ConstructorMk1_C_CurrentPotentialConvert_item,
};
