import { Constants } from "@dxdns-kit/core"
import type { SwitchType } from "@dxdns-kit/core/types"
import { classMapUtil, getPropValueUtil } from "@dxdns-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	InputHTMLAttributes,
	ReactNode
} from "react"
import styles from "@dxdns-kit/core/styles/Switch.module.css"

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
