import { forwardRef, SVGAttributes } from "react"
import { checkmarkIcon } from "@dxdns/feflow-core/icons"

interface Props extends SVGAttributes<SVGSVGElement> {}

export default forwardRef<SVGSVGElement, Props>(
	({ className = "", fill = "none", viewBox = "0 0 24 24", ...rest }, ref) => {
		return (
			<svg
				{...rest}
				ref={ref}
				className={className}
				fill={fill}
				viewBox={viewBox}
			>
				<path
					strokeLinejoin="round"
					strokeLinecap="round"
					strokeWidth="3"
					stroke="currentColor"
					d={checkmarkIcon}
				></path>
			</svg>
		)
	}
)
