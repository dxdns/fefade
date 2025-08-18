import { VariantType } from "./variant.types.js"

export type ModalType = {
	isOpen: boolean
	handleClose: () => void
	variant?: Exclude<VariantType, "text">
}
