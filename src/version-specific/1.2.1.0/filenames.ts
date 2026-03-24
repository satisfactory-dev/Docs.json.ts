import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import release_1_2_1_0 from '../../../schema/1.2.1.0/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../1.2.0.0/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[release_1_2_1_0.$id]: {
		types: './generated-types/1.2.1.0/types.ts',
		data: './generated-types/1.2.1.0/en-US.data.ts',
	},
};
