import {
	NodeExtraction,
} from './NodeExtraction.ts';
import type {
	Node,
	TupleTypeNode,
} from 'typescript';

export class TupleTypeNodes extends NodeExtraction<TupleTypeNode> {
	public extract(nodes: TupleTypeNode[]): Node[] {
		return nodes.map((e) => e.elements).flat();
	}
}
