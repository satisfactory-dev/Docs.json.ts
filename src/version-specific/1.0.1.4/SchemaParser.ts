import type {
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

// eslint-disable-next-line @stylistic/max-len
import release_1_0__properties from '../../../schema/1.0.1.4/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import release_1_0__classes__base from '../../../schema/1.0.1.4/base-classes.json' with {
	type: 'json',
};

import release_1_0__classes from '../../../schema/1.0.1.4/classes.json' with {
	type: 'json',
};

import release_1_0 from '../../../schema/1.0.1.4/docs.json' with {
	type: 'json',
};

import {
	NativeClass,
} from '../0.8.3.3/NativeClass.ts';

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
	add_schemas as add_schemas_update8,
} from '../0.8.3.3/SchemaParser.ts';

import {
	Object as Object_matcher,
} from './TypedString/PropertySchemaToRegex/Object.ts';

import type {
	PropertySchemaToRegex,
} from '../0.3.7.7/TypedString/Object.ts';

import {
	PrefixedString,
} from './PrefixedString.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function add_schemas(parser: SchemaParser) {
	add_schemas_update8(parser);

	parser.add_schema(release_1_0__properties);
	parser.add_schema(release_1_0__classes__base);
	parser.add_schema(release_1_0__classes);
	parser.add_schema(release_1_0);
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
		$ref_instance,
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
		...([
			'quoted',
			'single_quoted',
			'non_quoted',
			'version_specific_default',
		] as const).flatMap((mode) => [
			new PrefixedString({ajv}, mode, 'Engine', 'single_quoted'),
			new PrefixedString(
				{ajv},
				mode,
				'TemplateSequence',
				'single_quoted',
			),
			new PrefixedString({ajv}, mode, 'FactoryGame', 'single_quoted'),
			new PrefixedString({ajv}, mode, 'AkAudio', 'single_quoted'),
			new PrefixedString({ajv}, mode, 'CoreUObject', 'single_quoted'),
		]),
	];
}
