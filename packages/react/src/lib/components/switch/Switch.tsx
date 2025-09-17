import { Constants } from "@fefade/core"
import type { SwitchType } from "@fefade/core/types"
import { classMapUtil, getPropValueUtil } from "@fefade/core/utils"
import {
	CSSProperties,
	forwardRef,
	InputHTMLAttributes,
	ReactNode
} from "react"
import styles from "@fefade/core/styles/Switch.module.css"

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
				unchecked: Constants.themeColorVar.onSurface,
				checked: Constants.themeColorVar.onPrimary
			},
			children,
			...rest
		},
		ref
	) => {
		const uncheckedColor = getPropValueUtil<
			{ unchecked?: string },
			"unchecked"
		>(indicatorColor, "unchecked", Constants.themeColorVar.onSurface)

		const checkedColor = getPropValueUtil<{ checked?: string }, "checked">(
			indicatorColor,
			"checked",
			Constants.themeColorVar.onPrimary
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
