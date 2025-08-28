import type { AlignmentType, StatusColorType } from "./index.js"

export interface ToastStateType {
	id: string
	message: string
	color?: StatusColorType
	duration?: number
	position?: AlignmentType
	isClosable?: boolean
}

export interface ToastType extends Omit<ToastStateType, "id"> {
	handleClose?: () => void
}
