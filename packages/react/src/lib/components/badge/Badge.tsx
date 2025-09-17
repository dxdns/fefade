import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/Badge.module.css"
import type { BadgeType } from "@fefade/core/types"

interface Props extends HTMLAttributes<HTMLSpanElement>, BadgeType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			size = "xs",
			variant = "contained",
			roundedFull = false,
			children,
			...rest
		},
		ref
	) => {
		return (
			<span
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					styles.badge,
					[size, styles],
					[variant, styles],
					{
						[styles.roundedFull]: roundedFull
					}
				)}
			>
				{children}
			</span>
		)
	}
)
