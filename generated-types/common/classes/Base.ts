/* eslint-disable @stylistic/max-len */

type hasClassName = {
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

export type {
	hasClassName,
};
