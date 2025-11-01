import type {
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

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
	Texture2D,
} from './Texture2D.ts';
import {
	BlueprintGeneratedClass_non_quoted,
	BlueprintGeneratedClass_quoted,
} from './BlueprintGeneratedClass.ts';
import {
	TypedString,
} from './TypedString.ts';
import {
	BP_C,
} from './BP_C.ts';
import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function configure_parser(parser: SchemaParser) {
	if (already_configured.has(parser)) {
		return;
	}

	parser.add_schema(common_types);
	parser.add_schema(update3_properties);
	parser.add_schema(update3_classes__base);
	parser.add_schema(update3_classes);
	parser.add_schema(update3);

	const ajv = parser.share_ajv((ajv) => ajv);

	parser.types = [
		new NativeClass({ajv}),
		new BP_C({ajv}),
		new Desc_C({ajv}),
		new ResourceSink_Unlock_C({ajv}),
		new Schematic_C({ajv}),
		new StringDotString({ajv}),
		new BlueprintGeneratedClass_non_quoted({ajv}),
		new BlueprintGeneratedClass_quoted({ajv}),
		new Texture2D({ajv}),
		new TypedString({ajv}),
		new TemplatedString({ajv}),
		...parser.types,
	];
}
