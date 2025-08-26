import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@navnex-kit/core/utils"
import type { BottomSheetDragButtonType } from "@navnex-kit/core/types"
import styles from "@navnex-kit/core/styles/BottomSheetDragButton.module.css"

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
