import { forwardRef, HTMLAttributes } from "react"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/Textarea.module.css"

interface Props extends HTMLAttributes<HTMLTextAreaElement> {}

export default forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const { className = "", children, ...rest } = props

	return (
		<textarea
			{...rest}
			ref={ref}
			className={classMapUtil(className, styles.textarea)}
		>
			{children}
		</textarea>
	)
})
