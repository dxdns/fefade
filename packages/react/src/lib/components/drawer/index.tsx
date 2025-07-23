import DrawerComponent from "./Drawer.js"
import DrawerHeaderComponent from "./DrawerHeader.js"
import DrawerContentComponent from "./DrawerContent.js"
import DrawerOverlayComponent from "../overlay/Overlay.js"

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
