import { CSSProperties, useState, type PropsWithChildren } from "react"
import type { AlignmentType, ToasterType } from "@fefade/core/types"
import { ToastContext } from "../../contexts/ToastContext"
import { Constants } from "@fefade/core"
import { classMapUtil } from "@fefade/core/utils"
import Toast from "./Toast"
import styles from "@fefade/core/styles/Toaster.module.css"

type Props = PropsWithChildren & {
	fullWidth?: boolean
}

export default function ({ fullWidth = false, children }: Props) {
	const [isHovered, setIsHovered] = useState(false)
	const [data, setData] = useState<Map<string, ToasterType>>(new Map())

	const maxToasts = Constants.MAX_TOASTS(fullWidth)

	function remove(id: string) {
		setData((prev) => {
			const newMap = new Map(prev)
			newMap.delete(id)
			return newMap
		})
	}

	function add(toast: ToasterType) {
		const id = crypto.randomUUID()
		const duration = toast.duration ?? Constants.TOAST_DEFAULT_DURATION
		const position = toast.position ?? "bottom-right"

		setData((old) => {
			const newMap = new Map(old)
			newMap.set(id, { ...toast, duration, position })
			return newMap
		})

		return id
	}

	function groupedData(alignment: AlignmentType) {
		return Array.from(data)
			.filter(([_, t]) => t.position === alignment)
			.slice(-maxToasts)
			.reverse()
	}

	return (
		<ToastContext.Provider value={{ data: data, add, remove }}>
			{Constants.alignments.map((alignment) => {
				const pos = alignment.split("-")[0]
				const isPositionTop = pos === "top"
				const grouped = groupedData(alignment)

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
						{Array.from(grouped).map(([id, item], i) => (
							<div
								key={id}
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
								<Toast {...item} id={id} className={styles.toast} />
							</div>
						))}
					</div>
				)
			})}
			{children}
		</ToastContext.Provider>
	)
}
