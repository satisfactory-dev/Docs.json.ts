import type {
	SchemaObjectWith$id,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import update7_classes from '../../../schema/0.7.1.1/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base from '../../../schema/0.7.1.1/base-classes.json' with {
	type: 'json',
};

import update7 from '../../../schema/0.7.1.1/docs.json' with {
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
} from '../0.6.1.5/TypedString.ts';

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
	add_schemas as add_schemas_update6,
} from '../0.6.1.5/SchemaParser.ts';

import {
	BlueprintGeneratedClassSingleQuoted,
} from '../0.4.2.11/BlueprintGeneratedClass.ts';

import {
	FGRailroadTrackConnectionComponent,
} from '../0.4.2.11/FGRailroadTrackConnectionComponent.ts';

import {
	CurveFloat,
} from '../0.5.2.1/CurveFloat.ts';

import {
	AkAudioEvent,
} from '../0.6.1.5/AkAudioEvent.ts';

const already_configured: WeakSet<SchemaParser> = new WeakSet();

export function add_schemas(parser: SchemaParser) {
	add_schemas_update6(parser);

	parser.add_schema(update7_classes__base as SchemaObjectWith$id);
	parser.add_schema(update7_classes as SchemaObjectWith$id);
	parser.add_schema(update7 as SchemaObjectWith$id);
}

export function configure_parser(parser: SchemaParser) {
	if (already_configured.has(parser)) {
		return;
	}

	already_configured.add(parser);

	add_schemas(parser);

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
		new CurveFloat({ajv}),
		new NamedList({ajv}, 'NSLOCTEXT'),
		...parser.types,
		new TemplatedString({ajv}),
		new TypedString({ajv}, {
			String_enum_list: {
				quoted: true,
			},
		}),
		new AkAudioEvent({ajv}),
	];
}
