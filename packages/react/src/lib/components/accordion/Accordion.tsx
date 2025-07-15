import { forwardRef, HTMLAttributes, type PropsWithChildren } from "react"
import type { AccordionType } from "@dxdns/feflow-core/types"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import styles from "@dxdns/feflow-core/styles/Accordion.module.css"
import { KeyboardArrowLeftIcon } from "../../icons"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "id">,
	PropsWithChildren,
	AccordionType { }

export default forwardRef<HTMLDivElement, Props>(
	({ className, label, variant, children, ...rest }, ref) => {
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
						<KeyboardArrowLeftIcon />
					</div>
				</label>
				<div className={styles.content}>{children}</div>
			</div>
		)
	}
)
