export type HTMLAttrAnchorTarget =
	| "_self"
	| "_blank"
	| "_parent"
	| "_top"
	| (string & {})

export type HTMLAttrAnchor = {
	target?: HTMLAttrAnchorTarget
	href?: string
	download?: string
}

export type HTMLTagTextType =
	| "p"
	| "span"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "div"

export type HTMLTagMap = {
	a: HTMLAnchorElement
	p: HTMLParagraphElement
	h1: HTMLHeadingElement
	h2: HTMLHeadingElement
	h3: HTMLHeadingElement
	h4: HTMLHeadingElement
	h5: HTMLHeadingElement
	h6: HTMLHeadingElement
	div: HTMLDivElement
	span: HTMLSpanElement
}
