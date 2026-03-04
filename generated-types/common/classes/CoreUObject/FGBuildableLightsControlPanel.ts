import type {
	common_base__FGBuildable__circuits_base__type
} from './FGBuildable.js';

import type {
	empty_object__type,
	common_base__mLightControlData__type,
} from '../../common/unassigned.js';

import type {
	boolean__type
} from '../../common/scalar.js';

export type common_base__FGBuildableLightsControlPanel__type
	= common_base__FGBuildable__circuits_base__type & {
		OnLightControlPanelStateChanged: empty_object__type,
		mLightControlData: common_base__mLightControlData__type,
		mIsEnabled: boolean__type,
		mOnControlledBuildablesChanged: empty_object__type,
		mControlledBuildables: '',
	};
