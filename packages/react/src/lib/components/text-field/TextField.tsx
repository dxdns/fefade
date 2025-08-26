import type { TextFieldType } from "@navnex-kit/core/types"
import { classMapUtil } from "@navnex-kit/core/utils"
import { forwardRef, InputHTMLAttributes, useEffect, useRef } from "react"
import styles from "@navnex-kit/core/styles/TextField.module.css"

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
		TextFieldType {}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "",
			label,
			variant = "outlined",
			focused = false,
			size = "md",
			...rest
		},
		ref
	) => {
		const el = useRef<HTMLInputElement | null>(null)

		useEffect(() => {
			if (focused) {
				el.current?.focus()
			}
		}, [])

		return (
			<div
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					[size, styles],
					styles.textField,
					{
						[styles.labelEmpty]: !label
					}
				)}
			>
				<input
					{...rest}
					ref={ref ?? el}
					placeholder={rest.placeholder ?? " "}
					style={undefined}
				/>

				{label && <label htmlFor={rest.id ?? rest.name}>{label}</label>}

				<fieldset>
					<legend>
						<span>{label}</span>
					</legend>
				</fieldset>
			</div>
		)
	}
)
