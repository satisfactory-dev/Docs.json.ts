import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import release_1_2_2_0 from '../../../schema/1.2.2.0/docs.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import release_1_2_2_0__classes from '../../../schema/1.2.2.0/classes.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import release_1_2_2_0__base_classes from '../../../schema/1.2.2.0/base-classes.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../1.2.1.0/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[release_1_2_2_0__base_classes.$id]: {
		types: './generated-types/1.2.2.0/Base.ts',
		data: './generated-types/1.2.2.0/Base.data.ts',
	},
	[release_1_2_2_0__classes.$id]: {
		types: './generated-types/1.2.2.0/classes.ts',
		data: './generated-types/1.2.2.0/classes.data.ts',
	},
	[release_1_2_2_0.$id]: {
		types: './generated-types/1.2.2.0/types.ts',
		data: './generated-types/1.2.2.0/en-US.data.ts',
	},
};
