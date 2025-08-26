import React, { forwardRef } from "react"
import { classMapUtil } from "@navnex-kit/core/utils"
import type { DrawerType } from "@navnex-kit/core/types"
import styles from "@navnex-kit/core/styles/Drawer.module.css"

export interface Props
	extends React.HTMLAttributes<HTMLDivElement>,
		DrawerType {}

export default forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		className = "",
		isOpen = false,
		variant = "temporary",
		position = "left",
		children,
		...rest
	} = props

	return (
		<div
			{...rest}
			ref={ref}
			className={classMapUtil(
				className,
				[className, styles],
				styles.drawer,
				[position, styles],
				[variant, styles],
				{
					[styles.show]: isOpen
				}
			)}
		>
			{children}
		</div>
	)
})
