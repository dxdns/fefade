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
	(
		{
			className = "",
			isOpen,
			handleClose,
			variant = "text",
			children,
			...rest
		},
		_ref
	) => {
		const actionRef = useAction<
			HTMLDivElement,
			Parameters<typeof bottomSheetAction>[1]
		>(bottomSheetAction, { handleClose })

		return (
			<div
				ref={actionRef}
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.bottomSheet,
					{
						[styles.show]: isOpen
					}
				)}
			>
				<div {...rest} className={styles.content}>
					<div className={styles.dragIcon}>
						<span></span>
					</div>

					<div className={styles.wrapper}>{children}</div>
				</div>
			</div>
		)
	}
)
