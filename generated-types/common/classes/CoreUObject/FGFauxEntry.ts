import {
	faux_1__type,
	faux_2__type,
	NativeClass__type,
} from '../../common/unassigned';

export type FGFauxEntry__NativeClass = NativeClass__type & {
	Classes: [faux_1__type | faux_2__type, ...(faux_1__type | faux_2__type)[]];
};
