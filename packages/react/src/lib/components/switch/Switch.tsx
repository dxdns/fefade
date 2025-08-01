import type { SwitchType } from "@dxdns/feflow-core/types"
import { classMapUtil, getPropValueUtil } from "@dxdns/feflow-core/utils"
import {
	CSSProperties,
	forwardRef,
	InputHTMLAttributes,
	ReactNode
} from "react"
import styles from "@dxdns/feflow-core/styles/Switch.module.css"

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
		SwitchType {
	label?: string | ReactNode
}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "",
			size = "sm",
			label,
			indicatorColor = {
				unchecked: "var(--ff-on-surface)",
				checked: "var(--ff-on-primary)"
			},
			children,
			...rest
		},
		ref
	) => {
		const uncheckedColor = getPropValueUtil<
			{ unchecked?: string },
			"unchecked"
		>(indicatorColor, "unchecked", "var(--ff-on-surface)")

		const checkedColor = getPropValueUtil<{ checked?: string }, "checked">(
			indicatorColor,
			"checked",
			"var(--ff-on-primary)"
		)

		return (
			<div className={styles.switch}>
				<label
					htmlFor={rest.id}
					className={classMapUtil(
						className,
						[className, styles],
						[size, styles],
						styles.content
					)}
				>
					<input {...rest} ref={ref} hidden style={undefined} type="checkbox" />
					<span
						className={styles.slider}
						style={
							{
								["--bg-unchecked"]: uncheckedColor,
								["--bg-checked"]: checkedColor,
								...rest.style
							} as CSSProperties
						}
					>
						{children}
					</span>
				</label>
				{label}
			</div>
		)
	}
)
