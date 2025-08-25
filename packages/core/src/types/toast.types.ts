import type { AlignmentType, StatusColorType } from "./index.js"

export interface ToastType {
	id: string
	message: string
	color?: StatusColorType
	duration?: number
	position?: AlignmentType
	isClosable?: boolean
}
