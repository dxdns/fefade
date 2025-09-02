import { forwardRef, HTMLAttributes, ReactNode } from "react"
import { CardType, HTMLAttrAnchor } from "@dxdns-kit/core/types"
import { Card } from "../card"
import { Badge } from "../badge"
import styles from "@dxdns-kit/core/styles/Window.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		CardType,
		HTMLAttrAnchor {
	label?: string | ReactNode
}

export default forwardRef<HTMLDivElement, Props>(
	({ className = "", label, children, ...rest }, ref) => {
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
