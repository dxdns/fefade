import { CSSProperties, forwardRef, HTMLAttributes, Ref } from "react"
import type { HTMLTagMap, HTMLTagTextType, TextType } from "@fefade/core/types"
import { classMapUtil } from "@fefade/core/utils"
import styles from "@fefade/core/styles/Text.module.css"

interface Props<T extends HTMLTagTextType>
	extends HTMLAttributes<HTMLTagMap[T]>,
		TextType {}

export default forwardRef(
	<T extends HTMLTagTextType = "p">(
		{ className = "", as = "p", lines = Infinity, children, ...rest }: Props<T>,
		ref?: Ref<HTMLParagraphElement>
	) => {
		const Component = as

		return (
			<Component
				{...rest}
				ref={ref}
				className={classMapUtil(className, [className, styles], styles.text)}
				style={{ ["--lines"]: lines, ...rest.style } as CSSProperties}
			>
				{children}
			</Component>
		)
	}
)
