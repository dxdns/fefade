import type * as CSS from "csstype"

export type CSSKebabType = {
	[K in keyof CSS.PropertiesHyphen]?: CSS.PropertiesHyphen[K]
}
