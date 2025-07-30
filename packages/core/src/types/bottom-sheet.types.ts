import { VariantType } from "./variant.types.js"

export type BottomSheetType = {
	isOpen: boolean
	handleClose: () => void
	variant?: VariantType
}
