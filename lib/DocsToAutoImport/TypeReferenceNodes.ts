import {
	NodeExtraction,
} from './NodeExtraction';
import {
	Node,
	TypeReferenceNode,
} from 'typescript';

export class TypeReferenceNodes extends NodeExtraction<TypeReferenceNode> {
	protected extract(
		nodes: TypeReferenceNode[]
	): Node[] {
		return nodes.map(e => e.typeName);
	}
}
