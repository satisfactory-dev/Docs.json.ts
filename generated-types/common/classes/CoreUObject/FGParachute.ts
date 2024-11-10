import {common_base__FGEquipment__base__type} from './FGEquipment';

import {decimal_string__type, boolean__type} from '../../common/scalar';

export type common_base__FGParachute__type =
	common_base__FGEquipment__base__type & {
		DeployedVFXComponents: '';
		mUseDistanceOverride: decimal_string__type;
		mIsDeployed: boolean__type;
	};
