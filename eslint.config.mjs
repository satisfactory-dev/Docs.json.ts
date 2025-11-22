import config from '@signpostmarv/eslint-config';
import parser from '@typescript-eslint/parser';
import imports from 'eslint-plugin-import';

export default [
	{
		languageOptions: {
			parser,
			parserOptions: {
				project: ['./tsconfig.eslint.json'],
			},
		},
	},
	...config,
	{
		files: ['**/*.ts', './src/**/*.ts'],
		ignores: ['**/*.d.ts', '**/*.js', '**/*.mjs'],
	},
	{
		plugins: {
			imports,
		},
		rules: {
			'imports/no-internal-modules': ['error', {
				allow: [
					'ajv/dist/2020.js',
					`${import.meta.dirname}/data/**/*.json`,
					`${import.meta.dirname}/schema/**/*.json`,
					`${import.meta.dirname}/src/*.ts`,
					`${import.meta.dirname}/src/**/*.ts`,
					`${import.meta.dirname}/generated-types/**/*.ts`,
				],
			}],
		},
	},
];
