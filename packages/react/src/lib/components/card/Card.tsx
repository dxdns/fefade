import { VariantType } from "@feflow/core/types"
import { classMapUtil } from "@feflow/core/utils"
import {
	forwardRef,
	HTMLAttributeAnchorTarget,
	HTMLAttributes,
	PropsWithChildren
} from "react"
import styles from "@feflow/core/styles/Card.module.css"

type Props = Omit<HTMLAttributes<HTMLDivElement>, "color"> &
	PropsWithChildren & {
		isTranslucent?: boolean
		variant?: Exclude<VariantType, "text">
		href?: string
		target?: HTMLAttributeAnchorTarget
	}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className,
			isTranslucent = false,
			variant = "outlined",
			href,
			target = "_self",
			children,
			...rest
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				{...rest}
				role="button"
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.card,
					{
						[styles.isTranslucent]: isTranslucent
					}
				)}
				style={{ cursor: href ? "pointer" : "default", ...rest.style }}
				onClick={href ? () => window.open(href, target) : rest.onClick}
			>
				{children}
			</div>
		)
	}
)
