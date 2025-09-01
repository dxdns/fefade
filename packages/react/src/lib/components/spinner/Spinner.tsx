import type { SpinnerType } from "@feflow-ui/core/types"
import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@feflow-ui/core/utils"
import styles from "@feflow-ui/core/styles/Spinner.module.css"

interface Props extends HTMLAttributes<HTMLSpanElement>, SpinnerType {}

export default forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { className = "", size = "sm", ...rest } = props

	return (
		<span
			{...rest}
			ref={ref}
			className={classMapUtil(
				className,
				[className, styles],
				[size, styles],
				styles.spinner
			)}
		></span>
	)
})
