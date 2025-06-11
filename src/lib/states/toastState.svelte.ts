import { TOAST_DEFAULT_DURATION } from "../constants.js"
import type { ToastType } from "../types/index.js"

type ToastInputType = Omit<Partial<ToastType>, "id">

export const data = $state<{ toasts: ToastType[] }>({
	toasts: []
})

export default function toastState() {
	return {
		data,
		add(toast: ToastInputType) {
			const id = crypto.randomUUID()
			const duration = toast.duration ?? TOAST_DEFAULT_DURATION
			const position = toast.position ?? "bottom-right"
			const message = toast.message ?? ""

			data.toasts = [
				...data.toasts,
				{
					id,
					message,
					duration,
					position,
					...toast
				}
			]

			setTimeout(() => {
				this.remove(id)
			}, duration)
		},
		async remove(id: string) {
			data.toasts = data.toasts.filter((toast) => toast.id !== id)
		}
	}
}

export function toast(toast: ToastInputType) {
	const _toastState = toastState()
	_toastState.add(toast)
}
