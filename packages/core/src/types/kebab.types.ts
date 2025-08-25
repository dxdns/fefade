export type KebabType<S extends string> = S extends `${infer T}${infer U}`
	? U extends Uncapitalize<U>
		? `${Lowercase<T>}${KebabType<U>}`
		: `${Lowercase<T>}-${KebabType<Uncapitalize<U>>}`
	: S
