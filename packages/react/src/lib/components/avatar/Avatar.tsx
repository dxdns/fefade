import { forwardRef, useState, type ImgHTMLAttributes } from "react"
import styles from "@fefade/core/styles/Avatar.module.css"
import { classMapUtil } from "@fefade/core/utils"
import type { AvatarType } from "@fefade/core/types"

interface Props
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height">,
		AvatarType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			width,
			height,
			textFallback,
			size = "md",
			grouped = false,
			children,
			...rest
		},
		ref
	) => {
		const [hasError, setHasError] = useState(false)

		function handleError() {
			setHasError(true)
		}

		return (
			<div
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[size, styles],
					{ [styles.grouped]: grouped },
					styles.avatar
				)}
				style={{ width, height, ...rest.style }}
			>
				{!hasError && rest.src ? (
					<img {...rest} onError={handleError} />
				) : (
					textFallback && (
						<span className={styles.textFallback}>
							{textFallback.charAt(0).toUpperCase()}
						</span>
					)
				)}
				<span className={styles.textFallback}>{children}</span>
			</div>
		)
	}
)
