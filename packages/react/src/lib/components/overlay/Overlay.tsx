import { ButtonHTMLAttributes, forwardRef } from "react"
import { classMapUtil } from "@dxdns-kit/core/utils"
import styles from "@dxdns-kit/core/styles/Overlay.module.css"

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen: boolean
}

export default forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const { className = "", isOpen = false, ...rest } = props

	if (!isOpen) return null

	return (
		<button
			{...rest}
			ref={ref}
			className={classMapUtil(className, [className, styles], styles.overlay)}
			type={"button"}
			aria-labelledby="overlay"
			aria-label="Close overlay"
		/>
	)
})
