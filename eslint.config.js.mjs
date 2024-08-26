import {
	javascript as config,
} from '@signpostmarv/eslint-config';

export default [
	...config,
	{
		files: ['*/eslint.config*.mjs'],
		ignores: [
			'**/*.js',
		],
	},
];
