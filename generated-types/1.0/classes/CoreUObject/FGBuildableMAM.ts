import {FGBuildable__occupied__merged__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	common_base__FGBuildableMAM__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableMAM__type = FGBuildableMAM__merged__type & {
	Centrifuge_NewTrack_1_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
	Centrifuge_NewTrack_0_BB49BD99478F0FC67F8D7E9A54C7E849: decimal_string__type;
	Centrifuge__Direction_BB49BD99478F0FC67F8D7E9A54C7E849: 'Forward';
	['Centrifuge Duration']: decimal_string__type;
};

export type FGBuildableMAM__merged__type =
	common_base__FGBuildableMAM__type &
		FGBuildable__occupied__merged__type;

export type FGBuildableMAM__NativeClass = NativeClass__type & {
	Classes: [FGBuildableMAM__type];
};
