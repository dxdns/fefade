import { forwardRef, HTMLAttributes, useEffect, useRef } from "react"
import type { AccordionType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import { keyboardArrowLeftIcon } from "@fefade/core/icons"
import styles from "@fefade/core/styles/Accordion.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "id">,
		AccordionType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", label, variant, autoFocus, children, ...rest }, ref) => {
		const internalRef = useRef<HTMLInputElement | null>(null)
		const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef

		useEffect(() => {
			if (autoFocus) {
				inputRef.current.checked = true
			}
		}, [autoFocus])

		return (
			<div
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.accordion
				)}
				style={rest.style}
			>
				<input
					{...rest}
					ref={inputRef}
					className={styles.controller}
					type="radio"
					id={rest.id}
					name="accordion"
					hidden
					style={undefined}
				/>
				<label htmlFor={rest.id} className={styles.header}>
					<label htmlFor={rest.id}>{label}</label>
					<div className={styles.icon}>
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
							<path d={keyboardArrowLeftIcon}></path>
						</svg>
					</div>
				</label>
				<div className={styles.content}>{children}</div>
			</div>
		)
	}
)
