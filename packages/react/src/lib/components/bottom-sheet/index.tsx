import BottomSheetComponent from "./BottomSheet.js"
import BottomSheetContentComponent from "./BottomSheetContent.js"
import BottomSheetDragButtonComponent from "./BottomSheetDragButton.js"
import BottomSheetOverlayComponent from "../overlay/Overlay.js"

type BottomSheetComponentType = typeof BottomSheetComponent & {
	Content: typeof BottomSheetContentComponent
	DragButton: typeof BottomSheetDragButtonComponent
	Overlay: typeof BottomSheetOverlayComponent
}

const BottomSheet = BottomSheetComponent as any as BottomSheetComponentType
BottomSheet.Content = BottomSheetContentComponent
BottomSheet.DragButton = BottomSheetDragButtonComponent
BottomSheet.Overlay = BottomSheetOverlayComponent

export { BottomSheet as default }
