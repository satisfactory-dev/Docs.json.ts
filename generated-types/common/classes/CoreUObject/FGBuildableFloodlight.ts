import type {
	integer_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildableLightSource__base__type
} from './FGBuildableLightSource.js';

export type common_base__FGBuildableFloodlight__type
	= common_base__FGBuildableLightSource__base__type & {
		mFixtureAngle: integer_string__type,
	};
