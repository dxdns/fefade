import type { SizeType } from "./size.types.js"

export type BreakpointType = Exclude<SizeType, "xs"> | "2xl"
