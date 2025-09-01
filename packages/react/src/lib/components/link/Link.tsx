import type { LinkType } from "@feflow-ui/core/types"
import { classMapUtil } from "@feflow-ui/core/utils"
import {
	ComponentPropsWithoutRef,
	ElementType,
	forwardRef,
	JSX,
	PropsWithChildren,
	Ref
} from "react"
import styles from "@feflow-ui/core/styles/Link.module.css"

type AsProp<C extends ElementType> = {
	as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProps<
	C extends ElementType,
	Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
	Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type Props<C extends ElementType> = PolymorphicComponentProps<C, LinkType>

function LinkComponent<C extends ElementType = "a">(
	{
		className = "",
		pathname,
		hoverUnderline,
		hover,
		as,
		children,
		...rest
	}: Props<C>,
	ref: Ref<any>
) {
	const Component = as || "a"

	const target = (rest as any).href || (rest as any).to
	const isActive = pathname === target

	return (
		<Component
			{...rest}
			ref={ref}
			className={classMapUtil(
				typeof className === "function" ? className({ isActive }) : className,
				styles.link,
				{
					[styles.hasHover]: hover || hoverUnderline,
					[styles[hoverUnderline!]]: Boolean(hoverUnderline),
					[styles[hover!]]: Boolean(hover)
				}
			)}
		>
			{children}
		</Component>
	)
}

const Link = forwardRef(LinkComponent) as <C extends ElementType = "a">(
	props: Props<C> & { ref?: Ref<any> }
) => JSX.Element

export default Link
