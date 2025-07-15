import { forwardRef, SVGAttributes } from "react"
import { keyboardArrowLeftIcon } from "@dxdns/feflow-core/icons"

interface Props extends SVGAttributes<SVGSVGElement> {}

export default forwardRef<SVGSVGElement, Props>(
	(
		{
			className,
			width = "24px",
			height = "24px",
			fill = "currentColor",
			viewBox = "0 -960 960 960",
			...rest
		},
		ref
	) => {
		return (
			<svg
				ref={ref}
				{...rest}
				className={className}
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					...rest.style
				}}
				width={width}
				height={height}
				fill={fill}
				viewBox={viewBox}
			>
				<path d={keyboardArrowLeftIcon}></path>
			</svg>
		)
	}
)
