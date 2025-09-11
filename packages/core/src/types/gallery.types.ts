import { OverrideType } from "./override.types.js"

export type GalleryItemType<
	C = string,
	V = { width?: number; height?: number }
> = OverrideType<
	{
		captionStyle?: C
		viewer?: { width?: number; height?: number }
	},
	{
		viewer?: V
	}
>
