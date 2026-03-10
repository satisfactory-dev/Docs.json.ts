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

export type NativeClass<
	T0 extends string,
	T1 extends [
		{[key: string]: unknown} & {ClassName: `${string}_C`},
		...{[key: string]: unknown} & {ClassName: `${string}_C`}[],
	],
> = {
	NativeClass: `/Script/CoreUObject.Class'/Script/FactoryGame.${T0}'`,
	Classes: T1,
};
