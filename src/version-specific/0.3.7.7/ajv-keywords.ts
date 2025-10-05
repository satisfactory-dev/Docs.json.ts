import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	TemplatedString,
} from '../../../JSON-Schema-TypeScript-CodeGen/src/Ajv/TemplatedString.ts';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

import update3_properties from '../../../schema/0.3.7.7/properties.json' with {
	type: 'json',
};

import update3_classes from '../../../schema/0.3.7.7/classes.json' with {
	type: 'json',
};

import update3 from '../../../schema/0.3.7.7/docs.json' with {
	type: 'json',
};

const already_configured: WeakSet<Ajv> = new WeakSet();

export function configure_ajv(ajv: Ajv) {
	if (already_configured.has(ajv)) {
		return;
	}

	TemplatedString.configure_ajv(ajv);

	ajv.addSchema(common_types);
	ajv.addSchema(update3_properties);
	ajv.addSchema(update3_classes);
	ajv.addSchema(update3);

	ajv.addKeyword({
		keyword: 'DocsDotJson_NativeClass',
		type: 'string',
		macro: (value: string) => ({
			templated_string: [
				`Class'/Script/`,
				value,
				`'`,
			],
		}),
	});

	ajv.addKeyword({
		keyword: 'DocsDotJson_Desc_C',
		type: 'string',
		macro: (value: string|null) => ({
			templated_string: [
				'Desc_',
				null === value ? {type: 'string'} : value,
				'_C',
			],
		}),
	});

	ajv.addKeyword({
		keyword: 'DocsDotJson_StringDotString',
		type: 'string',
		macro: (value: string) => ({
			templated_string: [
				value,
				'.',
				value,
			],
		}),
	});

	ajv.addKeyword({
		keyword: 'DocsDotJson_Texture2D',
		type: 'string',
		macro: (value: ([
			string|null,
			string|null,
			(
				| '64'
				| '256'
				| '512'
				| ['64', '256', '512']
				| ['64', '256']
				| ['256', '512']
				| ['64', '512']
				// eslint-disable-next-line @stylistic/comma-dangle
				| null
			),
		])|null) => {
			value = (null === value) ? [null, null, null] : value;

			const value1 = null === value[1] ? {type: 'string'} : value[1];
			const value2 = null === value[2]
				? ['64', '256']
				: value[2];

			return {
				templated_string: [
					`Texture2D'/Game/FactoryGame/`,
					null === value[0] ? {type: 'string'} : value[0],
					['/IconDesc_', '/'],
					{
						type: 'string',
						templated_string: [
							{
								type: 'string',
								templated_string: [
									value1,
									'_',
									value2,
								],
							},
							'.',
							{
								type: 'string',
								templated_string: [
									value1,
									'_',
									value2,
								],
							},
						],
					},
					`'`,
				],
			};
		},
	});
}
