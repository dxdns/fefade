import { forwardRef, InputHTMLAttributes } from "react"
import type { SizeType } from "@feflow-ui/core/types"
import { classMapUtil } from "@feflow-ui/core/utils"
import { checkmarkIcon } from "@feflow-ui/core/icons"
import styles from "@feflow-ui/core/styles/Checkbox.module.css"

interface Props
	extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "size">, "type"> {
	size?: SizeType
}

export default forwardRef<HTMLInputElement, Props>(
	({ className = "", size = "sm", ...rest }, ref) => {
		return (
			<label
				className={classMapUtil(
					className,
					[className, styles],
					styles.checkbox,
					[size, styles],
					{
						["text-muted"]: rest.disabled
					}
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
							verticalAlign: "middle",
							width: "24px",
							height: "24px"
						}}
					>
						<path
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-width="3"
							stroke="currentColor"
							d={checkmarkIcon}
						></path>
					</svg>
				</div>
				{rest["aria-label"]}
			</label>
		)
	}
)
