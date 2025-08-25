import PhoneComponent from "./Phone.svelte"
import PhoneNotchComponent from "./PhoneNotch.svelte"

type PhoneComponentType = typeof PhoneComponent & {
	Notch: typeof PhoneNotchComponent
}

const Phone = PhoneComponent as any as PhoneComponentType
Phone.Notch = PhoneNotchComponent

export { Phone as default }
