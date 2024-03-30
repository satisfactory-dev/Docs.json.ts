/**
 * Created due to annoyance over array.prototype.map()
 *	forcing [unknown, ...unknown[]] to unknown[]
 */
export function non_empty_map<
	ItemInput = unknown,
	ItemOutput = unknown,
	Input extends [ItemInput, ...ItemInput[]] = [ItemInput, ...ItemInput[]],
	Output extends [
		ItemOutput,
		...ItemOutput[],
	] = [
		ItemOutput,
		...ItemOutput[],
	],
>(array:Input, map:(item:ItemInput) => ItemOutput) : Output {
	return array.map(map) as Output;
}

// from https://stackoverflow.com/a/72041609/1498831
type NonEmpty<T> = keyof T extends never ? never : T;

export function non_empty_keys<
	T extends {[key: string]: unknown} = {[key: string]: unknown}
>(
	object:NonEmpty<T>
) : [string, ...string[]] {
	return Object.keys(object) as [string, ...string[]];
}

export function require_non_empty_array<
	Item = unknown,
	NotEmpty = [Item, ...Item[]]
>(maybe:Item[]): NotEmpty {
	if (maybe.length < 1) {
		throw new Error('Array is empty!')
	}

	return maybe as NotEmpty;
}

// because typescript doesn't do this automatically
export function object_keys<
	T extends {[key: string]: unknown} = {[key: string]: unknown}
>(
	object: T
) : (keyof T)[] {
	return Object.keys(object);
}
