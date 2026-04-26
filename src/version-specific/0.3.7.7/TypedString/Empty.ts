import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

import type {
	NullLiteral,
} from 'typescript';

import type {
	Identifier,
	LiteralTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	Empty,
} from '../../../../generated-types/lib.ts';

export type Empty_type = {
	type: 'string',
	const: '',
};

export type Empty_properties = {
	type: 'string',
	const: '',
};

export type Empty_DataTo = Identifier<'null'>;

export type Empty_SchemaTo = LiteralTypeNode<NullLiteral>;

export type Empty_TypeGenerator = undefined;

export function Empty_compile_vaildator(): Is<Empty_type> {
	return Empty;
}

export function Empty_generate_typescript_data(): Empty_DataTo {
	return factory.createIdentifier('null');
}

export function Empty_generate_typescript_type(): Empty_SchemaTo {
	return factory.createLiteralTypeNode(
		factory.createNull(),
	);
}

export function Empty_ajv_macro() {
	return Object.freeze({
		const: '',
	});
}

export function Empty_generate_schema_definition(
): Readonly<Empty_properties> {
	return Object.freeze({
		type: 'string',
		const: '',
	});
}

export function Empty_generate_type_definition(
): Readonly<Empty_type> {
	return Object.freeze({
		type: 'string',
		const: '',
	});
}
