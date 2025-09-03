import type { RangeInputType } from "@dxdns-kit/core/types"
import { classMapUtil, dataIconUrlUtil } from "@dxdns-kit/core/utils"
import {
	CSSProperties,
	forwardRef,
	InputHTMLAttributes,
	useMemo,
	useState
} from "react"
import styles from "@dxdns-kit/core/styles/RangeInput.module.css"

interface Props
	extends Omit<
			Omit<
				Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "type">, "size">,
				"value"
			>,
			"color"
		>,
		RangeInputType {}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "",
			color = "primary",
			icon,
			size = "md",
			showValue = true,
			min = 0,
			max = 100,
			...rest
		},
		ref
	) => {
		const [currentValue, setCurrentValue] = useState(rest.defaultValue ?? 0)
		const [bubbleActive, setBubbleActive] = useState(false)

		const isControlled = rest.value !== undefined
		const value = isControlled ? Number(rest.value) : currentValue

		const internalValue = useMemo(() => {
			const minNum = Number(min)
			const maxNum = Number(max)
			const valueNum = Number(value)

			if (
				isNaN(minNum) ||
				isNaN(maxNum) ||
				isNaN(valueNum) ||
				maxNum === minNum
			) {
				return 0
			} else {
				return ((valueNum - minNum) / (maxNum - minNum)) * 100
			}
		}, [min, max, value])

		return (
			<div className={styles.wrapper}>
				<input
					{...rest}
					ref={ref}
					className={classMapUtil(
						className,
						[className, styles],
						[size, styles],
						[color, styles],
						styles.rangeInput
					)}
					style={
						{
							["--internal-value"]: `${internalValue}%`,
							["--thumb-icon"]: icon
								? `url(${dataIconUrlUtil(icon)})`
								: undefined,
							...rest.style
						} as CSSProperties
					}
					value={internalValue}
					onChange={(e) => {
						if (isControlled) {
							rest.onChange?.(e)
						} else {
							setCurrentValue(Number(e.currentTarget.value))
						}
					}}
					onInput={() => {
						setBubbleActive(true)
					}}
					onTouchEnd={() => {
						setBubbleActive(false)
					}}
					onMouseUp={() => {
						setBubbleActive(false)
					}}
					type="range"
					min={min}
					max={max}
				/>
				{showValue && (
					<output
						className={classMapUtil(styles.bubble, {
							[styles.active]: bubbleActive
						})}
						style={{
							left: `calc(${internalValue}% + (${8 - internalValue * 0.15}px))`
						}}
					>
						{internalValue.toFixed(0)}
					</output>
				)}
			</div>
		)
	}
)
