import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import type { StatusColorType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/ProgressLoader.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	value: number
	color?: StatusColorType
}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", value, color = "info", ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[color, styles],
					styles.progressLoader
				)}
				style={
					{
						["--value"]: `${value}%`,
						...rest.style
					} as CSSProperties
				}
			></div>
		)
	}
)
