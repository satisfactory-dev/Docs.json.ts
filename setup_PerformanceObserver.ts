export function setup_PerformanceObserver()
{
	const measure_totals: {[key: string]: number} = {};
	let last_total_lines = 0;

	const obs = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			if (!(entry.name in measure_totals)) {
				measure_totals[entry.name] = 0;
			}
			measure_totals[entry.name] += entry.duration;
		}

		const results = Object.entries(measure_totals).map((e) => {
			return [e[0], `${(e[1] / 1000).toFixed(4)}s`];
		});

		if (last_total_lines) {
			process.stdout.moveCursor(0, 0 - last_total_lines);
			process.stdout.clearLine(1);
		}

		last_total_lines = results.length + 4;

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
