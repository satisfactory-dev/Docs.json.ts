import {mLightControlData__type} from '../../common/unassigned';

import {FGBuildable__circuits_base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {boolean__type} from '../../../common/common/scalar';

export type FGBuildableLightsControlPanel__type =
	FGBuildable__circuits_base__type & {
		OnLightControlPanelStateChanged: empty_object__type;
		mLightControlData: mLightControlData__type;
		mIsEnabled: boolean__type;
		mOnControlledBuildablesChanged: empty_object__type;
		mControlledBuildables: '';
	};

export type FGBuildableLightsControlPanel__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightsControlPanel__type];
	};
