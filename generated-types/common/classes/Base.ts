/* eslint-disable @stylistic/max-len */

type FGItemDescriptor = hasClassName;

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

export type {
	FGItemDescriptor,
	hasClassName,
};
