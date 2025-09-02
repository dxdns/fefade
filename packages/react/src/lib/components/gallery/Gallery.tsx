import type { GridType } from "@dxdns-kit/core/types"
import { forwardRef, HTMLAttributes } from "react"
import { Grid } from "../grid/index.js"

interface Props extends HTMLAttributes<HTMLDivElement>, GridType {}

export default forwardRef<HTMLDivElement, Props>(
	({ children, ...rest }, ref) => {
		return (
			<Grid {...rest} ref={ref}>
				{children}
			</Grid>
		)
	}
)
