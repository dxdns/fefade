import type { LinkType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import {
	ComponentPropsWithoutRef,
	CSSProperties,
	ElementType,
	forwardRef,
	JSX,
	PropsWithChildren,
	Ref
} from "react"
import styles from "@fefade/core/styles/Link.module.css"
import buttonStyles from "@fefade/core/styles/Button.module.css"

type AsProp<C extends ElementType> = {
	as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P) | "style"

type PolymorphicComponentProps<
	C extends ElementType,
	Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
	Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type Props<C extends ElementType> = PolymorphicComponentProps<
	C,
	LinkType<CSSProperties>
>

function LinkComponent<C extends ElementType = "a">(
	{
		className = "",
		pathname,
		hover,
		variant = "text",
		as,
		style,
		children,
		...rest
	}: Props<C>,
	ref: Ref<any>
) {
	const Component = as || "a"

	const target = (rest as any).href || (rest as any).to
	const isActive =
		target && pathname
			? pathname === target
			: (rest as Record<string, any>)["aria-current"] === "page"

	function getStyle() {
		return typeof style === "function" ? style({ isActive }) : style
	}

	return (
		<Component
			{...rest}
			ref={ref}
			className={classMapUtil(
				typeof className === "function" ? className({ isActive }) : className,
				[variant, buttonStyles],
				buttonStyles.button,
				styles.link,
				{
					[styles.hasHover]: Boolean(hover),
					[styles[hover!]]: Boolean(hover)
				}
			)}
			aria-current={isActive ? "page" : undefined}
			style={getStyle()}
		>
			{children}
		</Component>
	)
}

const Link = forwardRef(LinkComponent) as <C extends ElementType = "a">(
	props: Props<C> & { ref?: Ref<any> }
) => JSX.Element

export default Link
