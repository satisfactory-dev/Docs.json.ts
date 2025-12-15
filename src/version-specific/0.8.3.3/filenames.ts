import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import update8_properties from '../../../schema/0.8.3.3/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update8_classes__base from '../../../schema/0.8.3.3/base-classes.json' with {
	type: 'json',
};

import update8_classes from '../../../schema/0.8.3.3/classes.json' with {
	type: 'json',
};

import update8 from '../../../schema/0.8.3.3/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../0.7.1.1/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[update8_properties.$id]: {
		types: './generated-types/0.8.3.3/types/properties.ts',
		data: './generated-types/0.8.3.3/data/properties.ts',
	},
	[update8_classes__base.$id]: {
		types: './generated-types/0.8.3.3/classes/Base.ts',
		data: './generated-types/0.8.3.3/classes/Base.data.ts',
	},
	[update8_classes.$id]: {
		types: './generated-types/0.8.3.3/classes.ts',
		data: './generated-types/0.8.3.3/classes.data.ts',
	},
	[update8.$id]: {
		types: './generated-types/0.8.3.3/types.ts',
		data: './generated-types/0.8.3.3/data.ts',
	},
};
