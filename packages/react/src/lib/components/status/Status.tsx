import { Constants } from "@fefade/core"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import type { StatusType } from "@fefade/core/types"
import { classMapUtil, normalizeSizeUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/Status.module.css"

interface Props extends HTMLAttributes<HTMLDivElement>, StatusType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			variant = "none",
			color = Constants.themeColorVar.bg,
			size = 30,
			...rest
		},
		ref
	) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.status
				)}
				style={
					{
						["--color"]: color,
						["--bg"]: "whitesmoke",
						["--size"]: normalizeSizeUtil(size),
						["--bounce-distance"]: "15%",
						...rest.style
					} as CSSProperties
				}
			></div>
		)
	}
)
