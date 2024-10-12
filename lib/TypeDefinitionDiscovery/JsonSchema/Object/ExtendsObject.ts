import ts, {
	IntersectionTypeNode,
	LiteralTypeNode,
	TypeReferenceNode,
} from 'typescript';
import {
	RawData as ObjectTypeRawData,
	schema as ObjectTypeSchema,
} from '../ObjectType';
import {
	adjust_class_name,
} from '../../../TsFactoryWrapper';
import {
	TypeDefinitionDiscovery,
} from '../../../TypeDefinitionDiscovery';
import {
	GeneratorDoesDiscovery,
} from '../../GeneratorDoesDiscovery';
import {
	common_ref,
	local_ref,
} from '../../../StringStartsWith';

type RawData =
	& ObjectTypeRawData
	& {properties: {[key: string]: unknown}, $ref: local_ref<string>};

type Type =
	| TypeReferenceNode
	| (
		& IntersectionTypeNode
		& {types: [
			TypeReferenceNode,
			LiteralTypeNode,
		]}
	);

export class ExtendsObject extends GeneratorDoesDiscovery<RawData, Type>
{
	constructor(
		supported_refs: string[],
		discovery:TypeDefinitionDiscovery,
	) {
		const {
			type,
			additionalProperties,
			properties,
			...rest
		} = ObjectTypeSchema;

		super(
			{
				...rest,
				type,
				additionalProperties,
				required: ['$ref'],
				properties: {
					...properties,
					$ref: {type: 'string', enum: supported_refs},
					unevaluatedProperties: {type: 'boolean', const: false},
				},
			},
			discovery,
		);
	}

	generate(): (raw_data: RawData) => Type {
		return (raw_data: RawData): Type => {
			const {
				$ref,
				properties,
				...rest
			} = raw_data;

			const reference_type = this.create_reference_type($ref);

			if (undefined === properties) {
				return reference_type;
			}

			return ts.factory.createIntersectionTypeNode([
				reference_type,
				this.discovery.find({
					...rest,
					properties,
				}),
			]) as Type;
		};
	}

	protected create_reference_type(
		$ref: local_ref<string>|common_ref<string>,
	): TypeReferenceNode {
		const ref_substring = $ref.startsWith('common.schema.json#/$defs/')
			? `common_type__${$ref.substring(26)}`
			: $ref.substring(8);

		return ts.factory.createTypeReferenceNode(
			adjust_class_name(`${ref_substring}__type`),
		);
	}
}
