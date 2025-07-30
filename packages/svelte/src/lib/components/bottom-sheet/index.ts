import BottomSheetComponent from "./BottomSheet.svelte"
import BottomSheetContentComponent from "./BottomSheetContent.svelte"
import BottomSheetDragButtonComponent from "./BottomSheetDragButton.svelte"
import BottomSheetOverlayComponent from "../overlay/Overlay.svelte"

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
