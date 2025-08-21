import { SizeType } from "./size.types.js"

/**
 * Type definition for Avatar component props.
 * This type outlines the structure for the Avatar component's input properties.
 */
export type AvatarType = {
	/**
	 * Optional text that serves as a fallback when the avatar image is unavailable.
	 * This could be initials or a placeholder text.
	 *
	 * @type {string}
	 */
	textFallback?: string

	/**
	 * Optional width of the avatar. Can be specified using any valid CSS unit
	 * (e.g., '100px', '10em'). Default value is not set, so it should be passed
	 * explicitly if needed.
	 *
	 * @type {string}
	 */
	width?: string

	/**
	 * Optional height of the avatar. Can be specified using any valid CSS unit
	 * (e.g., '100px', '10em'). Default value is not set, so it should be passed
	 * explicitly if needed.
	 *
	 * @type {string}
	 */
	height?: string

	/**
	 * Optional predefined size for the avatar, using a `SizeType` (e.g., 'small',
	 * 'medium', 'large'). If provided, this size will override the width and height
	 * props.
	 *
	 * @type {SizeType}
	 */
	size?: SizeType

	/**
	 * Optional flag to indicate whether the avatar is part of a group of avatars.
	 * If set to true, the avatar will be styled differently to indicate it’s grouped
	 * with others.
	 *
	 * @type {boolean}
	 */
	grouped?: boolean
}
