import { forwardRef, type ButtonHTMLAttributes } from "react"
import type { ButtonType, HTMLAttrAnchor } from "@navnex-kit/core/types"
import styles from "@navnex-kit/core/styles/Button.module.css"
import { classMapUtil } from "@navnex-kit/core/utils"
import { Spinner } from "../spinner"

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonType,
		HTMLAttrAnchor {}

export default forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		className = "",
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
			{...rest}
			ref={ref}
			className={classMapUtil(
				className,
				[className, styles],
				[variant, styles],
				[size, styles],
				styles.button,
				{
					["roundedFull"]: roundedFull,
					[styles.pressedEffect]: pressedEffect
				}
			)}
			type={rest.type ?? "button"}
			onClick={handleClick}
		>
			{isLoading ? <Spinner /> : children}
		</button>
	)
})
