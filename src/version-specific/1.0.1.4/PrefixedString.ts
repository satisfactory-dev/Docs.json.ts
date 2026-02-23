import type {
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
} from 'regexp.escape/auto';

import type {
	mode,
} from '../0.3.7.7/PrefixedString.ts';

import type {
	system_prefix,
} from '../0.8.3.3/PrefixedString.ts';
import {
	PrefixedString as PrefixedString__update8,
} from '../0.8.3.3/PrefixedString.ts';

export class PrefixedString<
	Mode extends mode,
	Prefix extends Exclude<string, ''>,
	SystemPrefix extends system_prefix,
	VersionSpecificDefault extends Exclude<mode, 'version_specific_default'>,
	FirstPath extends Exclude<string, ''> = 'FactoryGame',
> extends PrefixedString__update8<
		Mode,
		Prefix,
		SystemPrefix,
		VersionSpecificDefault,
		FirstPath
	> {
	constructor(
		options: SchemalessTypeOptions,
		mode: Mode,
		system_prefix: SystemPrefix,
		version_specific_default: VersionSpecificDefault,
	) {
		super(
			options,
			mode,
			system_prefix,
			version_specific_default,
		);
	}
}
