import { CSSProperties, useState, type PropsWithChildren } from "react"
import type { ToastInputType, ToastStateType } from "@dxdns-kit/core/types"
import { ToastContext } from "../../contexts/ToastContext"
import { Constants } from "@dxdns-kit/core"
import { classMapUtil } from "@dxdns-kit/core/utils"
import Toast from "./Toast"
import styles from "@dxdns-kit/core/styles/Toaster.module.css"

type Props = PropsWithChildren & {
	fullWidth?: boolean
}

export default function ({ fullWidth = false, children }: Props) {
	const [data, setData] = useState<ToastStateType[]>([])
	const [isHovered, setIsHovered] = useState(false)

	const maxToasts = fullWidth ? 1 : 3

	function getById(id: string) {
		return data.find((t) => t.id === id)
	}

	function remove(id: string) {
		setData((old) => {
			old.forEach((t) => {
				if (t.id === id && t.timer) {
					clearTimeout(t.timer)
				}
			})

			return old.filter((t) => t.id !== id)
		})
	}

	function add(toast: ToastInputType) {
		const id = crypto.randomUUID()
		const duration = toast.duration ?? Constants.TOAST_DEFAULT_DURATION
		const position = toast.position ?? "bottom-right"
		const message = toast.message ?? ""
		const color = toast.color ?? "info"

		const start = Date.now()

		const newToast: ToastStateType = {
			id,
			message,
			duration,
			position,
			color,
			remaining: duration,
			start,
			paused: false,
			...toast
		}

		setData((old) => [...old, newToast])

		return id
	}

	return (
		<ToastContext.Provider value={{ data, add, getById, remove }}>
			{Constants.alignments.map((alignment) => {
				const pos = alignment.split("-")[0]
				const isPositionTop = pos === "top"
				const grouped = data
					.filter((t) => t.position === alignment)
					.slice(-maxToasts)
					.reverse()

				return (
					<div
						key={alignment}
						className={classMapUtil(
							[alignment, styles],
							[pos, styles],
							{
								[styles.fullWidth]: fullWidth
							},
							styles.toaster
						)}
					>
						{grouped.map((item, i) => (
							<div
								key={item.id}
								role="region"
								className={styles.wrapper}
								onMouseEnter={() => {
									setIsHovered(true)
								}}
								onMouseLeave={() => {
									setIsHovered(false)
								}}
								style={
									{
										["--toast-opacity"]: isHovered ? 1 : 1 - i * 0.08,
										["--toast-z-index"]: isHovered ? 1000 : 1000 - i,
										["--toast-translate"]: `${isPositionTop ? i * (isHovered ? 52 : 8) : -i * (isHovered ? 52 : 8)}px`,
										["--toast-scale"]: isHovered ? 1 : 1 - i * 0.05
									} as CSSProperties
								}
							>
								<Toast
									id={item.id}
									message={item.message}
									color={item.color}
									isClosable={item.isClosable}
									withProgressLoader={item.withProgressLoader}
									className={styles.toast}
								/>
							</div>
						))}
					</div>
				)
			})}
			{children}
		</ToastContext.Provider>
	)
}
