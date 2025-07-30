import { VariantType } from "./variant.types.js"

export type BottomSheetType = {
	isOpen: boolean
	handleClose: () => void
}

export type BottomSheetDragButtonType = {
	variant?: VariantType
}
