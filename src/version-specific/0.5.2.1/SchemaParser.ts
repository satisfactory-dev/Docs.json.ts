import {
	$ref,
	type SchemaObjectWith$id,
	type SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import update5_properties from '../../../schema/0.5.2.1/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_overridable from '../../../schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

import update5_classes from '../../../schema/0.5.2.1/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from '../../../schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base from '../../../schema/0.5.2.1/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from '../../../schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

import update5 from '../../../schema/0.5.2.1/docs.json' with {
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
} from './TypedString.ts';

import {
	BP_C,
} from '../0.3.7.7/BP_C.ts';

import {
	NamedList,
} from '../0.3.7.7/NamedList.ts';

import {
	add_schemas as add_schemas_update4,
} from '../0.4.2.11/SchemaParser.ts';

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
	add_schemas_update4(parser);

	parser.add_schema(update5_overridable);
	parser.add_schema(update5_classes__overridable);
	parser.add_schema(update5_classes__base__overridable);
	parser.add_schema(update5_properties as SchemaObjectWith$id);
	parser.add_schema(update5_classes__base as SchemaObjectWith$id);
	parser.add_schema(update5_classes as SchemaObjectWith$id);
	parser.add_schema(update5 as SchemaObjectWith$id);
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
		new PrefixedString({ajv}, 'single_quoted'),
		new PrefixedString({ajv}, 'non_quoted'),
	];
}
