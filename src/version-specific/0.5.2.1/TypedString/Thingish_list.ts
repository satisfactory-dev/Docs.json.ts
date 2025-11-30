import type {
	Expression,
} from 'typescript';

import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	$ref_type,
	array_schema,
	array_type,
	SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	ArrayType,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	RestedTupleTypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

type Thingish_list_prefixItems_item = (
	| $ref_type
);

type Thingish_list_outter<
	SelfReference extends SchemaObject,
> = {
	type: 'string',
	typed_string: (
		& array_type<
			'items',
			'specified',
			'yes',
			'with',
			SelfReference
		>
		& {
			maxItems: ReturnType<typeof PositiveIntegerOrZeroGuard<number>>,
		}
	),
};

type Thingish_list_prefixItems = (
	& array_type<
		'prefixItems',
		'specified',
		'yes',
		'with',
		SchemaObject,
		[
			Thingish_list_prefixItems_item,
			...Thingish_list_prefixItems_item[],
		]
	>
	& {
		maxItems: ReturnType<typeof PositiveIntegerOrZeroGuard<number>>,
	}
);

export type Thingish_list_type<
	SelfReference extends SchemaObject,
> = (
	| Thingish_list_outter<SelfReference>
	| Thingish_list_prefixItems
);

const unspecified = ArrayType.generate_schema_definition({
	array_mode: 'prefixItems',
	specified_mode: 'unspecified',
	unique_items_mode: 'no',
	min_items_mode: 'with',
	minItems: PositiveIntegerOrZeroGuard(1),
});

const non_self_reference = {
	type: 'object',
	additionalProperties: false,
	required: ['type', 'typed_string'],
	properties: {
		type: {
			type: 'string',
			const: 'string',
		},
		typed_string: {
			...unspecified,
			properties: {
				...unspecified.properties,
				prefixItems: {
					...unspecified.properties.prefixItems,
					items: {
						oneOf: [
							$ref.generate_type_definition(),
						] as const,
					},
				},
			},
		},
	},
} as const;

export type Thingish_list_schema_properties = {
	$id: 'DocsDotJson_thingish_list_schema',
	oneOf: [
		array_schema<
			'items',
			'specified',
			'yes',
			'with',
			{
				$ref: 'DocsDotJson_thingish_list_schema',
			}
		>,
		typeof non_self_reference,
	],
};

export type Thingish_list_SchemaTo = (
	| RestedTupleTypeNode<
		UnionTypeNode<[
			TypeReferenceNode,
			TypeReferenceNode,
			...TypeReferenceNode[],
		]>
	>
);

export type Thingish_list_DataTo = (
	| ArrayLiteralExpression<
		Expression,
		[Expression, ...Expression[]],
		true
	>
);

export function Thingish_list_compile_validator<
	SelfReference extends SchemaObject,
>(
	ajv: Ajv,
): ValidateFunction<Thingish_list_type<SelfReference>> {
	const self_reference: Readonly<
		Thingish_list_schema_properties['oneOf'][0]
	> = ArrayType.generate_schema_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		items: {
			$ref: 'DocsDotJson_thingish_list_schema',
		},
		minItems: PositiveIntegerOrZeroGuard(1),
	});

	const schema: Thingish_list_schema_properties = {
		$id: 'DocsDotJson_thingish_list_schema',
		oneOf: [
			self_reference,
			non_self_reference,
		],
	};

	return ajv.compile<Thingish_list_type<SelfReference>>(schema);
}

function is_prefixItems(
	schema: SchemaObject,
): schema is Thingish_list_prefixItems {
	return 'prefixItems' in schema;
}

function is_outter<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: SchemaObject,
): schema is Thingish_list_outter<SelfReference> {
	return ('typed_string' in schema);
}

function is_inner<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: SchemaObject,
): schema is Thingish_list_outter<SelfReference>['typed_string'] {
	return (
		'items' in schema
		&& false !== schema.items
	);
}

export function Thingish_list_schema_ajv_macro<
	SelfReference extends SchemaObject,
>(
	schema: Thingish_list_type<SelfReference>,
): {pattern: string} {
	return {
		pattern: `^(?:${Thingish_list_schema_to_pattern__str(schema)})$`,
	};
}

function Thingish_list_schema_to_pattern__str(
	schema: SchemaObject,
): string {
	if (is_prefixItems(schema)) {
		return Thingish_list_schema_to_pattern__prefixItems(schema);
	} else if (is_outter(schema)) {
		return Thingish_list_schema_to_pattern__str(schema.typed_string);
	} else if (is_inner(schema)) {
		return Thingish_list_schema_to_pattern__inner(schema);
	}

	throw new TypeError('Unsupported schema!');
}

function Thingish_list_schema_to_pattern__prefixItems(
	schema: Thingish_list_prefixItems,
): string {
	const regex: string[] = [];

	if (schema.maxItems !== schema.minItems) {
		throw new TypeError('minItems must match maxItems!');
	}

	for (const sub_schema of schema.prefixItems) {
		if ($ref.is_supported_$ref(sub_schema)) {
			switch (sub_schema.$ref) {
				case 'docs.json.ts--common--types#/$defs/integer_string':
					regex.push('\\d+');
					break;
				case 'docs.json.ts--common--types#/$defs/decimal_string':
					regex.push('\\d+\\.\\d{6}');
					break;
			}
		} else {
			throw new TypeError('Not yet implemented!');
		}
	}

	return `(?:\\(${regex.join(', ')}\\))`;
}

function Thingish_list_schema_to_pattern__inner<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: Thingish_list_outter<SelfReference>['typed_string'],
): string {
	if (schema.maxItems < schema.minItems) {
		throw new TypeError('maxItems must be greater or equal to minItems!');
	}

	const regex = Thingish_list_schema_to_pattern__str(
		schema.items,
	);

	return `(?:\\((?:,?${
		regex
	}){${
		schema.minItems
	},${
		schema.maxItems
	}}\\))`;
}

export function Thingish_list_generate_schema_definition(
): Readonly<Thingish_list_schema_properties> {
	const sanity_check_self_reference: Readonly<
		Thingish_list_schema_properties['oneOf'][0]
	> = ArrayType.generate_schema_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
		items: {
			$ref: 'DocsDotJson_thingish_list_schema',
		},
	});

	const sanity_check: Thingish_list_schema_properties = {
		$id: 'DocsDotJson_thingish_list_schema',
		oneOf: [
			sanity_check_self_reference,
			non_self_reference,
		],
	};

	return Object.freeze(sanity_check);
}

export function Thingish_list_generate_type_definition_prefixItems(
) {
	return Object.freeze({
		type: 'string',
		typed_string: {
			type: 'array',
			items: false,
			prefixItems: [
				{
					$ref: '#/$defs/foo',
				},
			],
		},
	});
}
