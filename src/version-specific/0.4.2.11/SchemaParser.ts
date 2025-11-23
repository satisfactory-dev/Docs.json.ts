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
	Texture2D,
} from './Texture2D.ts';

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
	add_schemas,
} from '../0.3.7.7/SchemaParser.ts';

import {
	BlueprintGeneratedClassSingleQuoted,
} from './BlueprintGeneratedClass.ts';

import {
	FGRailroadTrackConnectionComponent,
} from './FGRailroadTrackConnectionComponent.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function configure_parser(parser: SchemaParser) {
	if (already_configured.has(parser)) {
		return;
	}

	add_schemas(parser);

	parser.add_schema(update4_properties);
	parser.add_schema(update4_classes__base as SchemaObjectWith$id);
	parser.add_schema(update4_classes);
	parser.add_schema(update4);

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
		new BlueprintGeneratedClassSingleQuoted({ajv}),
		new FGTrainPlatformConnection({ajv}),
		new FGRailroadTrackConnectionComponent({ajv}),
		new Texture2D({ajv}),
		new NamedList({ajv}, 'NSLOCTEXT'),
		...parser.types,
		new TemplatedString({ajv}),
		new TypedString({ajv}, {
			String_enum_list: {
				quoted: true,
			},
		}),
	];
}
