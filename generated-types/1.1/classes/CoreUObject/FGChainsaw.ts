import {v1_0_base__FGChainsaw__type} from '../../common/unassigned.js';

import {boolean__type} from '../../../common/common/scalar.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGChainsaw__type = v1_0_base__FGChainsaw__type & {
	CurrentState: 'None';
	StateChanged: boolean__type;
};

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type];
};
