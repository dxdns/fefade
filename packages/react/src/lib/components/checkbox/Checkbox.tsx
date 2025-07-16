import { forwardRef, InputHTMLAttributes } from "react"
import type { SizeType } from "@dxdns/feflow-core/types"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import { CheckmarkIcon } from "../../icons"
import styles from "@dxdns/feflow-core/styles/Checkbox.module.css"

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
					<CheckmarkIcon className={styles.icon} />
				</div>
				{rest["aria-label"]}
			</label>
		)
	}
)
