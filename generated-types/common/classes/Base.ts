/* eslint-disable @stylistic/max-len */

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

type Equipment = hasClassName;

type ItemDescriptor = hasClassName;

export type {
	hasClassName,
	Equipment,
	ItemDescriptor,
};
