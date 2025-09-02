import { forwardRef, InputHTMLAttributes } from "react"
import type { CheckboxType } from "@dxdns-kit/core/types"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { checkmarkIcon } from "@dxdns-kit/core/icons"
import styles from "@dxdns-kit/core/styles/Checkbox.module.css"

interface Props
	extends Omit<
			Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "size">, "type">,
			"color"
		>,
		CheckboxType {}

export default forwardRef<HTMLInputElement, Props>(
	(
		{ className = "", label, size = "sm", color = "secondary", ...rest },
		ref
	) => {
		return (
			<label
				className={classMapUtil(
					className,
					[className, styles],
					[size, styles],
					[color, styles],
					{
						["muted"]: rest.disabled
					},
					styles.checkbox
				)}
			>
				<input
					{...rest}
					ref={ref}
					readOnly={rest.readOnly ?? rest.checked}
					type="checkbox"
				/>
				<div className={styles.wrapper}>
					<div className={styles.bg}></div>
					<svg
						className={styles.icon}
						viewBox="0 0 24 24"
						style={{
							display: "inline-block",
							verticalAlign: "middle"
						}}
						fill="none"
					>
						<path
							strokeLinejoin="round"
							strokeLinecap="round"
							strokeWidth="3"
							stroke="currentColor"
							d={checkmarkIcon}
						></path>
					</svg>
				</div>
				{label && label}
			</label>
		)
	}
)
