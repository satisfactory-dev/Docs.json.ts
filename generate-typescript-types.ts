import schema from './schema/update8.schema.json' assert {type: 'json'};
import {
	TypesGeneration,
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
	GenerationMatch, ImportTracker,
} from './lib/TypesGeneration';
import ts from 'typescript';
import {glob,} from 'glob';
import {mkdir, unlink, writeFile} from "node:fs/promises";
import {dirname} from "path";
import {fileURLToPath} from "url";
import {
	target_files as color_target_files,
	generators as color_generators,
} from './lib/TypesGeneration/color';
import {
	target_files as enum_target_files,
	generators as enum_generators,
} from './lib/TypesGeneration/enum';
import {
	target_files as validator_target_files,
	generators as validator_generators,
} from './lib/TypesGeneration/validators';
import {
	target_files as vector_target_files,
	generators as vector_generators,
} from './lib/TypesGeneration/vectors';
import * as prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

const target_files:{[key: string]: string} = Object.assign(
	{},
	enum_target_files,
	color_target_files,
	validator_target_files,
	vector_target_files,
);

const generators:TypesGeneration<any, any>[] = [
	...color_generators,
	...enum_generators,
	...validator_generators,
	...vector_generators,
];

const supported_conversions:GenerationMatch<object>[] = Object.entries(schema.definitions).filter((e) => {
	for (const generator of generators) {
		if (generator.test(generator instanceof TypesGenerationFromSchema ? e[1] : e[0])) {
			return true;
		}
	}

	return false;
}).map(e => {
	return new GenerationMatch<object>(e[0], e[1], generators.find((maybe) => {
		return maybe.test(maybe instanceof TypesGenerationFromSchema ? e[1] : e[0]);
	}) as TypesGenerationFromSchema<object>|TypesGenerationMatchesReferenceName<object, any>);
});

const supported_conversion_names = supported_conversions.map(e => e.definition);

const unsupported_conversions = Object.keys(schema.definitions).filter(
	(maybe) => !supported_conversion_names.includes(maybe)
);

console.log('Conversions');
console.table({
	'Supported': supported_conversions.length,
	'Unsupported': unsupported_conversions.length,
});

const missing_target_files = supported_conversions.map((match) => {
	return match.definition;
}).filter((maybe) => !(maybe in target_files));

if (missing_target_files.length) {
	console.log(
		'Missing target files:',
		missing_target_files
	);
}

if (unsupported_conversions.length) {
	console.log(
		'Unsupported Conversions:',
		unsupported_conversions
	);
}

const printer = ts.createPrinter({
	newLine: ts.NewLineKind.LineFeed,
});

const files:{[key: string]: ts.Node[]} = {};

for (const match of supported_conversions) {
	if (!(match.definition in target_files)) {
		throw new Error(`no target file found for ${match.definition}`);
	}

	const target_file = target_files[match.definition];

	if (!(target_file in files)) {
		files[target_file] = [];
	}

	files[target_file].push(match.generation.generate(match.data, match.definition));
}

const cleanup = await glob(`${__dirname}/generated-types/update8/**/*.ts`);

for (const remove of cleanup) {
	await unlink(remove);
}

for (const entry of Object.entries(files)) {
	const result_file = ts.createSourceFile(
		entry[0],
		'',
		ts.ScriptTarget.Latest,
		false,
		ts.ScriptKind.TS
	);

	const nodes = [
		...ImportTracker.generate_imports(entry[0]),
		...entry[1]
	];

	const file_name = `${__dirname}/generated-types/update8/${entry[0]}`;
	const dir = dirname(file_name);

	await mkdir(dir, {
		recursive: true,
	});

	await writeFile(
		file_name,
		await prettier.format(
			nodes.map((node) => {
				return printer.printNode(ts.EmitHint.Unspecified, node, result_file)
			}).join('\n\n'),
			{
				parser: 'typescript',
				singleQuote: true,
				trailingComma: 'es5',
				arrowParens: 'always',
				endOfLine: 'lf',
				useTabs: true,
			}
		)
	);
}
