import type { AlignType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import styles from "@fefade/core/styles/ModalActions.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	align?: AlignType
}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", align = "end", children, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(className, [className, styles], styles.actions)}
				style={
					{
						["--align"]: align,
						...rest.style
					} as CSSProperties
				}
			>
				{children}
			</div>
		)
	}
)
