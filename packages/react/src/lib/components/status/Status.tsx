import { Constants } from "@feflow-ui/core"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import type { StatusType } from "@feflow-ui/core/types"
import { classMapUtil, normalizeSizeUtil } from "@feflow-ui/core/utils"
import styles from "@feflow-ui/core/styles/Status.module.css"

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
						...rest.style
					} as CSSProperties
				}
			></div>
		)
	}
)
