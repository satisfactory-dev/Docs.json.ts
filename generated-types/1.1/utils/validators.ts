export type StringStartsWith<prefix extends string> = keyof {
	[pseudo_key in keyof {
		[key: string]: unknown;
	} as pseudo_key extends string ? `${prefix}${pseudo_key}` : never]: string;
};

export type StringPassedRegExp<
	pattern extends string,
	T extends string = string,
> = T & {
	[pseudo_key in pattern]: never;
};

export class UnrealEngineString<
	left extends string = string,
	right extends string = string,
> {
	readonly left: left;
	readonly right: right;
	protected constructor(left: left, right: right) {
		this.left = left;
		this.right = right;
	}
	static fromString<
		left extends string = string,
		right extends string = string,
	>(value: string): UnrealEngineString<left, right> {
		if (value.startsWith('"') && value.endsWith('"'))
			value = value.substring(1, value.length - 1);
		const result = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/.exec(value);
		if (!result) throw new Error(`Not an UnrealEngineString (${value})`);
		return new UnrealEngineString<left, right>(
			result[1] as left,
			(result[2] || result[3]) as right
		);
	}
}
