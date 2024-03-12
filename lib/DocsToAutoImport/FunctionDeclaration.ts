import {NodeExtraction} from './NodeExtraction';
import {
	FunctionDeclaration,
	Node,
} from 'typescript';

export class FunctionDeclarations extends NodeExtraction<FunctionDeclaration> {
	public extract(
		nodes: FunctionDeclaration[]
	): Node[] {
		return nodes
			.map(e => [
				e.name,
				...e.parameters,
				e.type,
				...(e.typeParameters || []),
				...(e.body?.statements || [])
			])
			.flat()
			.filter((maybe) : maybe is Exclude<typeof maybe, undefined> => !!maybe);
	}
}
