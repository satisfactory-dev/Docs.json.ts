import {FGBuildableStorage__type} from './FGBuildableStorage';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

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
