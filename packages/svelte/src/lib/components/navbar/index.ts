import NavbarComponent from "./Navbar.svelte"
import NavbarItemComponent from "./NavbarItem.svelte"
import NavbarTogglerComponent from "./NavbarToggler.svelte"

type NavbarComponentType = typeof NavbarComponent & {
	Item: typeof NavbarItemComponent
	Toggler: typeof NavbarTogglerComponent
}

const Navbar = NavbarComponent as unknown as NavbarComponentType
Navbar.Item = NavbarItemComponent
Navbar.Toggler = NavbarTogglerComponent

export { Navbar as default }
