import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_overridable from '../../../schema/0.3.7.7/overridable.json' with {
	type: 'json',
};

import update3_properties from '../../../schema/0.3.7.7/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base from '../../../schema/0.3.7.7/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base__overridable from '../../../schema/0.3.7.7/base-classes.overridable.json' with {
	type: 'json',
};

import update3_classes from '../../../schema/0.3.7.7/classes.json' with {
	type: 'json',
};

import update3 from '../../../schema/0.3.7.7/docs.json' with {
	type: 'json',
};

export const filenames_by_$id: guard = {
	[common_types.$id]: {
		types: './generated-types/common/types.ts',
		data: './generated-types/common/data.ts',
	},
	[update3_overridable.$id]: {
		types: './generated-types/0.3.7.7/types/overridable.ts',
		data: './generated-types/0.3.7.7/data/overridable.ts',
	},
	[update3_properties.$id]: {
		types: './generated-types/0.3.7.7/types/properties.ts',
		data: './generated-types/0.3.7.7/data/properties.ts',
	},
	[update3_classes__base__overridable.$id]: {
		types: './generated-types/0.3.7.7/classes/Base.overridable.ts',
		data: './generated-types/0.3.7.7/classes/Base.data.overridable.ts',
	},
	[update3_classes__base.$id]: {
		types: './generated-types/0.3.7.7/classes/Base.ts',
		data: './generated-types/0.3.7.7/classes/Base.data.ts',
	},
	[update3_classes.$id]: {
		types: './generated-types/0.3.7.7/classes.ts',
		data: './generated-types/0.3.7.7/classes.data.ts',
	},
	[update3.$id]: {
		types: './generated-types/0.3.7.7/types.ts',
		data: './generated-types/0.3.7.7/data.ts',
	},
};
