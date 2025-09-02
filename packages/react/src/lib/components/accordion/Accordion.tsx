import { forwardRef, HTMLAttributes } from "react"
import type { AccordionType } from "@dxdns-kit/core/types"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { keyboardArrowLeftIcon } from "@dxdns-kit/core/icons"
import styles from "@dxdns-kit/core/styles/Accordion.module.css"

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
