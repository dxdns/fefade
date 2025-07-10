export type ActionType<T> = (
	node: T,
	params?: unknown
) => {
	update?: (params: unknown) => void
	destroy?: () => void
} | void

export type ActionEntryType<T> = [ActionType<T>, unknown]
