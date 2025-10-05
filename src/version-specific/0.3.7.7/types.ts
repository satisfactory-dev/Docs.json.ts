export type NativeClass<
	T1 extends `/Script/${string}` = `/Script/${string}`,
	T2 extends {[key: string]: unknown} = {[key: string]: unknown},
> = {
	NativeClass: `Class'${T1}'`,
	Classes: [T2, ...T2[]],
};
