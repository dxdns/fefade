import { StatusColorType } from "./color.types.js"
import { OverrideType } from "./override.types.js"
import { SizeType } from "./size.types.js"

export type BaseRangeInput = {
	color?: StatusColorType | "primary"
	value?: number
	icon?: string | SVGElement
	size?: SizeType
	showValue?: boolean
}

export type RangeInputType<T = {}> = OverrideType<BaseRangeInput, T>
