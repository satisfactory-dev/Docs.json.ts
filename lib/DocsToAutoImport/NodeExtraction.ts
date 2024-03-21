import ts, {
	EntityName, Node,
} from 'typescript';
import {
	EntityName_array_from_Node_array,
} from './from_Node_array';

export abstract class NodeExtraction<T extends Node> {
	readonly results: EntityName[] = [];

	public constructor(nodes: T[]) {
		if (nodes.length < 1) {
			return;
		}

		const sub_nodes: Node[] = [];

		for (const node of this.extract(nodes)) {
			if (ts.isEntityName(node)) {
				this.results.push(node);
			} else {
				sub_nodes.push(node);
			}
		}

		this.results.push(...EntityName_array_from_Node_array(sub_nodes));
	}

	protected abstract extract(nodes: T[]): Node[];
}
