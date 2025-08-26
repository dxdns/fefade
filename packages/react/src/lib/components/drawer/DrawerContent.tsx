import { forwardRef, HTMLAttributes } from "react"
import styles from "@navnex-kit/core/styles/DrawerContent.module.css"
import { classMapUtil } from "@navnex-kit/core/utils"

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { className = "", children, ...rest } = props

	return (
		<div
			{...rest}
			ref={ref}
			className={classMapUtil(
				className,
				[className, styles],
				styles.drawerContent
			)}
		>
			{children}
		</div>
	)
})
