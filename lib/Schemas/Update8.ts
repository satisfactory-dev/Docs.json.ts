import schema from '../../schema/update8.schema.json' assert {type: 'json'};
import {Update8TypeNodeGeneration} from './Update8/TypeNodeGeneration';
import {UnexpectedlyUnknownNoMatchError} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

declare type object_with_ref = {$ref: string};

declare type NativeClass__Classes__items =
	| boolean
	| object_with_ref
	| {anyOf: [object_with_ref, ...object_with_ref[]]}
	| {oneOf: [object_with_ref, ...object_with_ref[]]};

const empty_object = {};

export type NativeClass = {
	type: string;
	additionalProperties: boolean;
	properties: {
		$ref: '#/definitions/NativeClass';
		Classes:
			| ({
					type: string;
					minItems: number;
					items: NativeClass__Classes__items;
			} & ({maxItems: number} | typeof empty_object))
			| {
					type: string;
					minItems: number;
					maxItems: number;
					prefixItems: [object_with_ref, ...object_with_ref[]];
					items: NativeClass__Classes__items;
			};
	};
};

export type definition_key = keyof typeof schema.definitions;

export function get_dependency_tree(ref: definition_key): definition_key[] {
	const ancestry: definition_key[] = [ref];

	let checking = schema.definitions[ref];

	while (
		'$ref' in checking &&
		checking['$ref'].startsWith('#/definitions/')
	) {
		ancestry.push(check_ref(checking['$ref'].substring(14)));

		const next_reference_name: string = checking['$ref'].substring(14);

		if (next_reference_name in schema.definitions) {
			checking = schema.definitions[check_ref(next_reference_name)];
		}
	}

	return ancestry;
}

export function is_ref(ref: string): ref is definition_key & typeof ref {
	return ref in schema.definitions;
}

export function check_ref(ref: string): definition_key & typeof ref {
	if (!is_ref(ref)) {
		throw new UnexpectedlyUnknownNoMatchError(
			{ref},
			`not in the update 8 schema!`
		);
	}

	return ref as definition_key & typeof ref;
}

export {schema, Update8TypeNodeGeneration};
