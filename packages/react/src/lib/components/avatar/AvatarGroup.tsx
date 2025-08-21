import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@feflow-ui/core/utils"
import styles from "@feflow-ui/core/styles/AvatarGroup.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", children, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					styles.avatarGroup
				)}
			>
				{children}
			</div>
		)
	}
)
