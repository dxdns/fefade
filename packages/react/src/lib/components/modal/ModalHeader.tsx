import type { AlignType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import { forwardRef, HTMLAttributes } from "react"
import { Button } from "../button"
import { closeIcon } from "@fefade/core/icons"
import styles from "@fefade/core/styles/ModalHeader.module.css"

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
	}
)
