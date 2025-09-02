import type { TextFieldType } from "@feflow-ui/core/types"
import { classMapUtil } from "@feflow-ui/core/utils"
import { forwardRef, InputHTMLAttributes } from "react"
import { TextField } from "../text-field"
import { searchIcon } from "@feflow-ui/core/icons"
import styles from "@feflow-ui/core/styles/SearchInput.module.css"

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
