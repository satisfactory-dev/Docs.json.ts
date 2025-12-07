import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import update6_properties from '../../../schema/0.6.1.5/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base from '../../../schema/0.6.1.5/base-classes.json' with {
	type: 'json',
};

import update6_classes from '../../../schema/0.6.1.5/classes.json' with {
	type: 'json',
};

import update6 from '../../../schema/0.6.1.5/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../0.5.2.1/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[update6_properties.$id]: {
		types: './generated-types/0.6.1.5/types/properties.ts',
		data: './generated-types/0.6.1.5/data/properties.ts',
	},
	[update6_classes__base.$id]: {
		types: './generated-types/0.6.1.5/classes/Base.ts',
		data: './generated-types/0.6.1.5/classes/Base.data.ts',
	},
	[update6_classes.$id]: {
		types: './generated-types/0.6.1.5/classes.ts',
		data: './generated-types/0.6.1.5/classes.data.ts',
	},
	[update6.$id]: {
		types: './generated-types/0.6.1.5/types.ts',
		data: './generated-types/0.6.1.5/data.ts',
	},
};
