import { StatusColorType } from "./color.types.js"
import { SizeType } from "./size.types.js"

export type CheckboxType = {
	label?: string
	size?: SizeType
	color?: StatusColorType | "secondary"
}
