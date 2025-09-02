import type { TextFieldType } from "@dxdns-kit/core/types"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { forwardRef, InputHTMLAttributes, useEffect, useRef } from "react"
import styles from "@dxdns-kit/core/styles/TextField.module.css"

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
