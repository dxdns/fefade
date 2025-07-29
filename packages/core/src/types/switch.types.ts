import { SizeType } from "./size.types.js"

export type SwitchType = {
	size?: SizeType
	indicatorColor?:
		| boolean
		| {
				unchecked?: string
				checked?: string
		  }
}
