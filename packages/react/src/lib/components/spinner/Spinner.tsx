import type { SpinnerType } from "@feflow/core/types"
import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@feflow/core/utils"
import styles from "@feflow/core/styles/Spinner.module.css"

interface Props extends HTMLAttributes<HTMLSpanElement>, SpinnerType {}

export default forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { className, size = "sm", ...rest } = props

	return (
		<span
			ref={ref}
			{...rest}
			className={classMapUtil(
				className,
				[className, styles],
				[size, styles],
				styles.spinner
			)}
		></span>
	)
})
