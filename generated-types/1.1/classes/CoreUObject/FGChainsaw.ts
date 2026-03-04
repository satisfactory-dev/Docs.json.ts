import {v1_0_base__FGChainsaw__type} from '../../common/unassigned.js';

import {boolean__type} from '../../../common/common/scalar.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGChainsaw__type = v1_0_base__FGChainsaw__type & {
	CurrentState: 'None';
	StateChanged: boolean__type;
};

export type FGChainsaw__NativeClass = NativeClass__type & {
	Classes: [FGChainsaw__type];
};
