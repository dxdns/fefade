import { Constants } from "@dxdns-kit/core"
import { forwardRef, HTMLAttributes } from "react"
import type { AlertType } from "@dxdns-kit/core/types"
import {
	checkCircleIcon,
	errorIcon,
	infoIcon,
	warningIcon
} from "@dxdns-kit/core/icons"
import { classMapUtil } from "@dxdns-kit/core/utils"
import styles from "@dxdns-kit/core/styles/Alert.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		AlertType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", color = "info", children, ...rest }, ref) => {
		const statusForegroundColor = Constants.ForegroundColor(color)

		const Icon = {
			error: errorIcon,
			info: infoIcon,
			warning: warningIcon,
			success: checkCircleIcon
		}[color]

		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[color, styles],
					styles.alert
				)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 -960 960 960"
					style={{
						display: "inline-block",
						verticalAlign: "middle",
						fill: statusForegroundColor,
						width: "20px",
						height: "20px",
						maxWidth: "max-content"
					}}
				>
					<path d={Icon} />
				</svg>
				{children}
			</div>
		)
	}
)
