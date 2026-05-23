import type {
	NodeFactory,
} from '@signpostmarv/json-schema-typescript-codegen';

import ts, {
	factory,
} from 'typescript';

import {
	generation_factory,
} from './src/version-specific/common/generation_factory.ts';

const typed_ts = {
	...ts,
	factory: factory as NodeFactory,
};

await generation_factory(
	undefined,
	typed_ts,
);
