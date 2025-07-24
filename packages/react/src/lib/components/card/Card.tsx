import type { CardType } from "@dxdns/feflow-core/types"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { useAction } from "../../utils"
import { glowOnHoverAction } from "@dxdns/feflow-core/actions"
import styles from "@dxdns/feflow-core/styles/Card.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		CardType {
	target?: HTMLAttributeAnchorTarget
}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			isTranslucent = false,
			glowOnHover = false,
			animatedBorder = false,
			variant = "outlined",
			href,
			target = "_self",
			children,
			...rest
		},
		ref
	) => {
		const actionRef = useAction<HTMLDivElement>(glowOnHoverAction)

		return (
			<div ref={glowOnHover ? actionRef : undefined}>
				<div
					{...rest}
					ref={ref}
					role="button"
					className={classMapUtil(
						className,
						[className, styles],
						[variant, styles],
						styles.card,
						{
							[styles.isTranslucent]: isTranslucent,
							[styles.animatedBorder]: animatedBorder
						}
					)}
					style={{
						cursor: href ? "pointer" : "default",
						...rest.style
					}}
					onClick={href ? () => window.open(href, target) : rest.onClick}
				>
					{children}
				</div>
			</div>
		)
	}
)
