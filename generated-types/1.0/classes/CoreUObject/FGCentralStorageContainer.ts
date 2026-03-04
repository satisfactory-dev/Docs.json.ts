import {FGBuildableStorage__type} from './FGBuildableStorage.js';

import {decimal_string__type} from '../../../common/common/scalar.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGCentralStorageContainer__type = FGBuildableStorage__type & {
	TimeToExecuteCheckAfterItemAdded: decimal_string__type;
	mUploadTimer: decimal_string__type;
	mTimeToUpload: decimal_string__type;
};

export type FGCentralStorageContainer__NativeClass =
	NativeClass__type & {
		Classes: [
			FGCentralStorageContainer__type,
			...FGCentralStorageContainer__type[],
		];
	};
