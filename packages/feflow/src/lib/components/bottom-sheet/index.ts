import BottomSheetComponent from "./BottomSheet.svelte"
import BottomSheetOverlayComponent from "../overlay/Overlay.svelte"

type BottomSheetComponentType = typeof BottomSheetComponent & {
	Overlay: typeof BottomSheetOverlayComponent
}

const BottomSheet = BottomSheetComponent as unknown as BottomSheetComponentType
BottomSheet.Overlay = BottomSheetOverlayComponent

export { BottomSheet as default }
