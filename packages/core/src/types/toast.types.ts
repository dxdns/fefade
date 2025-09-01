import type { AlignmentType, StatusColorType } from "./index.js"

export interface ToastStateType {
	id: string
	message: string
	color?: StatusColorType
	duration?: number
	position?: AlignmentType
	isClosable?: boolean
	withProgressLoader?: boolean
}

export interface ToastType extends ToastStateType {
	handleClose?: () => void
}
