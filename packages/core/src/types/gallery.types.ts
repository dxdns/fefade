import { OverrideType } from "./override.types.js"

type TextWithLinesType = {
	text: string
	lines?: number
}

/** @deprecated Replaced by `children` */
export type GalleryCaptionType = {
	label: TextWithLinesType
	description?: TextWithLinesType
	style?: string
}

export type GalleryItemType<
	T = GalleryCaptionType,
	V = { width?: number; height?: number }
> = OverrideType<
	{
		/** @deprecated Replaced by `children` */
		caption?: T
		viewer?: { width?: number; height?: number }
	},
	{
		viewer?: V
	}
>
