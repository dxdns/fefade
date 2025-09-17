import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/AvatarGroup.module.css"

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
