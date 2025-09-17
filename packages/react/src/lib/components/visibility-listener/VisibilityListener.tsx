import { forwardRef, HTMLAttributes } from "react"
import { useAction } from "@/utils"
import { checkVisibilityAction } from "@fefade/core/actions"
import type { VisibilityListenerType } from "@fefade/core/types"

interface Props
	extends HTMLAttributes<HTMLDivElement>,
		VisibilityListenerType {}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", callback, children, ...rest }, _ref) => {
		const actionRef = useAction<
			HTMLDivElement,
			Parameters<typeof checkVisibilityAction>[1]
		>(checkVisibilityAction, { callback })

		return (
			<div {...rest} ref={actionRef} className={className}>
				{children}
			</div>
		)
	}
)
