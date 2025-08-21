import AvatarComponent from "./Avatar.js"
import AvatarGroupComponent from "./AvatarGroup.js"

type AvatarComponentType = typeof AvatarComponent & {
	Group: typeof AvatarGroupComponent
}

const Avatar = AvatarComponent as any as AvatarComponentType
Avatar.Group = AvatarGroupComponent

export { Avatar as default }
