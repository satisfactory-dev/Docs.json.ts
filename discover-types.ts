import schema from './schema/update8.schema.json' assert {type: 'json'};
import {
	TypesDiscovery,
} from './lib/TypesDiscovery';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from './lib/DocsValidation';
import {
	TypeDefinitionDiscovery,
} from './lib/TypeDefinitionDiscovery';
import {
	ObjectType,
} from './lib/TypeDefinitionDiscovery/JsonSchema/ObjectType';
import {
	ExtendsObject,
} from './lib/TypeDefinitionDiscovery/JsonSchema/Object/ExtendsObject';
import {
	typed_object_string,
} from './lib/TypeDefinitionDiscovery/CustomParsingTypes/typed_object_string';
import {
	oneOf_or_anyOf,
} from './lib/TypeDefinitionDiscovery/JsonSchema/oneOf_or_anyOf';
import {
	typed_array_string,
} from './lib/TypeDefinitionDiscovery/CustomParsingTypes/typed_array_string';
import {
	ArrayType,
} from './lib/TypeDefinitionDiscovery/JsonSchema/ArrayType';

const ajv = new Ajv({
	verbose: true,
});

configure_ajv(ajv);

const bar = new TypeDefinitionDiscovery(
	ajv,
	schema,
	[
		...TypesDiscovery.standard_jsonschema_discovery(schema),
		...TypesDiscovery.custom_parsing_types(schema),
	],
	[
		...TypeDefinitionDiscovery.standard_jsonschema_discovery(ajv),
		...TypeDefinitionDiscovery.custom_parsing_discovery(ajv),
	],
);
bar.add_candidates(
	new ObjectType(ajv, bar),
	new ArrayType(ajv, bar),
	new ExtendsObject(
		ajv,
		(await bar.types_discovery.discover_types()).discovered_types,
		bar
	),
	new typed_object_string(
		ajv,
		(await bar.types_discovery.discover_types()).discovered_types,
		bar
	),
	new typed_array_string(ajv, bar),
	new oneOf_or_anyOf(ajv, bar),
);

const result = await bar.discover_type_definitions();

process.stdout.write(
	`${
		JSON.stringify(result.missing_classes, null, '\t')
	}\n`
);
console.table({
	'Found Types': Object.keys(result.found_types).length,
	'Missing Types': result.missing_types.length,
	'Found Classes': result.found_classes.length,
	'Missing Classes': result.missing_classes.length,
});
