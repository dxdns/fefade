import type { SizeType } from "@dxdns-kit/core/types"
import { classMapUtil, dataIconUrlUtil } from "@dxdns-kit/core/utils"
import { CSSProperties, forwardRef, InputHTMLAttributes, useMemo } from "react"
import styles from "@dxdns-kit/core/styles/RangeInput.module.css"

interface Props
	extends Omit<
		Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "type">, "onChange">,
		"size"
	> {
	icon?: string | SVGElement
	size?: SizeType
	onChange?: (value: number) => void
}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "",
			value = 0,
			icon,
			size = "md",
			onChange,
			min = 0,
			max = 100,
			...rest
		},
		ref
	) => {
		const progressValue = useMemo(() => {
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
			<input
				{...rest}
				ref={ref}
				className={classMapUtil(
					className,
					[className, styles],
					[size, styles],
					styles.rangeInput
				)}
				value={progressValue}
				style={
					{
						["--progress"]: `${progressValue}%`,
						["--thumb-icon"]: icon
							? `url(${dataIconUrlUtil(icon)})`
							: undefined,
						...rest.style
					} as CSSProperties
				}
				onInput={(e) => {
					rest.onInput?.(e)
					onChange?.(Number(e.currentTarget.value))
				}}
				type="range"
				min={min}
				max={max}
			/>
		)
	}
)
