export interface SvgType {
	svgPath: string
	width?: string
	height?: string
	fill?: string
	className?: string
	style?: Partial<CSSStyleDeclaration> | string
	viewBox?: string
}
