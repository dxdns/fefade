import type { ToastType } from "../types/index.js"

const DEFAULT_DURATION = 3000

export const data = $state<{ toasts: ToastType[] }>({
	toasts: []
})

export default function toastState() {
	return {
		data,
		add(partialToast: Omit<Partial<ToastType>, "id">) {
			const generateToast = (
				partial: Omit<Partial<ToastType>, "id">
			): ToastType => ({
				id: crypto.randomUUID(),
				message: partial.message ?? "",
				duration: partial.duration ?? DEFAULT_DURATION
			})
			data.toasts = [...data.toasts, generateToast(partialToast)]
		},
		remove(id: string) {
			data.toasts = data.toasts.filter((t) => t.id !== id)
		},
		clear() {
			data.toasts = []
		},
		async clearWithDelay(step = 200) {
			const toastsCopy = [...data.toasts].sort(
				(a, b) =>
					(b.duration ?? DEFAULT_DURATION) - (a.duration ?? DEFAULT_DURATION)
			)

			for (const toast of toastsCopy) {
				this.remove(toast.id)
				await new Promise((res) => setTimeout(res, step))
			}
		}
	}
}
