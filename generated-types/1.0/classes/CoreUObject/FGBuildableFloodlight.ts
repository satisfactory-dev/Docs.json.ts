import {integer_string__type} from '../../common/scalar';

import {FGBuildableLightSource__base__type} from './FGBuildableLightSource';

import {NativeClass__type} from '../../common/unassigned';

export type FGBuildableFloodlight__type =
	FGBuildableLightSource__base__type & {
		mFixtureAngle: integer_string__type;
	};

export type FGBuildableFloodlight__NativeClass = NativeClass__type & {
	Classes: [FGBuildableFloodlight__type, ...FGBuildableFloodlight__type[]];
};
