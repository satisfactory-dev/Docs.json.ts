import type {
	SchemaObjectWith$id,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

// eslint-disable-next-line @stylistic/max-len
import update4_properties from '../../../schema/0.4.2.11/properties.json' with {
	type: 'json',
};

import update4_classes from '../../../schema/0.4.2.11/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update4_classes__base from '../../../schema/0.4.2.11/base-classes.json' with {
	type: 'json',
};

import update4 from '../../../schema/0.4.2.11/docs.json' with {
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
	BlueprintGeneratedClass_non_quoted,
	BlueprintGeneratedClass_quoted,
} from '../0.3.7.7/BlueprintGeneratedClass.ts';

import {
	TypedString,
} from './TypedString.ts';

import {
	BP_C,
} from '../0.3.7.7/BP_C.ts';

import {
	NamedList,
} from '../0.3.7.7/NamedList.ts';

import {
	FGTrainPlatformConnection,
} from '../0.3.7.7/FGTrainPlatformConnection.ts';

import {
	add_schemas as add_schemas_update3,
} from '../0.3.7.7/SchemaParser.ts';

import {
	BlueprintGeneratedClassSingleQuoted,
} from './BlueprintGeneratedClass.ts';

import {
	FGRailroadTrackConnectionComponent,
} from './FGRailroadTrackConnectionComponent.ts';

import {
	Object as Object_matcher,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/Object.ts';

import type {
	PropertySchemaToRegex,
} from '../0.3.7.7/TypedString/Object.ts';

import {
	ConstString,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.ts';

import {
	EmptyObject,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/EmptyObject.ts';

import {
	integer_string,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/integer_string.ts';

import {
	integer_string_signed,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/integer_string_signed.ts';

import {
	decimal_string,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/decimal_string.ts';

import {
	decimal_string_signed,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/decimal_string_signed.ts';

import {
	bool_string,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/bool_string.ts';

import {
	common_type_objects,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/common_type_objects.ts';

import {
	TintColor,
} from './TypedString/PropertySchemaToRegex/TintColor.ts';

import {
	PrefixedString as PrefixedStringMatcher,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/PrefixedString.ts';

import {
	PrefixedString,
} from '../0.3.7.7/PrefixedString.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function add_schemas(parser: SchemaParser) {
	add_schemas_update3(parser);

	parser.add_schema(update4_properties);
	parser.add_schema(update4_classes__base as SchemaObjectWith$id);
	parser.add_schema(update4_classes);
	parser.add_schema(update4);
}

export function configure_parser(parser: SchemaParser) {
	if (already_configured.has(parser)) {
		return;
	}

	already_configured.add(parser);

	add_schemas(parser);

	const ajv = parser.share_ajv((ajv) => ajv);

	const matchers: PropertySchemaToRegex<unknown>[] = [];

	const Object_matcher_instance = Object_matcher(ajv, matchers);

	matchers.push(...[
		ConstString(ajv) as PropertySchemaToRegex<unknown>,
		EmptyObject(ajv) as PropertySchemaToRegex<unknown>,
		integer_string(ajv) as PropertySchemaToRegex<unknown>,
		integer_string_signed(ajv) as PropertySchemaToRegex<unknown>,
		decimal_string(ajv) as PropertySchemaToRegex<unknown>,
		decimal_string_signed(ajv) as PropertySchemaToRegex<unknown>,
		bool_string(ajv) as PropertySchemaToRegex<unknown>,
		common_type_objects(
			ajv,
			Object_matcher_instance,
		) as PropertySchemaToRegex<unknown>,
		TintColor(
			ajv,
			Object_matcher_instance,
		) as PropertySchemaToRegex<unknown>,
		PrefixedStringMatcher(ajv) as PropertySchemaToRegex<unknown>,
		Object_matcher_instance as PropertySchemaToRegex<unknown>,
	]);

	parser.types = [
		new NativeClass({ajv}),
		new BP_C({ajv}),
		new Desc_C({ajv}),
		new ResourceSink_Unlock_C({ajv}),
		new Schematic_C({ajv}),
		new StringDotString({ajv}),
		new BlueprintGeneratedClass_non_quoted({ajv}),
		new BlueprintGeneratedClass_quoted({ajv}),
		new BlueprintGeneratedClassSingleQuoted({ajv}),
		new FGTrainPlatformConnection({ajv}),
		new FGRailroadTrackConnectionComponent({ajv}),
		new NamedList({ajv}, 'NSLOCTEXT'),
		...parser.types,
		new TemplatedString({ajv}),
		new TypedString({ajv}, {
			String_enum_list: {
				quoted: true,
			},
			Object: {
				matchers,
			},
		}),
		new PrefixedString({ajv}, 'quoted'),
		new PrefixedString({ajv}, 'non_quoted'),
	];
}
