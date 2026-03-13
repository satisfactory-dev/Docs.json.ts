/* eslint-disable @stylistic/max-len */

type Equipment = hasClassName;

type FGItemDescriptor = hasClassName;

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

export type {
	Equipment,
	FGItemDescriptor,
	hasClassName,
};
