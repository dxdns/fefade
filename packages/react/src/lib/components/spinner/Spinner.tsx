import type { SizeType } from "@feflow/core/types"
import React from "react"
import { classMapUtil } from "@feflow/core/utils"
import styles from "@feflow/core/styles/Spinner.module.css"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
	size?: SizeType
}

export default React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
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
