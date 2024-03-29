export type progress_group = {
	members: string[];
	subgroups: {[key: string]: progress_group};
};

export function remap(group: progress_group) {
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

export function reduce(
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

export function remove_indentation(input: string): string {
	const str = input.replace(/^\n+/, '').replace(/\n+\t*$/, '\n');

	const matches = /^(\t+)/gm.exec(str);

	if (matches) {
		const min = matches.reduce(
			(was, is) => Math.min(was, is.length),
			Infinity
		);

		if (min > 0 && min !== Infinity) {
			return str.replace(new RegExp(`^\t{${min}}`, 'gm'), '');
		}
	}

	return str;
}
