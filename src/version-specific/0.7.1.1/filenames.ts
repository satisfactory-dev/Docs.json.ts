import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base from '../../../schema/0.7.1.1/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base__overridable from '../../../schema/0.7.1.1/base-classes.overridable.json' with {
	type: 'json',
};

import update7_classes from '../../../schema/0.7.1.1/classes.json' with {
	type: 'json',
};

import update7 from '../../../schema/0.7.1.1/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../0.6.1.5/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[update7_classes__base__overridable.$id]: {
		types: './generated-types/0.7.1.1/classes/Base.overridable.ts',
		data: './generated-types/0.7.1.1/classes/Base.data.overridable.ts',
	},
	[update7_classes__base.$id]: {
		types: './generated-types/0.7.1.1/classes/Base.ts',
		data: './generated-types/0.7.1.1/classes/Base.data.ts',
	},
	[update7_classes.$id]: {
		types: './generated-types/0.7.1.1/classes.ts',
		data: './generated-types/0.7.1.1/classes.data.ts',
	},
	[update7.$id]: {
		types: './generated-types/0.7.1.1/types.ts',
		data: './generated-types/0.7.1.1/data.ts',
	},
};
