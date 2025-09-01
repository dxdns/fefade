import { classMapUtil } from "@feflow-ui/core/utils"
import { forwardRef, InputHTMLAttributes } from "react"
import styles from "@feflow-ui/core/styles/ColorPicker.module.css"

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export default forwardRef<HTMLInputElement, Props>(
	({ className = "", ...rest }, ref) => {
		return (
			<input
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					styles.colorPicker
				)}
				type="color"
			/>
		)
	}
)
