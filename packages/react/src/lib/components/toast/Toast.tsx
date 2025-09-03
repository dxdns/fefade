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
		const toast = _toastContext.getById(id)
		const toastRemaining = toast?.remaining ?? 3000

		const [timerValue, setTimerValue] = useState(toastRemaining)

		const interval = setInterval(() => {
			if (timerValue > 0 && !toast?.paused) {
				setTimerValue(Math.max(timerValue - 100, 0))
			}
		}, 100)

		useEffect(() => {
			return () => {
				clearInterval(interval)
			}
		})

		return (
			<Alert
				{...rest}
				ref={ref}
				className={classMapUtil(className, styles.toast)}
				onMouseEnter={() => {
					_toastContext.pause(id)
				}}
				onMouseLeave={() => {
					_toastContext.resume(id)
				}}
				color={color}
			>
				<div className={styles.wrapper}>
					<div className={styles.message}>{message}</div>
					{
						withProgressLoader && <></>
						// <ProgressLoader
						// 	value={(timerValue / toastRemaining) * 100}
						// 	color={color}
						// />
					}
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
