import BottomSheetComponent from "./BottomSheet.js"
import BottomSheetOverlayComponent from "../overlay/Overlay.js"

type BottomSheetComponentType = typeof BottomSheetComponent & {
	Overlay: typeof BottomSheetOverlayComponent
}

const BottomSheet = BottomSheetComponent as any as BottomSheetComponentType
BottomSheet.Overlay = BottomSheetOverlayComponent

export { BottomSheet as default }
