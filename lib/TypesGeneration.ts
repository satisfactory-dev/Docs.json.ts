import {
	default as Ajv,
	Schema,
	ValidateFunction,
	ErrorObject,
} from 'ajv/dist/2020';
import ts from 'typescript';

declare type code_generator<
	T extends object | true,
	T2 extends string = string,
> = (data: T, reference_name: T2) => ts.Node;

export abstract class TypesGeneration<
	T1 extends object | true,
	T2 extends T1 | string,
	T3 extends string = string,
> {
	protected code_generator: code_generator<T1, T3>;

	protected constructor(generation: code_generator<T1, T3>) {
		this.code_generator = generation;
	}

	abstract test(data: T2): boolean;
}

export class TypesGenerationFromSchema<
	T extends object | true,
> extends TypesGeneration<T, T> {
	public schema: Schema;
	private validation: ValidateFunction | undefined;

	constructor(schema: Schema, generation: code_generator<T>) {
		super(generation);

		this.schema = schema;
	}

	get errors(): null | ErrorObject[] {
		return this.validation?.errors || null;
	}

	test(data: T): boolean {
		if (!this.validation) {
			const ajv = new Ajv();
			this.validation = ajv.compile(this.schema);
		}

		return this.validation(data);
	}

	generate(data: T, reference_name: string): ts.Node {
		if (!this.test(data)) {
			throw new Error(
				'Data is unsupported by this instance of code generation!'
			);
		}

		return this.code_generator(data, reference_name);
	}
}

export class TypesGenerationMatchesReferenceName<
	T1 extends object,
	T2 extends string,
> extends TypesGeneration<T1, T2, T2> {
	private supported_reference_names: T2[];

	constructor(
		supported_reference_names: T2[],
		generation: code_generator<T1, T2>
	) {
		super(generation);

		this.supported_reference_names = supported_reference_names;
	}

	test(data: T2): boolean {
		return this.supported_reference_names.includes(data);
	}

	generate(data: T1, reference_name: T2): ts.Node {
		if (!this.test(reference_name)) {
			throw new Error(
				'Data is unsupported by this instance of code generation!'
			);
		}

		return this.code_generator(data, reference_name);
	}
}

export class GenerationMatch<T extends object> {
	readonly definition: string;
	readonly data: T;
	readonly generation:
		| TypesGenerationFromSchema<T>
		| TypesGenerationMatchesReferenceName<T, any>;

	constructor(
		definition: string,
		data: T,
		generation:
			| TypesGenerationFromSchema<T>
			| TypesGenerationMatchesReferenceName<T, any>
	) {
		this.definition = definition;
		this.data = data;
		this.generation = generation;
	}
}

export declare type import_these_somewhere_later = {[key: string]: string[]};

export declare type import_these_later = {
	[key: string]: import_these_somewhere_later;
};

export declare type imports_shorthand = {
	import_these: [string, ...string[]];
	from: string;
}[];

export class ImportTracker {
	public static imports: {[key: string]: imports_shorthand} = {};

	static set_imports(file: string, imports: imports_shorthand) {
		this.imports[file] = imports;
	}

	static merge_and_set_imports(imports: import_these_later) {
		for (const entry of Object.entries(imports)) {
			const [filename, file_imports] = entry;

			const merge_here = Object.fromEntries(
				(this.imports[filename] || []).map((shorthand_entry) => {
					return [
						shorthand_entry.from,
						shorthand_entry.import_these,
					];
				})
			);

			for (const inner_entry of Object.entries(file_imports)) {
				const [from, import_these] = inner_entry;

				if (from.endsWith('.ts')) {
					throw new Error('nope');
				}

				if (import_these.length) {
					if (!(from in merge_here)) {
						merge_here[from] = import_these as [
							string,
							...string[],
						];
					} else {
						for (const import_this of import_these) {
							if (!merge_here[from].includes(import_this)) {
								merge_here[from].push(import_this);
							}
						}
					}
				}
			}

			if (Object.keys(merge_here).length) {
				ImportTracker.set_imports(
					filename,
					Object.entries(merge_here).map((unpack) => {
						return {from: unpack[0], import_these: unpack[1]};
					})
				);
			}
		}
	}

	static generate_imports(file: string): ts.ImportDeclaration[] {
		if (!(file in this.imports)) {
			return [];
		}

		return this.imports[file].map((entry) => {
			return ts.factory.createImportDeclaration(
				[],
				ts.factory.createImportClause(
					false,
					undefined,
					ts.factory.createNamedImports(
						entry.import_these.map((import_this) => {
							return ts.factory.createImportSpecifier(
								false,
								undefined,
								ts.factory.createIdentifier(import_this)
							);
						})
					)
				),
				ts.factory.createStringLiteral(entry.from)
			);
		});
	}
}
