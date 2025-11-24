import {
	adjust_name_default,
	adjust_name_finisher,
} from '@signpostmarv/json-schema-typescript-codegen';

declare global {
	interface ObjectConstructor {
		fromEntries<
			Result extends {[key: string]: unknown} = {[key: string]: unknown},
		>(
			entries: [keyof Result, Result[keyof Result]][],
		): Result;
		fromEntries<
			T,
		>(
			entries: Iterable<readonly [PropertyKey, T]>
		): { [k: string]: T };
	}
}

export type filenames_by_$id = {
	[key: string]: {
		types: `./${string}.ts`,
		data: `./${string}.ts`,
	},
};

export class FilenameAdjuster<
	FilenamesById extends filenames_by_$id = filenames_by_$id,
> {
	#filenames_by_$id: FilenamesById;

	#adjusted_names_for_ids: {[key in keyof FilenamesById]: string};

	#adjusted_names_for_ids_entries: [keyof FilenamesById & string, string][];

	current_id: keyof FilenamesById;

	constructor(
		filenames_by_$id: FilenamesById,
		current_id: keyof FilenamesById,
	) {
		this.#filenames_by_$id = filenames_by_$id;
		this.current_id = current_id;
		this.#adjusted_names_for_ids = Object.fromEntries<{
			[k in keyof FilenamesById]: string
		}>(
			Object.keys(filenames_by_$id).map((
				$id,
			): [
				keyof FilenamesById,
				string,
			] => [
				$id,
				adjust_name_finisher(
					adjust_name_default($id),
				),
			]),
		);
		this.#adjusted_names_for_ids_entries = Object.entries(
			this.#adjusted_names_for_ids,
		);
	}

	adjust_name_to_data_filename(name: string): `./${string}.ts` {
		const maybe_matched = this.#adjusted_names_for_ids_entries.find(
			([, maybe]) => name.startsWith(maybe),
		);

		const matched_key = (maybe_matched || [this.current_id])[0];

		return this.#filenames_by_$id[matched_key].data;
	}

	adjust_name_to_type_filename(name: string): `./${string}.ts` {
		const maybe_matched = this.#adjusted_names_for_ids_entries.find(
			([, maybe]) => name.startsWith(maybe),
		);

		const matched_key = (maybe_matched || [this.current_id])[0];

		return this.#filenames_by_$id[matched_key].types;
	}
}
