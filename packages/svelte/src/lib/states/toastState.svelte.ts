import { Constants } from "@fefade/core"
import type { ToasterType } from "@fefade/core/types"
import { SvelteMap } from "svelte/reactivity"

let data: SvelteMap<string, ToasterType> = new SvelteMap()

export default function toastState() {
	return {
		get data() {
			return data
		},
		add(toast: ToasterType) {
			const id = crypto.randomUUID()
			const duration = toast.duration ?? Constants.TOAST_DEFAULT_DURATION
			const position = toast.position ?? "bottom-right"

			data.set(id, { ...toast, duration, position })

			return id
		},
		remove(id: string) {
			data.delete(id)
		}
	}
}

export function toast(toast: ToasterType) {
	const _toastState = toastState()
	_toastState.add(toast)
}
