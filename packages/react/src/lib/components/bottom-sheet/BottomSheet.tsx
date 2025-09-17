import { classMapUtil } from "@fefade/core/utils"
import { forwardRef, HTMLAttributes, useEffect } from "react"
import { useAction } from "../../utils"
import { bottomSheetAction } from "@fefade/core/actions"
import type { BottomSheetType } from "@fefade/core/types"
import styles from "@fefade/core/styles/BottomSheet.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		BottomSheetType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{ className = "", isOpen, handleClose, hideIn, children, ...rest },
		_ref
	) => {
		const actionRef = useAction<
			HTMLDivElement,
			Parameters<typeof bottomSheetAction>[1]
		>(bottomSheetAction, { handleClose, hideIn })

		useEffect(() => {
			if (isOpen) {
				document.body.style.overflow = "hidden"
				document.body.style.overscrollBehaviorY = "contain"
			} else {
				document.body.style.overflow = "auto"
				document.body.style.overscrollBehaviorY = "auto"
			}
		}, [isOpen])

		return (
			<div
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
				<div {...rest} className={styles.wrapper}>
					{children}
				</div>
			</div>
		)
	}
)
