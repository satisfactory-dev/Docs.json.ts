/* eslint-disable @stylistic/max-len */

type Equipment = hasClassName;

type ItemDescriptor = hasClassName;

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

export type {
	Equipment,
	ItemDescriptor,
	hasClassName,
};
