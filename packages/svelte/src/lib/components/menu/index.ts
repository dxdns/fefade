import MenuComponent from "./Menu.svelte"
import MenuItemComponent from "./MenuItem.svelte"

type MenuComponentType = typeof MenuComponent & {
	Item: typeof MenuItemComponent
}

const Menu = MenuComponent as any as MenuComponentType
Menu.Item = MenuItemComponent

export { Menu as default }
