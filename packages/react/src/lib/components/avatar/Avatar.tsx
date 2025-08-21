import { forwardRef, useState, type ImgHTMLAttributes } from "react"
import styles from "@feflow-ui/core/styles/Avatar.module.css"
import { classMapUtil } from "@feflow-ui/core/utils"
import type { AvatarType } from "@feflow-ui/core/types"

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
