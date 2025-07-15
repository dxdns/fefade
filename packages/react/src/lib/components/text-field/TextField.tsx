import type { TextFieldType } from "@dxdns/feflow-core/types"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, InputHTMLAttributes, useEffect, useRef } from "react"
import styles from "@dxdns/feflow-core/styles/TextField.module.css"

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
		TextFieldType {}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className,
			label,
			variant = "outlined",
			focused = false,
			actions,
			size = "md",
			children,
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
					{ [styles.labelEmpty]: !Boolean(label) }
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
