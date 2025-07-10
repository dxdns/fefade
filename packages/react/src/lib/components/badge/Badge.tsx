import { forwardRef, HTMLAttributes, type PropsWithChildren } from "react"
import { classMapUtil } from "@feflow/core/utils"
import styles from "@feflow/core/styles/Badge.module.css"
import type { BadgeType } from "@feflow/core/types"

interface Props
	extends HTMLAttributes<HTMLSpanElement>,
		PropsWithChildren,
		BadgeType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className,
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
				ref={ref}
				{...rest}
				className={classMapUtil(
					className,
					[className, styles],
					styles.badge,
					[size, styles],
					[variant, styles],
					{ [styles.roundedFull]: roundedFull }
				)}
			>
				{children}
			</span>
		)
	}
)
