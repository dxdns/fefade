import {
	forwardRef,
	type ButtonHTMLAttributes,
	type HTMLAttributeAnchorTarget,
	type PropsWithChildren
} from "react"
import type { SizeType, VariantType } from "@feflow/core/types"
import styles from "@feflow/core/styles/Button.module.css"
import { classMapUtil } from "@feflow/core/utils"
import Spinner from "../spinner"

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithChildren & {
		pressedEffect?: boolean
		variant?: VariantType
		isLoading?: boolean
		roundedFull?: boolean
		size?: SizeType
		href?: string
		target?: HTMLAttributeAnchorTarget
		download?: string
	}

export default forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		className,
		pressedEffect = true,
		variant = "contained",
		isLoading = false,
		roundedFull = false,
		size = "sm",
		href,
		target = "_self",
		download,
		children,
		...rest
	} = props

	function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		if (download && href) {
			const a = document.createElement("a")
			a.href = href
			a.download = download
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		} else if (href) {
			window.open(href, target)
		} else if (typeof rest?.onClick === "function") {
			rest.onClick(event)
		}
	}

	return (
		<button
			ref={ref}
			{...rest}
			className={classMapUtil(
				className,
				[className, styles],
				[variant, styles],
				[size, styles],
				styles.button,
				{
					[styles.roundedFull]: roundedFull,
					[styles.pressedEffect]: pressedEffect
				}
			)}
			type={rest.type ?? "button"}
			onClick={handleClick}
		>
			{isLoading ? (
				<Spinner />
			) : (
				<div className={styles.content}>{children}</div>
			)}
		</button>
	)
})
