import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

// eslint-disable-next-line @stylistic/max-len
import update4_properties from '../../../schema/0.4.2.11/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update4_classes__base from '../../../schema/0.4.2.11/base-classes.json' with {
	type: 'json',
};

import update4_classes from '../../../schema/0.4.2.11/classes.json' with {
	type: 'json',
};

import update4 from '../../../schema/0.4.2.11/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../0.3.7.7/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[update4_properties.$id]: {
		types: './generated-types/0.4.2.11/types/properties.ts',
		data: './generated-types/0.4.2.11/data/properties.ts',
	},
	[update4_classes__base.$id]: {
		types: './generated-types/0.4.2.11/classes/Base.ts',
		data: './generated-types/0.4.2.11/classes/Base.data.ts',
	},
	[update4_classes.$id]: {
		types: './generated-types/0.4.2.11/classes.ts',
		data: './generated-types/0.4.2.11/classes.data.ts',
	},
	[update4.$id]: {
		types: './generated-types/0.4.2.11/types.ts',
		data: './generated-types/0.4.2.11/data.ts',
	},
};
