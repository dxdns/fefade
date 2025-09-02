import type { ModalType } from "@dxdns-kit/core/types"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react"
import { Card } from "../card"
import styles from "@dxdns-kit/core/styles/Modal.module.css"
import animationStyle from "@dxdns-kit/core/styles/Animation.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		ModalType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			isOpen,
			handleClose,
			variant = "contained",
			children,
			...rest
		},
		ref
	) => {
		const [show, setShow] = useState(false)

		const el = useRef<HTMLDivElement | null>(null)

		useEffect(() => {
			if (isOpen) {
				el.current?.focus()
				setShow(true)
			}
		}, [isOpen])

		if (!show) return null

		return (
			<div
				className={classMapUtil(className, [className, styles], styles.modal)}
			>
				<div
					ref={ref ?? el}
					className={classMapUtil(styles.overlay, {
						[animationStyle.fadeIn]: isOpen,
						[animationStyle.fadeOut]: !isOpen
					})}
					role="alertdialog"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === "Escape" || e.key === " ") {
							handleClose()
						}
					}}
					onClick={(e) => {
						if (e.target === e.currentTarget) {
							handleClose()
						}
					}}
					onAnimationEnd={() => {
						if (!isOpen) {
							setShow(false)
						}
					}}
				>
					<div
						className={classMapUtil(styles.wrapper, {
							[animationStyle.scaleIn]: isOpen,
							[animationStyle.scaleOut]: !isOpen
						})}
					>
						<Card {...rest} className={styles.content} variant={variant}>
							{children}
						</Card>
					</div>
				</div>
			</div>
		)
	}
)
