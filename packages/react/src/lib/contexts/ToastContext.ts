import { createContext, useContext } from "react"
import type { ToasterType } from "@fefade/core/types"

export const ToastContext = createContext<{
	data: Map<string, ToasterType>
	add: (toast: ToasterType) => string
	remove: (id: string) => void
}>({
	data: new Map(),
	add: () => String(),
	remove: () => {}
})

export const useToast = () => useContext(ToastContext)
