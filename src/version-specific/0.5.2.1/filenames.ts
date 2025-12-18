import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import update5_properties from '../../../schema/0.5.2.1/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_overridable from '../../../schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base from '../../../schema/0.5.2.1/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from '../../../schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

import update5_classes from '../../../schema/0.5.2.1/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from '../../../schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

import update5 from '../../../schema/0.5.2.1/docs.json' with {
	type: 'json',
};

import {
	filenames_by_$id as previous,
} from '../0.4.2.11/filenames.ts';

export const filenames_by_$id: guard = {
	...previous,
	[update5_classes__base__overridable.$id]: {
		types: './generated-types/0.5.2.1/classes/Base.overridable.ts',
		data: './generated-types/0.5.2.1/classes/Base.overridable.data.ts',
	},
	[update5_classes__overridable.$id]: {
		types: './generated-types/0.5.2.1/classes/overridable.ts',
		data: './generated-types/0.5.2.1/classes/overridable.data.ts',
	},
	[update5_overridable.$id]: {
		types: './generated-types/0.5.2.1/types/overridable.ts',
		data: './generated-types/0.5.2.1/data/overridable.ts',
	},
	[update5_properties.$id]: {
		types: './generated-types/0.5.2.1/types/properties.ts',
		data: './generated-types/0.5.2.1/data/properties.ts',
	},
	[update5_classes__base.$id]: {
		types: './generated-types/0.5.2.1/classes/Base.ts',
		data: './generated-types/0.5.2.1/classes/Base.data.ts',
	},
	[update5_classes.$id]: {
		types: './generated-types/0.5.2.1/classes.ts',
		data: './generated-types/0.5.2.1/classes.data.ts',
	},
	[update5.$id]: {
		types: './generated-types/0.5.2.1/types.ts',
		data: './generated-types/0.5.2.1/data.ts',
	},
};
