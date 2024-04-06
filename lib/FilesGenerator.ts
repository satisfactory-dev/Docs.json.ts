import {
	Node,
} from 'typescript';

export type entry = {file: string, node: Node};

export abstract class FilesGenerator
{
	abstract generate_files(): AsyncGenerator<entry>;

	static async merge_files(
		generators:FilesGenerator[],
		onto:{[key: string]: Node[]}|undefined = undefined
	): Promise<{[key: string]: Node[]}> {
		onto = onto || {};

		for (const generator of generators) {
			for await (const entry of generator.generate_files()) {
				if (!(entry.file in onto)) {
					onto[entry.file] = [];
				}

				onto[entry.file].push(entry.node);
			}
		}

		return onto;
	}
}

export class FromArray extends FilesGenerator
{
	private readonly entries:[entry, ...entry[]];

	constructor(entries:[entry, ...entry[]]) {
		super();
		this.entries = entries;
	}

	async* generate_files()
	{
		await Promise.resolve(); // lazier than figuring out the correct syntax

		if (this.entries.length > 0) {
			yield* this.entries; // phpstorm doesn't track this as a query 🤷‍♂️
		}
	}
}

export function guess_filename(ref: string): string {
	if (/^FG[A-Za-z]+([-_]{2,}[A-Za-z-_]+)?$/.test(ref)) {
		return `classes/CoreUObject/${ref.split(/[-_]{2,}/)[0]}.ts`;
	} else if (
		ref.startsWith('NativeClass--')
		|| ref.startsWith('EditorCurveData--')
	) {
		return 'classes/base.ts';
	}

	return 'common/unassigned.ts';
}
