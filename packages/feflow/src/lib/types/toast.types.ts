import type { PositionType, StatusColorType } from "./index.js"

export interface ToastType {
	id: string
	message: string
	color?: StatusColorType
	duration?: number
	position?: PositionType
	isClosable?: boolean
}
