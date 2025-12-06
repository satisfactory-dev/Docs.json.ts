import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	KeywordType,
	RegexpFailureError,
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	factory,
	type StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

type AkAudioEvent_quoted_type = {
	type: 'string',
	DocsDotJson_AkAudioEvent_quoted: string|null,
};

const AkAudioEvent_quoted_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_AkAudioEvent_quoted: {
		oneOf: [
			{
				type: 'string',
			},
			{
				type: 'null',
			},
		],
	},
} as const;

type AkAudioEvent_quoted_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_AkAudioEvent_quoted'],
	typeof AkAudioEvent_quoted_schema_properties
>;

export type {
	AkAudioEvent_quoted_schema,
	AkAudioEvent_quoted_type,
};

export class AkAudioEvent<
	T extends `AkAudioEvent'"/Game/WwiseAudio/Events/Equipment/${
		string
	}/Play_${
		string
	}.Play_${
		string
	}"'` = `AkAudioEvent'"/Game/WwiseAudio/Events/Equipment/${
		string
	}/Play_${
		string
	}.Play_${
		string
	}"'`,
> extends KeywordType<
		T,
		AkAudioEvent_quoted_type,
		Record<string, never>,
		AkAudioEvent_quoted_schema,
		Record<string, never>,
		TemplateLiteralTypeNode,
		StringLiteral
	> {
	#regex: RegExp;

	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: 'DocsDotJson_AkAudioEvent_quoted',
					type: 'string',
					macro: (value: string|null) => {
						let pattern = AkAudioEvent
							.#regex_from_value(
								value,
							).toString();

						if (pattern.startsWith('/') && pattern.endsWith('/')) {
							pattern = pattern.substring(1, pattern.length - 1);
						}

						return {
							pattern,
						};
					},
				},
				type_definition: {},
				schema_definition: {},
				add_to_$defs_excluded: true,
			},
		);

		this.#regex = AkAudioEvent.#regex_from_value(
			null,
		);
	}

	generate_typescript_data(
		data: T,
	): StringLiteral {
		if (!this.#regex.test(data)) {
			throw new RegexpFailureError(
				'Value does not match expected regex!',
				this.#regex,
				data,
			);
		}

		return factory.createStringLiteral(data);
	}

	generate_typescript_type({
		schema,
	}: {
		schema: AkAudioEvent_quoted_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				AkAudioEvent.TemplatedStringParts_by_value(
					schema.DocsDotJson_AkAudioEvent_quoted,
				),
			),
		);
	}

	static generate_schema_definition(): Readonly<
		AkAudioEvent_quoted_schema
	> {
		const result: AkAudioEvent_quoted_schema = {
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'DocsDotJson_AkAudioEvent_quoted',
			],
			properties: AkAudioEvent_quoted_schema_properties,
		};

		return Object.freeze(result);
	}

	static generate_type_definition(): Readonly<
		AkAudioEvent_quoted_type
	> {
		const result: AkAudioEvent_quoted_type = {
			type: 'string',
			DocsDotJson_AkAudioEvent_quoted: null,
		};

		return Object.freeze(result);
	}

	static regex_from_value(
		value: string|null,
	): string {
		const start = RegExp.escape(`AkAudioEvent'"`);


		if (null !== value) {
			const escaped = RegExp.escape(value);

			return `${start}${escaped}"'`;
		}

		const prefix = RegExp.escape('/Game/WwiseAudio/Events/Equipment/');

		return `${
			start
		}${
			prefix
		}(?:[^/"']+/)+Play_[^\\."']+\\.Play_[^\\."']+"'`;
	}

	static TemplatedStringParts(
		schema: AkAudioEvent_quoted_type,
	): TemplatedStringParts {
		const value = schema.DocsDotJson_AkAudioEvent_quoted;

		return this.TemplatedStringParts_by_value(value);
	}

	static TemplatedStringParts_by_value(
		value: string|null,
	): TemplatedStringParts {
		return [
			`AkAudioEvent'"`,
			...(null === value
				? [
					'/Game/WwiseAudio/Events/Equipment/',
					{type: 'string'},
					'/Play_',
					{type: 'string'},
					'.Play_',
					{type: 'string'},
				] as const
				: [value] as const
			),
			`"'`,
		];
	}

	static #regex_from_value(
		value: string|null,
	): RegExp {
		return new RegExp(`^${this.regex_from_value(value)}$`);
	}
}
