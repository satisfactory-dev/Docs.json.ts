import {
	eslint_generated_types,
} from './lib/DocsTsGenerator';

const __dirname = import.meta.dirname;

await eslint_generated_types(`${__dirname}/generated-types/update8/`);
