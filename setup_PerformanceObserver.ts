import setup from '@signpostmarv/setup-performance-observer';

export function setup_PerformanceObserver(clear_lines = true)
{
	const tweak_order_by_prefix = [
		'bootstrap',
		'ajv compile',
		'TypeDefinitionWriter.',
		'Docs.json',
		'ObjectConverter.',
		'Ref.',
		'TypedStringConverter.',
	];

	const instance = new setup({
		clear_lines,
		tweak_order_by_prefix,
	});

	const obs = instance.obs;

	obs.observe({entryTypes: ['measure'], buffered: true});

	return () => instance.measured_totals;
}
