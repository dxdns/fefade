import { Constants } from "@dxdns-kit/core"
import type { CardType, HTMLAttrAnchor } from "@dxdns-kit/core/types"
import {
	classMapUtil,
	getPropValueUtil,
	handleClickUtil,
	normalizeSizeUtil
} from "@dxdns-kit/core/utils"
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import { useAction } from "../../utils"
import { glowOnHoverAction } from "@dxdns-kit/core/actions"
import styles from "@dxdns-kit/core/styles/Card.module.css"

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
			download,
			children,
			...rest
		},
		ref
	) => {
		const actionRef = glowOnHover
			? useAction<HTMLDivElement>(glowOnHoverAction)
			: undefined

		const borderStopOnHover = getPropValueUtil<
			{ stopOnHover?: boolean },
			"stopOnHover"
		>(animatedBorder, "stopOnHover", false)

		const borderWidth = getPropValueUtil<{ width?: string }, "width">(
			animatedBorder,
			"width",
			"1px"
		)

		const borderPrimaryColor = getPropValueUtil<
			{ primaryColor?: string },
			"primaryColor"
		>(animatedBorder, "primaryColor", Constants.themeColorVar.onSurface)

		const borderSecondaryColor = getPropValueUtil<
			{ secondaryColor?: string },
			"secondaryColor"
		>(animatedBorder, "secondaryColor", Constants.themeColorVar.border)

		function handleClick(e: any) {
			handleClickUtil({
				href,
				download,
				target,
				onClick: () => {
					rest.onClick?.(e)
				}
			})
		}

		return (
			<div ref={actionRef}>
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
							[styles.animatedBorder]: Boolean(animatedBorder),
							[styles.stopOnHover]: Boolean(borderStopOnHover)
						}
					)}
					style={
						{
							"--border-width": normalizeSizeUtil(borderWidth!),
							"--primary": borderPrimaryColor,
							"--secondary": borderSecondaryColor,
							...rest.style
						} as CSSProperties
					}
					onClick={handleClick}
				>
					{children}
				</div>
			</div>
		)
	}
)
