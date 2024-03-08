import {dirname} from 'path';
import {fileURLToPath} from 'url';

import {
	DocsTsGenerator,
	generation_result,
	GenerationException,
} from './lib/DocsTsGenerator';
import {writeFile} from 'node:fs/promises';
import {
	NoMatchError,
	OneOfOrAnyOfNoMatchError,
	PartialMatchError,
	PropertyMatchFailure,
} from './lib/TypeNodeGeneration';

const __dirname = dirname(fileURLToPath(import.meta.url));

const generator = new DocsTsGenerator({
	docs_path: `${__dirname}/data/Docs.json`,
	cache_path: `${__dirname}/data/`,
});

async function update_progress(
	progress: generation_result,
	log_progress = true
) {
	if (log_progress) {
		console.table({
			Supported: progress.definitions.supported.length,
			Unsupported:
				progress.definitions.keys.length -
				progress.definitions.supported.length,
		});
	}

	const all_progress_items = [...progress.definitions.keys].sort((a, b) =>
		a.localeCompare(b)
	);

	type progress_group = {
		members: string[];
		subgroups: {[key: string]: progress_group};
	};

	const grouped_progress: progress_group = {
		members: [],
		subgroups: {},
	};

	const manual_groups = {
		class: '',
		'class--no-description': '',
		'class--no-description-or-display-name': '',
		'color-decimal--semi-native': 'color',
		'decimal-string': '',
		'decimal-string--signed': '',
		'integer-string': '',
		'integer-string--signed': '',
		'FGAmmoTypeInstantHit--base': 'FGAmmoType',
		'FGAmmoTypeInstantHit--chaos': 'FGAmmoType',
		'FGAmmoTypeInstantHit--standard': 'FGAmmoType',
		FGAmmoTypeProjectile: 'FGAmmoType',
		'FGAmmoTypeProjectile--base': 'FGAmmoType',
		xyz: 'vectors',
		'xyz--semi-native': 'vectors',
		xy: 'vectors',
		'xy--integer': 'vectors',
		'xy--semi-native': 'vectors',
		'xyz--integer': 'vectors',
		'xyz-array': 'vectors',
		quaternion: 'vectors',
		'quaternion--semi-native': 'vectors',
		'pitch-yaw-roll': 'vectors',
		'FGEquipmentDescriptor--base': 'FGEquipment',
	};

	for (const item of all_progress_items) {
		const parts = item.split('--');

		let checking = grouped_progress;

		if (item in manual_groups) {
			if ('' !== manual_groups[item as keyof typeof manual_groups]) {
				if (
					!(
						manual_groups[item as keyof typeof manual_groups] in
						checking.subgroups
					)
				) {
					checking.subgroups[
						manual_groups[item as keyof typeof manual_groups]
					] = {
						members: [],
						subgroups: {},
					};
				}

				checking =
					checking.subgroups[
						manual_groups[item as keyof typeof manual_groups]
					];
			}
		} else if (parts.length > 1) {
			for (
				let iteration = 1;
				iteration < Math.min(2, parts.length);
				++iteration
			) {
				if (!(parts[iteration - 1] in checking.subgroups)) {
					checking.subgroups[parts[iteration - 1]] = {
						members: [],
						subgroups: {},
					};
				}

				checking = checking.subgroups[parts[iteration - 1]];
			}
		}

		if (!checking.members.includes(item)) {
			checking.members.push(item);
		}
	}

	function remap(group: progress_group) {
		const subgroups = Object.keys(group.subgroups);

		const retain: string[] = [];

		const remap_items: {[key: string]: string[]} = {};

		for (const item of group.members) {
			let retain_item = true;

			for (const subgroup of subgroups) {
				if (item.startsWith(subgroup)) {
					if (!(subgroup in remap_items)) {
						remap_items[subgroup] = [];
					}
					remap_items[subgroup].push(item);
					retain_item = false;
					break;
				}
			}

			if (retain_item) {
				retain.push(item);
			}
		}

		group.members = retain;

		for (const entry of Object.entries(remap_items)) {
			const [subgroup, items] = entry;

			group.subgroups[subgroup].members = [
				...items,
				...group.subgroups[subgroup].members,
			];
		}

		for (const subgroup of Object.values(group.subgroups)) {
			remap(subgroup);
		}
	}

	function reduce(
		group: progress_group,
		title: string = 'Basic Types',
		current_depth: number = 1
	): {
		title: string;
		members: string[];
		depth: number;
	}[] {
		return [
			{
				title,
				depth: 1 === current_depth ? 2 : current_depth,
				members: group.members,
			},
			...Object.entries(group.subgroups)
				.map((subgroup) => {
					return reduce(subgroup[1], subgroup[0], current_depth + 1);
				})
				.reduce((was, is) => {
					was.push(...is);

					return was;
				}, [])
				.sort((a, b) => {
					return a.title.localeCompare(b.title);
				}),
		];
	}

	remap(grouped_progress);


	function unindent(input:string) : string
	{
		const str = input.replace(/^\n+/, '').replace(/\n+\t*$/, '\n');

		console.log(str);

		const matches = /^(\t+)/gm.exec(str);

		if (matches) {
			const min = matches.reduce((was, is) => Math.min(was, is.length), Infinity);

			if (min > 0 && min !== Infinity) {
				return str.replace((new RegExp(`^\t{${min}}`, 'gm')), '');
			}
		}

		return str;
	}

	const progress_markdown = unindent(`
		# Types Progress

		${
			(
				(progress.definitions.supported.length / all_progress_items.length) *100
			).toFixed(2)
		}% Complete (${
			progress.definitions.supported.length} of ${all_progress_items.length
		})

		${
			reduce(grouped_progress).map((group) => {
				return unindent(`
					${'#'.repeat(group.depth)} ${group.title}

					${group.members.map((key) => {
						return `-   [${progress.definitions.supported.includes(key) ? 'x' : ' '}] ${key}`;
					}).join('\n')}`);
			}).join('\n\n')
		}
	`);

	await writeFile(`${__dirname}/types-progress.md`, progress_markdown);
}

try {
	const progress = await generator.generate_types(
		`${__dirname}/generated-types/`,
		true,
		true
	);

	await update_progress(progress);
} catch (err) {
	if (err instanceof GenerationException) {
		await update_progress(err.progress, false);

		let {exception} = err;

		if (exception instanceof PropertyMatchFailure) {
			console.error(`issue with ${exception.property_name}`);
			exception = exception.original;
		}

		if (exception instanceof PartialMatchError) {
			console.error(exception.property, ...exception.missing);
		} else if (exception instanceof OneOfOrAnyOfNoMatchError) {
			for (const not_matched of exception.property) {
				console.error(not_matched);
			}

			console.error(exception.message);
		} else {
			console.error(exception);
		}

		if (
			exception instanceof PartialMatchError ||
			exception instanceof NoMatchError
		) {
			console.error(exception.stack);
		}
	} else {
		console.error('error not generation exception!');
		console.error(err);
	}

	throw new Error('Failed to generate types');
}
