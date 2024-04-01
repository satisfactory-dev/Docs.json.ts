import ts, {
	IntersectionTypeNode,
	LiteralTypeNode,
	TypeReferenceNode,
} from 'typescript';
import {
	RawData as ObjectTypeRawData,
	schema as ObjectTypeSchema,
} from '../ObjectType';
import Ajv from 'ajv/dist/2020';
import {
	adjust_class_name,
} from '../../../TsFactoryWrapper';
import {
	TypeDefinitionDiscovery,
} from '../../../TypeDefinitionDiscovery';
import {
	GeneratorDoesDiscovery,
} from '../../GeneratorDoesDiscovery';

type RawData =
	& ObjectTypeRawData
	& {properties: {[key: string]: unknown}, $ref: string};

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
		ajv:Ajv,
		supported_refs: string[],
		discovery:TypeDefinitionDiscovery
	) {
		const {
			type,
			additionalProperties,
			properties,
			...rest
		} = ObjectTypeSchema;

		super(
			ajv,
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
			discovery
		);
	}

	generate(): (raw_data: RawData) => Type {
		return (raw_data: RawData): Type => {
			const {
				$ref,
				properties,
				...rest
			} = raw_data;

			const reference_type = ts.factory.createTypeReferenceNode(
				adjust_class_name(`${$ref.substring(14)}__type`)
			);

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
}
