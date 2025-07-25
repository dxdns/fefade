import type { CardType, HTMLAttrAnchor } from "@dxdns/feflow-core/types"
import {
	classMapUtil,
	getPropValueUtil,
	normalizeSizeUtil
} from "@dxdns/feflow-core/utils"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import { useAction } from "../../utils"
import { glowOnHoverAction } from "@dxdns/feflow-core/actions"
import styles from "@dxdns/feflow-core/styles/Card.module.css"

interface Props
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		CardType,
		HTMLAttrAnchor {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			isTranslucent = false,
			glowOnHover = false,
			animatedBorder = false,
			variant = "outlined",
			href,
			target = "_self",
			children,
			...rest
		},
		ref
	) => {
		const actionRef = useAction<HTMLDivElement>(glowOnHoverAction)

		const width = getPropValueUtil<{ width?: string }, "width">(
			animatedBorder,
			"width",
			"1px"
		)

		const primaryColor = getPropValueUtil<
			{ primaryColor?: string },
			"primaryColor"
		>(animatedBorder, "primaryColor", "var(--ff-on-surface)")

		const secondaryColor = getPropValueUtil<
			{ secondaryColor?: string },
			"secondaryColor"
		>(animatedBorder, "secondaryColor", "var(--ff-border)")

		return (
			<div ref={glowOnHover ? actionRef : undefined}>
				<div
					{...rest}
					ref={ref}
					role="button"
					className={classMapUtil(
						className,
						[className, styles],
						[variant, styles],
						styles.card,
						{
							[styles.isTranslucent]: isTranslucent,
							[styles.animatedBorder]: animatedBorder
						}
					)}
					style={
						{
							"--width": normalizeSizeUtil(width!),
							"--primary": primaryColor,
							"--secondary": secondaryColor,
							...rest.style
						} as CSSProperties
					}
					onClick={href ? () => window.open(href, target) : rest.onClick}
				>
					{children}
				</div>
			</div>
		)
	}
)
