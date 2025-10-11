import type {
	PositiveIntegerOrZero,
} from '@signpostmarv/json-schema-typescript-codegen';

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
