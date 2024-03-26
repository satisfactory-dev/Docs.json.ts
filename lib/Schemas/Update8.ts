import {
	local_ref,
} from '../StringStartsWith';

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
		$ref: local_ref<'NativeClass'>;
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
