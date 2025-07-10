export type VerticalPositionType = "top" | "bottom"
export type HorizontalPositionType = "left" | "right" | "center"

export type PositionType = `${VerticalPositionType}-${HorizontalPositionType}`

export type PositionNoCenterType =
	| VerticalPositionType
	| Exclude<HorizontalPositionType, "center">
