import {
	NodeExtraction,
} from './NodeExtraction';
import {
	PropertyDeclaration, Node,
} from 'typescript';

export class PropertyDeclarations extends NodeExtraction<PropertyDeclaration> {
	protected extract(nodes: PropertyDeclaration[]): Node[] {
		return nodes
			.map((e) => [e.type, e.initializer])
			.flat()
			.filter(
				(maybe): maybe is Exclude<typeof maybe, undefined> => !!maybe
			);
	}
}
