export interface SvgType {
	svgPath: string
	width?: number | string
	height?: number | string
	fill?: string
	className?: string
	style?: Partial<CSSStyleDeclaration> | string
	viewBox?: string
}
