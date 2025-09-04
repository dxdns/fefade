import {
	forwardRef,
	HTMLAttributes,
	useContext,
	useEffect,
	useState
} from "react"
import type { ToastType } from "@dxdns-kit/core/types"
import { closeIcon } from "@dxdns-kit/core/icons"
import { classMapUtil } from "@dxdns-kit/core/utils"
import { Alert } from "../alert"
import { Button } from "../button"
import { ToastContext } from "../../contexts/ToastContext"
import { ProgressLoader } from "../progress-loader"
import styles from "@dxdns-kit/core/styles/Toast.module.css"

interface Props
	extends Omit<Omit<HTMLAttributes<HTMLDivElement>, "color">, "id">,
		ToastType {}

export default forwardRef<HTMLDivElement, Props>(
	(
		{
			className = "",
			id,
			message,
			color = "info",
			isClosable = false,
			withProgressLoader = false,
			...rest
		},
		ref
	) => {
		const _toastContext = useContext(ToastContext)
		const toast = _toastContext.data.get(id)
		const duration = toast?.duration ?? 3000

		const [timerValue, setTimerValue] = useState(duration)
		const [paused, setPaused] = useState(false)

		useEffect(() => {
			const interval = setInterval(() => {
				setTimerValue((old) => {
					if (!paused && old > 0) {
						return Math.max(old - 100, 0)
					}
					return old
				})
			}, 100)

			return () => {
				clearInterval(interval)
			}
		}, [paused])

		useEffect(() => {
			if (timerValue <= 0) {
				_toastContext.remove(id)
			}
		}, [timerValue])

		return (
			<Alert
				{...rest}
				ref={ref}
				className={classMapUtil(className, styles.toast)}
				color={color}
				onMouseEnter={() => {
					setPaused(true)
				}}
				onMouseLeave={() => {
					setPaused(false)
				}}
			>
				<div className={styles.wrapper}>
					<div className={styles.message}>{message}</div>
					{withProgressLoader && (
						<ProgressLoader
							value={(timerValue / duration) * 100}
							color={color}
						/>
					)}
				</div>

				{isClosable && (
					<Button
						roundedFull
						size="xs"
						style={{
							padding: 0,
							height: "20px",
							minWidth: "20px"
						}}
						onClick={() => {
							_toastContext.remove(id)
						}}
					>
						<svg
							viewBox="0 -960 960 960"
							style={{
								display: "inline-block",
								verticalAlign: "middle",
								fill: "currentcolor",
								width: "16px",
								height: "16px"
							}}
						>
							<path d={closeIcon}></path>
						</svg>
					</Button>
				)}
			</Alert>
		)
	}
)
