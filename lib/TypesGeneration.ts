import {
	default as Ajv,
	Schema,
	ValidateFunction,
	ErrorObject,
} from 'ajv/dist/2020';
import ts from 'typescript';

declare type code_generator<T extends object> = (data:T, reference_name:string) => ts.Node;

export abstract class TypesGeneration<T1 extends object, T2 extends T1|string>
{
	protected code_generator:code_generator<T1>;

	constructor(generation:code_generator<T1>) {
		this.code_generator = generation;
	}

	abstract test(data:T2): boolean;
}

export class TypesGenerationFromSchema<T extends object> extends TypesGeneration<T, T>
{
	public schema:Schema;
	private validation:ValidateFunction|undefined;

	constructor(schema:Schema, generation:code_generator<T>) {
		super(generation);

		this.schema = schema;
	}

	get errors(): null | ErrorObject[]
	{
		return this.validation?.errors || null;
	}

	test(data:T): boolean
	{
		if (!this.validation) {
			const ajv = new Ajv();
			this.validation = ajv.compile(this.schema);
		}

		return this.validation(data);
	}

	generate(data:T, reference_name:string): ts.Node
	{
		if (!this.test(data)) {
			throw new Error('Data is unsupported by this instance of code generation!');
		}

		return this.code_generator(data, reference_name);
	}
}

export class TypesGenerationMatchesReferenceName<T1 extends object, T2 extends string> extends TypesGeneration<T1, T2>
{
	private supported_reference_names:string[];

	constructor(supported_reference_names: string[], generation:code_generator<T1>) {
		super(generation);

		this.supported_reference_names = supported_reference_names;
	}

	test(data:string): boolean
	{
		return this.supported_reference_names.includes(data);
	}

	generate(data:T1, reference_name:T2): ts.Node
	{
		if (!this.test(reference_name)) {
			throw new Error('Data is unsupported by this instance of code generation!');
		}

		return this.code_generator(data, reference_name);
	}
}

export class GenerationMatch<T extends object>
{
	readonly definition:string;
	readonly data:T;
	readonly generation:TypesGenerationFromSchema<T>|TypesGenerationMatchesReferenceName<T, any>;

	constructor(definition:string, data:T, generation:TypesGenerationFromSchema<T>|TypesGenerationMatchesReferenceName<T, any>) {
		this.definition = definition;
		this.data = data;
		this.generation = generation;
	}
}

export declare type imports_shorthand = {
	import_these: [string, ...string[]],
	from:string,
}[];

export class ImportTracker
{
	private static imports:{[key: string]: imports_shorthand} = {};

	static set_imports(file:string, imports:imports_shorthand)
	{
		this.imports[file] = imports;
	}

	static generate_imports(file:string) : ts.ImportDeclaration[] {
		if (!(file in this.imports)) {
			return [];
		}

		return this.imports[file].map((entry) => {
			return ts.factory.createImportDeclaration(
				[],
				ts.factory.createImportClause(
					false,
					undefined,
					ts.factory.createNamedImports(entry.import_these.map((import_this) => {
						return ts.factory.createImportSpecifier(
							false,
							undefined,
							ts.factory.createIdentifier(import_this)
						);
					}))
				),
				ts.factory.createStringLiteral(entry.from)
			);
		});
	}
}
