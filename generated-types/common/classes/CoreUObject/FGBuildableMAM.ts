import {decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__occupied__type} from './FGBuildable';

export type common_base__FGBuildableMAM__type =
	common_base__FGBuildable__occupied__type & {
		mCurrentResearchState: 'ERS_NotResearching';
		mSignificanceRange: decimal_string__type;
	};
