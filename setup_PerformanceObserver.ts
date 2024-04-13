export function setup_PerformanceObserver(clear_lines = true)
{
	const measure_totals: {[key: string]: [number, number]} = {};

	const tweak_order_by_prefix = [
		'bootstrap',
		'ajv compile',
		'TypeDefinitionWriter.',
		'Docs.json',
		'ObjectConverter.',
		'Ref.',
		'TypedStringConverter.',
	];

	let last_total_lines = 0;

	const obs = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			if (!(entry.name in measure_totals)) {
				measure_totals[entry.name] = [0, 0];
			}
			measure_totals[entry.name][0] += entry.duration;
			measure_totals[entry.name][1] += 1;
		}

		const results = Object.entries(measure_totals).map((
			e
		): [string, {[key: string]: string|number}] => {
			return [
				e[0],
				{
					'total time': `${(e[1][0] / 1000).toFixed(4)}s`,
					amount: e[1][1],
					'average per call': `${(e[1][0] / e[1][1]).toFixed(4)}ms`,
				},
			];
		});

		if (clear_lines && last_total_lines) {
			process.stdout.moveCursor(0, 0 - (last_total_lines + 4));
			process.stdout.clearLine(1);
		}

		last_total_lines = results.length;

		console.table(
			Object.fromEntries(
				results.sort((a, b) => {
					const a_prefix = tweak_order_by_prefix.find(
						maybe => a[0].startsWith(maybe)
					);
					const b_prefix = tweak_order_by_prefix.find(
						maybe => b[0].startsWith(maybe)
					);

					if (a_prefix || b_prefix) {
						if (!b_prefix) {
							return -1;
						} else if (!a_prefix) {
							return 1;
						}

						return (
							tweak_order_by_prefix.indexOf(
								a_prefix
							) - tweak_order_by_prefix.indexOf(
								b_prefix
							)
						);
					}

					return 0; // leave in order they came in
				})
			)
		);

		performance.clearMeasures();
	});
	obs.observe({entryTypes: ['measure'], buffered: true});

	return () => measure_totals;
}
