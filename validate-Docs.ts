import Ajv from 'ajv/dist/2020';
import schema from './schema/update8.schema.json' assert {type: 'json'};
import data from './data/Docs.utf8.json' assert {type: 'json'};
import {default_config} from './lib/DocsValidation';

default_config.ajv = new Ajv({
	verbose: true,
});

const validateDocs = default_config.ajv.compile(schema);

if (!validateDocs(data)) {
	console.error(validateDocs.errors);
}
