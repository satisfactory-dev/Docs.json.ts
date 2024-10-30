import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';

import {
	object_keys,
} from '@satisfactory-dev/predicates.ts';

import {
	TypeDefinitionWriter,
} from '../../lib/TypeDefinitionWriter';
import {
	docs,
	skip_because_docs_dot_json_not_yet_bundled,
} from '../../lib/helpers';

void describe('TypeDefinitionWriter', () => {
	void describe('discovery', () => {
		for (const version of object_keys(docs.docs_versions)) {
			if (
				skip_because_docs_dot_json_not_yet_bundled
				&& 'common' !== version
			) {
				continue;
			}

			void it (`${version}: does not throw`, () => {
				const instance = new TypeDefinitionWriter(docs, version);

				assert.doesNotThrow(() => instance.discovery);
			})
		}
	})

	void describe('can_have_class_tree', () => {
		const data_sets:[
			undefined|[
				ts.HeritageClause['token'],
				string[],
			],
			boolean,
		][] = [
			[
				undefined,
				false,
			],
			[
				[
					ts.SyntaxKind.ExtendsKeyword,
					['foo'],
				],
				true,
			],
		];

		for (const data_set of data_sets) {
			const [heritage_args, expectation] = data_set;

			const heritage_clause = undefined === heritage_args
				? undefined
				: [ts.factory.createHeritageClause(
					heritage_args[0],
					heritage_args[1].map(
						e => ts.factory.createExpressionWithTypeArguments(
							ts.factory.createIdentifier(e),
							undefined,
						),
					),
				)];

			void it(
				`TypeDefinitionWriter.can_class_have_tree() with ${
					undefined === heritage_args
						? 'undefined'
						: JSON.stringify(heritage_args)
				} returns ${
					expectation ? 'true' : 'false'
				}`,
				() => {
					assert.equal(
						TypeDefinitionWriter.can_class_have_tree(
							ts.factory.createClassDeclaration(
								undefined,
								undefined,
								undefined,
								heritage_clause,
								[],
							),
						),
						expectation,
					);
				},
			)
		}
	})
})
