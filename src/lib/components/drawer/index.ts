import DrawerComponent from "./Drawer.svelte"
import DrawerHeaderComponent from "./DrawerHeader.svelte"
import DrawerContentComponent from "./DrawerContent.svelte"
import DrawerOverlayComponent from "./DrawerOverlay.svelte"

type DrawerComponentType = typeof DrawerComponent & {
	Header: typeof DrawerHeaderComponent
	Content: typeof DrawerContentComponent
	Overlay: typeof DrawerOverlayComponent
}

const Drawer = DrawerComponent as unknown as DrawerComponentType
Drawer.Header = DrawerHeaderComponent
Drawer.Content = DrawerContentComponent
Drawer.Overlay = DrawerOverlayComponent

export { Drawer as default }
