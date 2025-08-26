import { Constants } from "@navnex-kit/core"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import type { StatusType } from "@navnex-kit/core/types"
import { classMapUtil, normalizeSizeUtil } from "@navnex-kit/core/utils"
import styles from "@navnex-kit/core/styles/Status.module.css"

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
