import type {
	filenames_by_$id as guard,
} from '../../FilenameAdjuster.ts';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_classes__base from '../../../schema/common/base-classes.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_classes from '../../../schema/common/classes.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_properties from '../../../schema/common/properties.json' with {
	type: 'json',
};

export const filenames_by_$id: guard = {
	[common_types.$id]: {
		types: './generated-types/common/types.ts',
		data: './generated-types/common/data.ts',
	},
	[common_properties.$id]: {
		types: './generated-types/common/properties.ts',
		data: './generated-types/common/data.ts',
	},
	[common_classes__base.$id]: {
		types: './generated-types/common/classes/Base.ts',
		data: './generated-types/common/data.ts',
	},
	[common_classes.$id]: {
		types: './generated-types/common/classes.ts',
		data: './generated-types/common/data.ts',
	},
};
