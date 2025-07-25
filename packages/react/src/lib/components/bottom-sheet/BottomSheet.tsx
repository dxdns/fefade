import { classMapUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, HTMLAttributes } from "react"
import { useAction } from "../../utils"
import { bottomSheetAction } from "@dxdns/feflow-core/actions"
import type { BottomSheetType } from "@dxdns/feflow-core/types"
import styles from "@dxdns/feflow-core/styles/BottomSheet.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		BottomSheetType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", isOpen, handleClose, children, ...rest }, _ref) => {
		const actionRef = useAction<
			HTMLDivElement,
			Parameters<typeof bottomSheetAction>[1]
		>(bottomSheetAction, { handleClose, styles })

		return (
			<div
				{...rest}
				ref={actionRef}
				className={classMapUtil(
					className,
					[className, styles],
					styles.bottomSheet,
					{
						[styles.show]: isOpen
					}
				)}
			>
				<div className={styles.content}>
					<div className={styles.header}>
						<div className={styles.dragIcon}>
							<span></span>
						</div>
					</div>

					<div className={styles.wrapper}>{children}</div>
				</div>
			</div>
		)
	}
)
