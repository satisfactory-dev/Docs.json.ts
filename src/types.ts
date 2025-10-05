import type {
	PositiveIntegerOrZero,
} from '../JSON-Schema-TypeScript-CodeGen/src/types.ts';

export type semver_full<
	Major extends (
		PositiveIntegerOrZero<number>
	) = (
		PositiveIntegerOrZero<number>
	),
	Minor extends (
		PositiveIntegerOrZero<number>
	) = (
		PositiveIntegerOrZero<number>
	),
	Patch extends (
		PositiveIntegerOrZero<number>
	) = (
		PositiveIntegerOrZero<number>
	),
	Build extends (
		PositiveIntegerOrZero<number>
	) = (
		PositiveIntegerOrZero<number>
	),
> = `${Major}.${Minor}.${Patch}.${Build}`;
