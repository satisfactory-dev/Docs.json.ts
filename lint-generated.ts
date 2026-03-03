import {
	eslint_generated_types,
} from './lib/DocsTsGenerator.ts';

await eslint_generated_types(`${import.meta.dirname}/generated-types/update8/`);
