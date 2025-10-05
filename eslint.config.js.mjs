import {
	javascript as config,
} from '@signpostmarv/eslint-config';

export default [
	...config,
	{
		files: ['**/*.mjs', './*.mjs'],
		ignores: ['**/*.js'],
	},
];
