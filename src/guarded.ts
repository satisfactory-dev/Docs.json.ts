import type {
	semver_full,
} from './types.ts';

export function semver(value: string): semver_full {
	if (!/^\d+.\d+.\d+.\d+$/.test(value)) {
		throw new TypeError('value is not a supported semver!');
	}

	return value as semver_full;
}
