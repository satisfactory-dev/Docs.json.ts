import {
	NodeExtraction,
} from './NodeExtraction';
import ts, {
	BooleanLiteral,
	LiteralExpression,
	LiteralTypeNode,
	NullLiteral,
	PrefixUnaryExpression,
	EntityName,
} from 'typescript';
import {
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

export class LiteralTypeNodes extends NodeExtraction<LiteralTypeNode> {
	protected extract(nodes: LiteralTypeNode[]): EntityName[] {
		if (nodes.length < 1) {
			return [];
		}

		const types = nodes.map((e) => e.literal);
		const others: (
			| NullLiteral
			| BooleanLiteral
			| LiteralExpression
			| PrefixUnaryExpression
		)[] = [];

		for (const type of types) {
			if (
				type.kind !== ts.SyntaxKind.NullKeyword
				&& type.kind !== ts.SyntaxKind.StringLiteral
			) {
				others.push(type);
			}
		}

		if (others.length > 0) {
			throw new UnexpectedlyUnknownNoMatchError(
				others,
				'Unsupported types found!'
			);
		}

		return [];
	}
}
