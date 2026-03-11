import type {
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_classes__base from '../../../schema/common/base-classes.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_classes from '../../../schema/common/classes.json' with {
	type: 'json',
};

import {
	NativeClass,
} from '../0.3.7.7/NativeClass.ts';

import {
	Desc_C,
} from '../0.3.7.7/Desc_C.ts';

import {
	ResourceSink_Unlock_C,
} from '../0.3.7.7/ResourceSink_Unlock_C.ts';

import {
	Schematic_C,
} from '../0.3.7.7/Schematic_C.ts';

import {
	StringDotString,
} from '../0.3.7.7/StringDotString.ts';

import {
	PropertySchemaToRegex__matchers,
	TypedString,
} from '../0.3.7.7/TypedString.ts';
import {
	BP_C,
} from '../0.3.7.7/BP_C.ts';
import {
	NamedList,
} from '../0.3.7.7/NamedList.ts';

import {
	Object as Object_matcher,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/Object.ts';

import type {
	PropertySchemaToRegex,
} from '../0.3.7.7/TypedString/Object.ts';

import {
	PrefixedString,
} from '../0.3.7.7/PrefixedString.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function add_schemas(parser: SchemaParser) {
	parser.add_schema(common_types);
	parser.add_schema(common_classes__base);
	parser.add_schema(common_classes);
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
		new PrefixedString({ajv}, 'quoted', 'quoted'),
		new PrefixedString({ajv}, 'single_quoted', 'quoted'),
		new PrefixedString({ajv}, 'non_quoted', 'quoted'),
		new PrefixedString({ajv}, 'version_specific_default', 'quoted'),
	];
}
