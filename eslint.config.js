import eslint from '@eslint/js';
import typescript_eslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default typescript_eslint.config(
	eslint.configs.recommended,
	...typescript_eslint.configs.recommended,
	eslintConfigPrettier
);
