import {
	NodeExtraction,
} from './NodeExtraction';
import {
	Node, TupleTypeNode,
} from 'typescript';

export class TupleTypeNodes extends NodeExtraction<TupleTypeNode> {
	public extract(nodes: TupleTypeNode[]): Node[] {
		return nodes.map((e) => e.elements).flat();
	}
}
