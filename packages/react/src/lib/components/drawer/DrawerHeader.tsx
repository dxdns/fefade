import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@navnex-kit/core/utils"
import styles from "@navnex-kit/core/styles/DrawerHeader.module.css"
import { Button } from "../button"
import { CloseIcon } from "../../icons/index.js"

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
					<CloseIcon />
				</Button>
			)}
		</div>
	)
})
