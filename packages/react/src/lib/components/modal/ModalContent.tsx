import { classMapUtil } from "@dxdns-kit/core/utils"
import { forwardRef, HTMLAttributes } from "react"
import styles from "@dxdns-kit/core/styles/ModalContent.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", children, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(className, [className, styles], styles.content)}
			>
				{children}
			</div>
		)
	}
)
