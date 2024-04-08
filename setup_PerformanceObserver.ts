export function setup_PerformanceObserver(clear_lines = true)
{
	const measure_totals: {[key: string]: [number, number]} = {};
	let last_total_lines = 0;

	const obs = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			if (!(entry.name in measure_totals)) {
				measure_totals[entry.name] = [0, 0];
			}
			measure_totals[entry.name][0] += entry.duration;
			measure_totals[entry.name][1] += 1;
		}

		const results = Object.entries(measure_totals).map((e) => {
			return [
				e[0],
				{
					'total time': `${(e[1][0] / 1000).toFixed(4)}s`,
					amount: e[1][1],
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
				results
			)
		);

		performance.clearMeasures();
	});
	obs.observe({entryTypes: ['measure'], buffered: true});

	return () => measure_totals;
}
