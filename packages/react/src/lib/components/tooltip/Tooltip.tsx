import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@feflow-ui/core/utils"
import type { TooltipType } from "@feflow-ui/core/types"
import styles from "@feflow-ui/core/styles/Tooltip.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		TooltipType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", label, position = "top", children, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				data-tooltip={label}
				className={classMapUtil(
					className,
					[className, styles],
					[position, styles],
					styles.tooltip
				)}
			>
				{children}
			</div>
		)
	}
)
