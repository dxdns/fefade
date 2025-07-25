import { Constants } from "@dxdns/feflow-core"
import type { ToastType } from "@dxdns/feflow-core/types"

type ToastInputType = Omit<Partial<ToastType>, "id">

type ToastInternalType = ToastType & {
	remaining: number
	timer?: number
	start: number
	paused: boolean
}

let data = $state<ToastInternalType[]>([])

export default function toastState() {
	return {
		getAll() {
			return data
		},
		set(newData: ToastInternalType[]) {
			data = newData
		},
		add(toast: ToastInputType) {
			const id = crypto.randomUUID()
			const duration = toast.duration ?? Constants.TOAST_DEFAULT_DURATION
			const position = toast.position ?? "bottom-right"
			const message = toast.message ?? ""
			const color = toast.color ?? "info"

			const start = Date.now()

			const newToast: ToastInternalType = {
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

			this.set([...data, newToast])

			this._startTimer(newToast)

			return id
		},
		_getById(id: string) {
			return data.find((t) => t.id === id)
		},
		remove(id: string) {
			const toast = this._getById(id)
			if (toast) {
				clearTimeout(toast.timer)
				this.set(data.filter((t) => t.id !== id))
			}
		},
		_startTimer(toast: ToastInternalType) {
			toast.start = Date.now()
			toast.timer = setTimeout(() => {
				this.remove(toast.id)
			}, toast.remaining) as any as number
		},
		pause(id: string) {
			const toast = this._getById(id)
			if (toast && !toast.paused) {
				clearTimeout(toast.timer)
				toast.remaining -= Date.now() - toast.start
				toast.paused = true
			}
		},
		resume(id: string) {
			const toast = this._getById(id)
			if (toast && toast.paused) {
				toast.paused = false
				this._startTimer(toast)
			}
		},
		pauseAll() {
			data.forEach((t) => {
				if (!t.paused) {
					this.pause(t.id)
				}
			})
		},
		resumeAll() {
			data.forEach((t) => {
				if (t.paused) {
					this.resume(t.id)
				}
			})
		}
	}
}

export function toast(toast: ToastInputType) {
	const _toastState = toastState()
	_toastState.add(toast)
}
