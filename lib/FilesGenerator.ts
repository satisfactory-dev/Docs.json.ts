import {
	Node,
} from 'typescript';

export type entry = {file: string, node: Node};

export abstract class FilesGenerator
{
	abstract generate_files(): AsyncGenerator<entry>;
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

		yield* this.entries;
	}
}
