import {
	NodeExtraction,
} from './NodeExtraction';
import {
	ArrayTypeNode, Node,
} from 'typescript';

export class ArrayTypeNodes extends NodeExtraction<ArrayTypeNode> {
	protected extract(nodes: ArrayTypeNode[]): Node[] {
		return nodes.map((e) => e.elementType);
	}
}
