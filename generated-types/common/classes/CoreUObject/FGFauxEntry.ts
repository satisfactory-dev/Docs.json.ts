import {
	faux_1__type,
	faux_2__type,
	faux_3__type,
	faux_4__type,
	faux_5__type,
	NativeClass__type,
} from '../../common/unassigned';

export type FGFauxEntry__NativeClass = NativeClass__type & {
	Classes: [
		faux_1__type | faux_2__type | faux_3__type | faux_4__type | faux_5__type,
		...(
			| faux_1__type
			| faux_2__type
			| faux_3__type
			| faux_4__type
			| faux_5__type
		)[],
	];
};
