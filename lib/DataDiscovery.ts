import {
	DocsDataItem,
	DocsTsGenerator,
} from './DocsTsGenerator';
import {
	GeneratesMarkdown, progress_group, reduce, remove_indentation,
} from './MarkdownUtilities';
import {
	ExpressionResult,
	GenerationResult,
	Generator,
} from './DataDiscovery/Generator';
import {
	FilesGenerator,
} from './FilesGenerator';
import {
	adjust_unrealengine_value,
} from './CustomParsingTypes/UnrealEngineString';
import {
	is_string,
} from './StringStartsWith';
import {
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	NoMatchError,
} from './Exceptions';
import {
	adjust_class_name,
	create_const_statement, create_modifiers,
	property_name_or_computed, type_reference_node, variable,
} from './TsFactoryWrapper';
import ts, {
	ArrayLiteralExpression,
	Expression,
	FalseLiteral,
	Identifier,
	ObjectLiteralExpression,
	StringLiteral,
	TrueLiteral,
} from 'typescript';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';

type progress = {[p: string]: string[]};

export class DataDiscovery
	extends FilesGenerator
	implements GeneratesMarkdown
{
	private readonly candidates:Generator<
		DocsDataItem,
		DocsDataItem<GenerationResult>
	>[] = [];
	private readonly docs:DocsTsGenerator;
	private readonly progress:progress = {};

	constructor(docs:DocsTsGenerator) {
		super();
		this.docs = docs;
	}

	async expecting() : Promise<progress>
	{
		const json = await this.docs.get();

		return Object.fromEntries(
			json.map(e => [e.NativeClass, e.Classes.map(e => e.ClassName)])
		);
	}

	async generate(): Promise<GenerationResult<
		DocsDataItem,
		DocsDataItem<GenerationResult>
	>[]> {
		/*
		const schema = await this.docs.schema();
		 */

		return await Promise.all(
			(await this.docs.get()).map(e => Generator.find<
				DocsDataItem,
				DocsDataItem<GenerationResult>
			>(
				this.candidates,
				e
			))
		);
	}

	async* generate_files() {
		for (const NativeClass of await this.generate()) {
			const result = await NativeClass.result();

			this.progress[result.NativeClass] = [];

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(result.NativeClass).right
			);

			const file = `data/CoreUObject/${entry_class_name}.ts`;

			for (const item of result.Classes) {
				yield {
					file,
					node: create_const_statement(
						variable(
							adjust_class_name(item.ClassName),
							await DataDiscovery.object_literal(item)
						)
					),
				};

				this.progress[result.NativeClass].push(item.ClassName);
			}

			const result_statement = create_const_statement(variable(
				adjust_class_name(entry_class_name),
				await DataDiscovery.object_literal({
					NativeClass: result.NativeClass,
					Classes: result.Classes.map(
						e => new ExpressionResult(
							ts.factory.createIdentifier(
								adjust_class_name(e.ClassName)
							)
						)
					),
				}),
				type_reference_node(
					adjust_class_name(`${entry_class_name}__NativeClass`)
				),
			));

			yield {
				file,
				node: ts.factory.updateVariableStatement(
					result_statement,
					create_modifiers('export'),
					result_statement.declarationList
				),
			}
		}
	}

	async generate_markdown(): Promise<string> {
		let expected_count = 0;
		const grouped_progress = {
			members: [],
			subgroups: Object.entries(await this.expecting()).reduce(
				(was, is) => {
					const [NativeClass, Classes] = is;
					expected_count += 1 + Classes.length;

					was[NativeClass] = {members: Classes, subgroups: {}};

					return was;
				},
				{} as {[key: string]: progress_group}
			),
		};

		let actual_count = 0;

		for (const Classes of Object.values(this.progress)) {
			actual_count += 1 + Classes.length;
		}

		return remove_indentation(`
			# Data Progress

			${
				((actual_count / expected_count) * 100).toFixed(2)
			}% Complete (${actual_count} of ${expected_count})

			${reduce(grouped_progress).map((group) => {
				return remove_indentation(
					`${'#'.repeat(group.depth)} ${group.title}
					${
						group.members.map((key) => {
							const done = (
								group.title in this.progress
								&& this.progress[group.title].includes(key)
							);
							return `-   [${done ? 'x' : ' '}] ${key.replace(
								/__/g,
								'\\_\\_'
							)}`;
						}).join('\n')
					}`
				);
			}).join('\n\n')}
		`);
	}

	static async object_literal(
		from:{[key: string]: unknown},
	): Promise<ObjectLiteralExpression> {
		return ts.factory.createObjectLiteralExpression(
			await Promise.all(Object.entries(from).map(async (entry) => {
				const value = this.value_literal(entry[1]);

				return ts.factory.createPropertyAssignment(
					property_name_or_computed(entry[0]),
					await value
				);
			}))
		);
	}

	static async value_literal(from: unknown) : Promise<
		| StringLiteral
		| TrueLiteral
		| FalseLiteral
		| Identifier
		| ArrayLiteralExpression
		| Expression
		| ObjectLiteralExpression
	> {
		from = from instanceof GenerationResult ? await from.result() : from;

		if (is_string(from)) {
			return ts.factory.createStringLiteral(from);
		} else if (from instanceof ExpressionResult) {
			return (from as ExpressionResult).expression;
		} if (value_is_non_array_object(from)) {
			return await this.object_literal(from);
		} else if ('boolean' === typeof from) {
			return from ? ts.factory.createTrue():ts.factory.createFalse();
		} else if (undefined === from) {
			return ts.factory.createIdentifier('undefined');
		} else if (!(from instanceof Array)) {
			throw new NoMatchError(from, 'not an array!');
		}
		return ts.factory.createArrayLiteralExpression(
			await Promise.all(from.map(e => this.value_literal(e)))
		);
	}
}
