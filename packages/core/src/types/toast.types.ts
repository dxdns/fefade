import type { AlignmentType, StatusColorType } from "./index.js"

export interface ToasterType {
	message: string
	color?: StatusColorType
	duration?: number
	position?: AlignmentType
	isClosable?: boolean
	withProgressLoader?: boolean
}

export interface ToastType extends ToasterType {
	id: string
}

export type ToastStateType = ToastType & {
	remaining: number
	timer?: number
	start: number
	paused: boolean
}

export type ToastInputType = Omit<Partial<ToastType>, "id">
