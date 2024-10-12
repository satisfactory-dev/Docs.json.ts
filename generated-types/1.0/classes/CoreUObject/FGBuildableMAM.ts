import {decimal_string__type} from '../../common/scalar';

import {FGBuildable__occupied__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableMAM__type = FGBuildable__occupied__type & {
	mCurrentResearchState: 'ERS_NotResearching';
	mSignificanceRange: decimal_string__type;
	Centrifuge_NewTrack_1_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
	Centrifuge_NewTrack_0_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
	Centrifuge__Direction_BB49BD99478F0FC67F8D7E9A54C7E849: 'Forward';
	['Centrifuge Duration']: decimal_string__type;
};

export type FGBuildableMAM__NativeClass = NativeClass__type & {
	Classes: [FGBuildableMAM__type];
};
