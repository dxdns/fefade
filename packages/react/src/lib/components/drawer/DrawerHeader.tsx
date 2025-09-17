import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@fefade/core/utils"
import { closeIcon } from "@fefade/core/icons"
import { Button } from "../button"
import styles from "@fefade/core/styles/DrawerHeader.module.css"

export interface Props extends HTMLAttributes<HTMLDivElement> {
	handleClose?: () => void
}

export default forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { className = "", handleClose, children, ...rest } = props

	return (
		<div
			{...rest}
			ref={ref}
			className={classMapUtil(
				className,
				[className, styles],
				styles.drawerHeader,
				{
					[styles.isClosable]: Boolean(handleClose)
				}
			)}
		>
			{children}
			{handleClose && (
				<Button
					variant="text"
					className={styles.buttonClose}
					onClick={handleClose}
				>
					<svg
						viewBox="0 -960 960 960"
						style={{
							display: "inline-block",
							verticalAlign: "middle",
							fill: "currentcolor",
							width: "24px",
							height: "24px"
						}}
					>
						<path d={closeIcon}></path>
					</svg>
				</Button>
			)}
		</div>
	)
})
