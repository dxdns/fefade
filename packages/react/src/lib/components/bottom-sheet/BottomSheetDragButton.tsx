import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@feflow-ui/core/utils"
import type { BottomSheetDragButtonType } from "@feflow-ui/core/types"
import styles from "@feflow-ui/core/styles/BottomSheetDragButton.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		BottomSheetDragButtonType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", variant = "text", children, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.bottomSheetDragButton
				)}
			>
				{children ?? <span></span>}
			</div>
		)
	}
)
