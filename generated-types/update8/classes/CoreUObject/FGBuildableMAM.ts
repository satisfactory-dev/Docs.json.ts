import {FGBuildable__occupied__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableMAM__type = FGBuildable__occupied__type & {
	mCurrentResearchState: 'ERS_NotResearching';
	mSignificanceRange: decimal_string__type;
};

export type FGBuildableMAM__NativeClass = NativeClass__type & {
	Classes: [FGBuildableMAM__type];
};
