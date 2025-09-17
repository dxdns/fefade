import { forwardRef, HTMLAttributes } from "react"
import type { AccordionType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import { keyboardArrowLeftIcon } from "@fefade/core/icons"
import styles from "@fefade/core/styles/Accordion.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "id">,
		AccordionType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", label, variant, children, ...rest }, ref) => {
		return (
			<div
				ref={ref}
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
