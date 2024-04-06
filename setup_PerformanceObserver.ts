export function setup_PerformanceObserver()
{
	const measure_totals: {[key: string]: number} = {};

	const obs = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			if (!(entry.name in measure_totals)) {
				measure_totals[entry.name] = 0;
			}
			measure_totals[entry.name] += entry.duration;
		}

		console.table(
			Object.fromEntries(
				Object.entries(measure_totals).map((e) => {
					return [e[0], `${(e[1] / 1000).toFixed(4)}s`];
				})
			)
		);

		performance.clearMeasures();
	});
	obs.observe({entryTypes: ['measure'], buffered: true});
}
