export type OverrideType<Base, Extension> = Omit<Base, keyof Extension> &
	Extension
