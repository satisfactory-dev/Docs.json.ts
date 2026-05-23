import type {
	NullLiteral,
} from 'typescript';

import type {
	Identifier,
	LiteralTypeNode,
	ts,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

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

export function Empty_generate_typescript_data(
	ts: ts,
): Empty_DataTo {
	return ts.factory.createIdentifier('null');
}

export function Empty_generate_typescript_type(
	ts: ts,
): Empty_SchemaTo {
	return ts.factory.createLiteralTypeNode(
		ts.factory.createNull(),
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
