import type { AlignType } from "@navnex-kit/core/types"
import { classMapUtil } from "@navnex-kit/core/utils"
import { forwardRef, HTMLAttributes } from "react"
import { Button } from "../button"
import { CloseIcon } from "@/icons"
import styles from "@navnex-kit/core/styles/ModalHeader.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	align?: AlignType
	handleClose?: () => void
}

export default forwardRef<HTMLDivElement, Props>(
	(
		{ className = "", align = "start", handleClose, children, ...rest },
		ref
	) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={classMapUtil(className, [className, styles], styles.header)}
			>
				<div
					className={styles.content}
					style={{ justifyContent: align, ...rest.style }}
				>
					{children}
				</div>
				{handleClose && (
					<Button variant="text" onClick={handleClose}>
						<CloseIcon />
					</Button>
				)}
			</div>
		)
	}
)
