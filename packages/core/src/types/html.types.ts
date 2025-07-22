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
