import {
	NodeExtraction,
} from './NodeExtraction';
import {
	MethodDeclaration, Node,
} from 'typescript';

export class MethodDeclarations extends NodeExtraction<MethodDeclaration> {
	public extract(nodes: MethodDeclaration[]): Node[] {
		return nodes
			.map((e) => [
				...e.parameters,
				e.type,
				...(e.typeParameters || []),
				...(e.body?.statements || []),
			])
			.flat()
			.filter(
				(maybe): maybe is Exclude<typeof maybe, undefined> => !!maybe,
			);
	}
}
