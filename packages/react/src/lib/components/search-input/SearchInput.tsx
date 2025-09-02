import type { TextFieldType } from "@dxdns-kit/core/types"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { forwardRef, InputHTMLAttributes } from "react"
import { TextField } from "../text-field"
import { searchIcon } from "@dxdns-kit/core/icons"
import styles from "@dxdns-kit/core/styles/SearchInput.module.css"

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
		TextFieldType {}

export default forwardRef<HTMLInputElement, Props>(
	({ className = "", variant = "text", color, ...rest }, ref) => {
		return (
			<div
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					styles.searchInput
				)}
			>
				<svg
					className={styles.icon}
					viewBox="0 -960 960 960"
					style={{
						display: "inline-block",
						verticalAlign: "middle",
						width: "24px",
						height: "24px"
					}}
				>
					<path d={searchIcon}></path>
				</svg>
				<TextField
					ref={ref}
					{...rest}
					className={styles.inputGroup}
					variant={variant}
					color={color}
					type="search"
				/>
			</div>
		)
	}
)
