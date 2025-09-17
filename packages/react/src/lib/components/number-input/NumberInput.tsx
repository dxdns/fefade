import React, {
	forwardRef,
	useRef,
	useEffect,
	useCallback,
	KeyboardEvent,
	WheelEvent,
	InputHTMLAttributes
} from "react"
import { classMapUtil } from "@fefade/core/utils"
import type { NumberInputType } from "@fefade/core/types"
import styles from "@fefade/core/styles/NumberInput.module.css"
import { Button } from "../button"

interface Props
	extends Omit<
			Omit<
				Omit<
					Omit<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">, "step">,
					"value"
				>,
				"type"
			>,
			"size"
		>,
		NumberInputType {}

export default forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "",
			variant = "contained",
			value = 0,
			onChange,
			autoFocus = false,
			step,
			size = "md",
			...rest
		},
		ref
	) => {
		const internalRef = useRef<HTMLInputElement | null>(null)
		const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef

		const noCanIncrement = (v: number) => {
			return rest.disabled || (rest.max !== undefined && v >= Number(rest.max))
		}

		const noCanDecrement = (v: number) => {
			return rest.disabled || (rest.min !== undefined && v <= Number(rest.min))
		}

		const handleFocus = useCallback(() => {
			if (inputRef.current && !rest.readOnly) {
				inputRef.current.focus()
			}
		}, [inputRef, rest.readOnly])

		const setValue = useCallback(
			(newValue: number) => {
				onChange?.(newValue)
			},
			[onChange]
		)

		const increment = useCallback(() => {
			if (noCanIncrement(value)) {
				return
			}

			const newValue = step ? value + step : value + 1
			setValue(newValue)
		}, [value, step, rest.disabled, rest.max, setValue])

		const decrement = useCallback(() => {
			if (noCanDecrement(value)) {
				return
			}

			const newValue = step ? value - step : value - 1
			setValue(newValue)
		}, [value, step, rest.disabled, rest.min, setValue])

		const handleKeydown = useCallback(
			(e: KeyboardEvent<HTMLInputElement>) => {
				if (e.key === "ArrowUp") {
					e.preventDefault()
					increment()
				} else if (e.key === "ArrowDown") {
					e.preventDefault()
					decrement()
				}
				handleFocus()
			},
			[increment, decrement, handleFocus]
		)

		const handleWheel = useCallback(
			(e: WheelEvent<HTMLInputElement>) => {
				if (e.deltaY > 0) {
					decrement()
				} else if (e.deltaY < 0) {
					increment()
				}
			},
			[increment, decrement]
		)

		useEffect(() => {
			if (autoFocus) handleFocus()
			if (rest.min !== undefined && value < Number(rest.min)) {
				setValue(Number(rest.min))
			}
		}, [autoFocus, handleFocus, rest.min, setValue, value])

		return (
			<div
				role="button"
				tabIndex={0}
				className={classMapUtil(
					className,
					[className, styles],
					[variant, styles],
					[size, styles],
					styles.numberInput
				)}
				style={rest.style}
			>
				<Button
					aria-label="Decrement"
					variant={variant}
					size={size}
					disabled={value === rest.min || rest.disabled}
					onClick={decrement}
				>
					-
				</Button>

				<div className={styles.wrapper}>
					<input
						{...rest}
						ref={inputRef}
						type="number"
						value={value}
						onChange={(e) => {
							const newValue = Number(e.target.value)
							// if (noCanIncrement(newValue) || noCanDecrement(newValue)) {
							// 	return
							// }
							setValue(newValue)
						}}
						onKeyDown={handleKeydown}
						onWheel={handleWheel}
						className={styles.input}
					/>
				</div>

				<Button
					aria-label="Increment"
					variant={variant}
					size={size}
					disabled={value === rest.max || rest.disabled}
					onClick={increment}
				>
					+
				</Button>
			</div>
		)
	}
)
