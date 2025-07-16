import { classMapUtil } from "@dxdns/feflow-core/utils"
import { forwardRef, HTMLAttributes } from "react"
import styles from "@dxdns/feflow-core/styles/CodeItem.module.css"

interface Props extends HTMLAttributes<HTMLPreElement> {
	lineNumber: number
}

export default forwardRef<HTMLPreElement, Props>(
	({ className, lineNumber, children, ...rest }, ref) => {
		return (
			<pre
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					styles.codeItem
				)}
				data-prefix={lineNumber}
			>
				<code className={styles.content}>{children}</code>
			</pre>
		)
	}
)
