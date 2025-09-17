import React, { forwardRef } from "react"
import { classMapUtil } from "@fefade/core/utils"
import type { DrawerType } from "@fefade/core/types"
import styles from "@fefade/core/styles/Drawer.module.css"

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
