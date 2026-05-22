import type {
	NodeFactory,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	factory,
} from 'typescript';

import {
	generation_factory,
} from './src/version-specific/common/generation_factory.ts';

await generation_factory(
	undefined,
	factory as NodeFactory,
);
