import type { SizeType } from "@dxdns/feflow-core/types"
import { classMapUtil } from "@dxdns/feflow-core/utils"
import {
	CSSProperties,
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState
} from "react"
import styles from "@dxdns/feflow-core/styles/RangeInput.module.css"

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
			icon,
			size = "md",
			onChange,
			min = 0,
			max = 100,
			...rest
		},
		_ref
	) => {
		const [progressValue, setProgressValue] = useState(0)

		const el = useRef<HTMLInputElement | null>(null)

		function updateProgress(el: HTMLInputElement) {
			const { value, min, max } = el
			const minNum = Number(min)
			const maxNum = Number(max)
			const valueNum = Number(value)

			if (
				isNaN(minNum) ||
				isNaN(maxNum) ||
				isNaN(valueNum) ||
				maxNum === minNum
			) {
				setProgressValue(0)
			} else {
				setProgressValue(((valueNum - minNum) / (maxNum - minNum)) * 100)
			}
		}

		function dataIconUrl(icon: string | SVGElement): string {
			const prefix = "data:image/svg+xml;utf8,"

			if (typeof icon === "string") {
				return `${prefix}${encodeURIComponent(icon)}`
			}

			const serializer = new XMLSerializer()
			const encoded = encodeURIComponent(serializer.serializeToString(icon))
				.replace(/'/g, "%27")
				.replace(/"/g, "%22")
			return `${prefix}${encoded}`
		}

		useEffect(() => {
			if (el.current) {
				updateProgress(el.current)
			}
		}, [])

		return (
			<input
				{...rest}
				ref={el}
				className={classMapUtil(
					className,
					[className, styles],
					[size, styles],
					styles.rangeInput
				)}
				value={rest.value ?? progressValue}
				min={min}
				max={max}
				style={
					{
						"--progress": progressValue,
						"--thumb-icon": icon ? `url(${dataIconUrl(icon)})` : undefined
					} as CSSProperties
				}
				onInput={(e) => {
					rest.onInput?.(e)
					updateProgress(e.currentTarget)
					onChange?.(Number(e.currentTarget.value))
				}}
				type="range"
			/>
		)
	}
)
