import { forwardRef, InputHTMLAttributes, useRef } from "react"
import { classMapUtil } from "@feflow-ui/core/utils"
import styles from "@feflow-ui/core/styles/DateInput.module.css"

interface Props
	extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "size">, "type"> {
	type?: "date" | "month"
}

export default forwardRef<HTMLInputElement, Props>(
	({ className = "", type = "date", ...rest }, ref) => {
		const el = useRef<HTMLInputElement | null>(null)

		async function handleClick() {
			if (!el.current) {
				return
			}
			el.current.showPicker()
		}

		return (
			<input
				{...rest}
				ref={ref ?? el}
				className={classMapUtil(
					className,
					[className, styles],
					styles.dateInput
				)}
				type={type}
				onClick={handleClick}
			/>
		)
	}
)
