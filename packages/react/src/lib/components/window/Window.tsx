import { forwardRef, HTMLAttributes, ReactNode } from "react"
import { VariantType } from "@dxdns/feflow-core/types"
import Card from "../card"
import Badge from "../badge"
import styles from "@dxdns/feflow-core/styles/Window.module.css"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	label?: string | ReactNode
	variant?: Exclude<VariantType, "text">
}

export default forwardRef<HTMLDivElement, Props>(
	({ className, label, children, ...rest }, ref) => {
		return (
			<Card {...rest} ref={ref} className={className}>
				<div className={styles.header}>
					<div className={styles.actions}>
						<Badge className="bg-error" roundedFull size="xs"></Badge>
						<Badge className="bg-warning" roundedFull size="xs"></Badge>
						<Badge className="bg-success" roundedFull size="xs"></Badge>
					</div>
					{label}
				</div>
				{children}
			</Card>
		)
	}
)
