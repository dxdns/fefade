import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import { classMapUtil, normalizeSizeUtil } from "@dxdns/feflow-core/utils"
import type { GridType } from "@dxdns/feflow-core/types"
import styles from "@dxdns/feflow-core/styles/Grid.module.css"

interface Props extends HTMLAttributes<HTMLDivElement>, GridType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			variant,
			columns = "auto-fit",
			gap = "0.75rem",
			minWidth = "12.5rem",
			maxWidth = "1fr",
			children,
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
					styles.grid
				)}
				style={
					{
						["--columns"]: columns,
						["--gap"]: normalizeSizeUtil(gap),
						["--min-width"]: normalizeSizeUtil(minWidth),
						["--max-width"]: normalizeSizeUtil(maxWidth),
						...rest.style
					} as CSSProperties
				}
			>
				{children}
			</div>
		)
	}
)
