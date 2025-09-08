import { BreakpointType } from "./breakpoint.types.js"

type BaseType = {
	operator: "min-width" | "max-width"
	size: BreakpointType | string
	node?: HTMLElement
}

export type MediaQueryType = [
	BaseType["operator"],
	BaseType["size"],
	BaseType["node"]?
]
