import { PositionNoCenterType } from "./position.types.js"

export type DrawerType = {
	isOpen: boolean
	variant?: "permanent" | "temporary"
	position?: PositionNoCenterType
}
