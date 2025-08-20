import AvatarComponent from "./Avatar.svelte"
import AvatarGroupComponent from "./AvatarGroup.svelte"

type AvatarComponentType = typeof AvatarComponent & {
	Group: typeof AvatarGroupComponent
}

const Avatar = AvatarComponent as any as AvatarComponentType
Avatar.Group = AvatarGroupComponent

export { Avatar as default }
