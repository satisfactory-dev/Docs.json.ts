import ts from 'typescript';
import {
	NoMatchError,
} from './Exceptions';

export declare type import_these_somewhere_later = {[key: string]: string[]};

export declare type import_these_later = {
	[key: string]: import_these_somewhere_later;
};

export declare type imports_shorthand = {
	import_these: [string, ...string[]];
	from: string;
}[];

export class ImportTracker {
	private imports: {[key: string]: imports_shorthand} = {};

	generate_imports(file: string): ts.ImportDeclaration[] {
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

	merge_and_set_imports(imports: import_these_later) {
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
					throw new NoMatchError(
						from,
						'files ending with .ts should not end up here'
					);
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
				this.imports[filename] = Object.entries(merge_here).map(
					(unpack) => {
						return {from: unpack[0], import_these: unpack[1]};
					}
				);
			}
		}
	}
}
