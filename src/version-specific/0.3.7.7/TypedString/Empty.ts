import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

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

export function Empty_compile_vaildator(
	ajv: Ajv,
): ValidateFunction<Empty_type> {
	return ajv.compile<
		Empty_type
	>(
		{
			oneOf: [
				{
					type: 'object',
					additionalProperties: false,
					required: ['type', 'const'],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						const: {
							type: 'string',
							const: '',
						},
					},
				},
				{
					type: 'string',
					const: '',
				},
			],
		},
	);
}

export function Empty_generate_typescript_data(): Empty_DataTo {
	return factory.createIdentifier('null');
}

export function Empty_generate_typescript_type(): Empty_SchemaTo {
	return factory.createLiteralTypeNode(
		factory.createNull(),
	);
}
