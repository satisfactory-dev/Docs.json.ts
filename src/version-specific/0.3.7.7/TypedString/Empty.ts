import type {
	NullLiteral,
} from 'typescript';

import type {
	Identifier,
	LiteralTypeNode,
	NodeFactory,
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
	factory: NodeFactory,
): Empty_DataTo {
	return factory.createIdentifier('null');
}

export function Empty_generate_typescript_type(
	factory: NodeFactory,
): Empty_SchemaTo {
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
