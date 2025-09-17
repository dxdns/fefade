import type { SpinnerType } from "@fefade/core/types"
import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/Spinner.module.css"

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
