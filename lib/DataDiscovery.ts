import {
	DocsTsGenerator,
} from './DocsTsGenerator';
import {
	GeneratesMarkdown, progress_group, reduce, remove_indentation,
} from './MarkdownUtilities';

type progress = {[p: string]: string[]};

export class DataDiscovery implements GeneratesMarkdown
{
	private readonly docs:DocsTsGenerator;
	private readonly progress:progress = {};

	constructor(docs:DocsTsGenerator) {
		this.docs = docs;
	}

	async expecting() : Promise<progress>
	{
		const json = await this.docs.get();

		return Object.fromEntries(
			json.map(e => [e.NativeClass, e.Classes.map(e => e.ClassName)])
		);
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
}
