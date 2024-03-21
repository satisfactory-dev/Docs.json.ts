import {
	NodeExtraction,
} from './NodeExtraction';
import ts, {
	Node, TypeElement, TypeLiteralNode,
} from 'typescript';
import {
	UnexpectedlyUnknown,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

export class TypeLiteralNodes extends NodeExtraction<TypeLiteralNode> {
	protected extract(nodes: TypeLiteralNode[]): Node[] {
		if (nodes.length < 1) {
			return [];
		}

		const elements = nodes.map((e) => e.members).flat();
		const other_elements: TypeElement[] = [];
		const types: Node[] = [];

		for (const element of elements) {
			if (ts.isPropertySignature(element) && !!element.type) {
				types.push(element.type);
			} else if (ts.isIndexSignatureDeclaration(element)) {
				types.push(
					...[
						element.type,
						...(element.typeParameters || []),
						...element.parameters,
					].filter(
						(maybe): maybe is Exclude<typeof maybe, undefined> =>
							!!maybe
					)
				);
			} else {
				other_elements.push(element);
			}
		}

		if (other_elements.length) {
			throw new UnexpectedlyUnknown(
				other_elements,
				'Unsupported elements found!'
			);
		}

		return types;
	}
}
