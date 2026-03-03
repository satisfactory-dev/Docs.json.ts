import {
	NodeExtraction,
} from './NodeExtraction.ts';
import type {
	ClassDeclaration,
	Node,
} from 'typescript';

export class ClassDeclarations extends NodeExtraction<ClassDeclaration> {
	protected extract(nodes: ClassDeclaration[]): Node[] {
		return nodes
			.map((e) => [
				e.members,
				e.heritageClauses || [],
				e.typeParameters || [],
				e.name ? [e.name] : [],
			])
			.flat(2);
	}
}
