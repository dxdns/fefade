import type { GalleryType } from "@dxdns/feflow-core/types"
import { classMapUtil, normalizeSizeUtil } from "@dxdns/feflow-core/utils"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import styles from "@dxdns/feflow-core/styles/Gallery.module.css"

interface Props extends HTMLAttributes<HTMLDivElement>, GalleryType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			variant = "default",
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
				className={classMapUtil(className, styles.gallery, [variant, styles])}
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
