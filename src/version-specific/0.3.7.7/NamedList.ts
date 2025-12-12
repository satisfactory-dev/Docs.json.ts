import type {
	PropertyAssignment,
	PropertySignature,
} from 'typescript';
import {
	SyntaxKind,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
	ObjectLiteralExpression,
	TypeLiteralNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

export type NamedList_type<
	Name extends string = string,
> = {
	type: 'string',
	DocsDotJson_named_list: Name,
};

type NamedList_schema<
	Name extends string = string,
> = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_named_list'],
	{
		type: {
			type: 'string',
			const: 'string',
		},
		DocsDotJson_named_list: {
			type: 'string',
			const: Name,
		},
	}
>;

export class NamedList<
	Name extends string = string,
> extends
	KeywordType<
		`${Name}(${string})`,
		NamedList_type,
		{name: Name},
		NamedList_schema,
		{name: Name},
		TypeLiteralNode<PropertySignature>,
		ObjectLiteralExpression<[PropertyAssignment]>
	> {
	constructor(
		options: SchemalessTypeOptions,
		name: Name,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: 'DocsDotJson_named_list',
					metaSchema: {
						type: 'string',
						const: name,
					},
					macro: (value: Name) => {
						const pattern = `^${
							NamedList.regex(value)
						}$`;

						return {
							pattern,
						};
					},
				},
				type_definition: {name},
				schema_definition: {name},
				add_to_$defs_excluded: true,
			},
		);
	}

	generate_typescript_data(
		data: `${Name}(${string})`,
		schema_parser: SchemaParser,
		schema: NamedList_type<string>,
	): ObjectLiteralExpression<[PropertyAssignment]> {
		const list_chunks = data.substring(
			schema.DocsDotJson_named_list.length + 2,
			data.length - 2,
		).split('", "');

		return factory.createObjectLiteralExpression(
			[
				factory.createPropertyAssignment(
					schema.DocsDotJson_named_list,
					factory.createArrayLiteralExpression(
						list_chunks.map((e) => factory.createStringLiteral(e)),
					),
				),
			],
			true,
		);
	}

	generate_typescript_type({
		schema,
	}: {
		schema: NamedList_type<string>,
	}): Promise<TypeLiteralNode<PropertySignature>> {
		const node: TypeLiteralNode<
			PropertySignature
		> = factory.createTypeLiteralNode([
			factory.createPropertySignature(
				undefined,
				schema.DocsDotJson_named_list,
				undefined,
				factory.createTupleTypeNode([
					factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
					factory.createRestTypeNode(factory.createArrayTypeNode(
						factory.createKeywordTypeNode(
							SyntaxKind.StringKeyword,
						),
					)),
				]),
			),
		]);

		return Promise.resolve(node);
	}

	static generate_schema_definition<
		Name extends string,
	>({name}: {name: Name}): Readonly<NamedList_schema<Name>> {
		const result: NamedList_schema<Name> = {
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_named_list'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				DocsDotJson_named_list: {
					type: 'string',
					const: name,
				},
			},
		};

		return Object.freeze(result);
	}

	static generate_type_definition<
		Name extends string,
	>({name}: {name: Name}): Readonly<NamedList_type<Name>> {
		const result: NamedList_type<Name> = {
			type: 'string',
			DocsDotJson_named_list: name,
		};

		return Object.freeze(result);
	}

	static regex<
		Name extends string,
	>(
		value: Name,
	) {
		return `${
			RegExp.escape(value)
		}\\([^)]+\\)`;
	}
}
