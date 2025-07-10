import { forwardRef, HTMLAttributes, PropsWithChildren } from "react"
import { classMapUtil } from "@feflow/core/utils"
import styles from "@feflow/core/styles/Badge.module.css"
import { SizeType, VariantType } from "@feflow/core/types"

type Props = HTMLAttributes<HTMLSpanElement> &
	PropsWithChildren & {
		size?: SizeType
		variant?: Exclude<VariantType, "text">
		roundedFull?: boolean
	}

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
