import {
	$ref,
	type SchemaObjectWith$id,
	type SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

import update3_properties from '../../../schema/0.3.7.7/properties.json' with {
	type: 'json',
};

import update3_classes from '../../../schema/0.3.7.7/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base from '../../../schema/0.3.7.7/base-classes.json' with {
	type: 'json',
};

import update3 from '../../../schema/0.3.7.7/docs.json' with {
	type: 'json',
};

import {
	NativeClass,
} from './NativeClass.ts';

import {
	Desc_C,
} from './Desc_C.ts';

import {
	ResourceSink_Unlock_C,
} from './ResourceSink_Unlock_C.ts';

import {
	Schematic_C,
} from './Schematic_C.ts';

import {
	StringDotString,
} from './StringDotString.ts';

import {
	PropertySchemaToRegex__matchers,
	TypedString,
} from './TypedString.ts';
import {
	BP_C,
} from './BP_C.ts';
import {
	NamedList,
} from './NamedList.ts';

import {
	Object as Object_matcher,
} from './TypedString/PropertySchemaToRegex/Object.ts';

import type {
	PropertySchemaToRegex,
} from './TypedString/Object.ts';

import {
	PrefixedString,
} from './PrefixedString.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function add_schemas(parser: SchemaParser) {
	parser.add_schema(common_types);
	parser.add_schema(update3_properties);
	parser.add_schema(update3_classes__base as SchemaObjectWith$id);
	parser.add_schema(update3_classes);
	parser.add_schema(update3);
}

export function configure_parser(parser: SchemaParser) {
	if (already_configured.has(parser)) {
		return;
	}

	already_configured.add(parser);

	add_schemas(parser);

	const ajv = parser.share_ajv((ajv) => ajv);

	const matchers: PropertySchemaToRegex<unknown>[] = [];

	const $ref_instance = parser.types.find((maybe) => maybe instanceof $ref);

	if (undefined === $ref_instance) {
		throw new TypeError('Could not find $ref instance!');
	}

	const Object_matcher_instance = Object_matcher(
		ajv,
		matchers,
	);

	matchers.push(...[
		...PropertySchemaToRegex__matchers(
			ajv,
			matchers,
			Object_matcher_instance,
			$ref_instance,
		),
		Object_matcher_instance as PropertySchemaToRegex<unknown>,
	]);

	if (undefined === $ref_instance) {
		throw new TypeError('Could not find $ref instance!');
	}

	parser.types = [
		new NativeClass({ajv}),
		new BP_C({ajv}),
		new Desc_C({ajv}),
		new ResourceSink_Unlock_C({ajv}),
		new Schematic_C({ajv}),
		new StringDotString({ajv}),
		new NamedList({ajv}, 'NSLOCTEXT'),
		...parser.types,
		new TemplatedString({ajv}),
		new TypedString({ajv}, {
			$ref_instance,
			Object: {
				matchers,
			},
		}),
		new PrefixedString({ajv}, 'quoted'),
		new PrefixedString({ajv}, 'non_quoted'),
	];
}
