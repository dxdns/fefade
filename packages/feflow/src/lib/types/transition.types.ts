import type { TransitionConfig } from "svelte/transition"

type TransitionFn = (node: Element, params?: any) => TransitionConfig

export interface TransitionEntry {
	in?: [TransitionFn, any?]
	out?: [TransitionFn, any?]
}
